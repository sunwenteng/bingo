/*
 * AC自动机，用于屏蔽词 StringChecker.cpp
 */

#include "StringChecker.h"

#include <stddef.h>
#include <queue>

using namespace v8;

Persistent<Function> StringChecker::constructor;

StringChecker::StringChecker()
{
	root = new Node();
	prepareQueue.clear();
}

StringChecker::~StringChecker()
{
	DeleteTree( root );
}

void StringChecker::Init(Handle<Object> exports)
{
	Isolate* isolate = Isolate::GetCurrent();

	Local<FunctionTemplate> tpl = FunctionTemplate::New(isolate, New);
	tpl->SetClassName(String::NewFromUtf8(isolate, "StringChecker"));
	tpl->InstanceTemplate()->SetInternalFieldCount(1);

	NODE_SET_PROTOTYPE_METHOD(tpl, "add", AddPattern);
	NODE_SET_PROTOTYPE_METHOD(tpl, "build", Build);
	NODE_SET_PROTOTYPE_METHOD(tpl, "replace", Replace);
	NODE_SET_PROTOTYPE_METHOD(tpl, "reset", Reset);

	constructor.Reset(isolate, tpl->GetFunction());
	exports->Set(String::NewFromUtf8(isolate, "StringChecker"), tpl->GetFunction());
}

void StringChecker::New(const FunctionCallbackInfo<Value>& args)
{
	Isolate* isolate = Isolate::GetCurrent();
	HandleScope scope(isolate);

	if (args.IsConstructCall())
	{
		StringChecker* obj = new StringChecker();
		obj->Wrap(args.This());
		args.GetReturnValue().Set(args.This());
	}
	else
	{
		const int argc = 0;
		Local<Value> argv[argc] = { };
		Local<Function> cons = Local<Function>::New(isolate, constructor);
		args.GetReturnValue().Set(cons->NewInstance(argc, argv));
	}
}

void StringChecker::AddPattern( const v8::FunctionCallbackInfo<v8::Value>& args )
{
	Isolate* isolate = Isolate::GetCurrent();
	HandleScope scope(isolate);

	if (args.Length() < 1)
	{
		isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate,
				"Wrong number of arguments")));
		return ;
	}

	if (!args[0]->IsString())
	{
		isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate,
				"Wrong type of arguments, need string")));
		return ;
	}

	std::string value(*String::Utf8Value(args[0]->ToString()));

	StringChecker* obj = ObjectWrap::Unwrap<StringChecker>(args.Holder());

	obj->prepareQueue.push_back(value);

	args.GetReturnValue().Set(Boolean::New(isolate, true));
}

void StringChecker::Build(const v8::FunctionCallbackInfo<v8::Value>& args)
{
	Isolate* isolate = Isolate::GetCurrent();
	HandleScope scope(isolate);

	StringChecker* obj = ObjectWrap::Unwrap<StringChecker>(args.Holder());

	// clear all fail pointer
	obj->ClearFail(obj->root);
	int size = obj->prepareQueue.size();
	for (int i = 0; i < size; i++)
	{
		obj->AddOnePattern(obj->prepareQueue[i]);
	}
	obj->prepareQueue.clear();

	std::queue< Node* > q;

	obj->root->fail = NULL;
	q.push( obj->root );

	while ( !q.empty() )
	{
		Node* node = q.front(); q.pop();
		for ( int i = 0; i < BRANCH_NUM_MAX; i++ )
		{
			if ( node->next[i] == NULL ) continue;
			Node* p = node->fail;
			while ( p )
			{
				if ( p->next[i] )
				{
					node->next[i]->fail = p->next[i];
					break;
				}
				p = p->fail;
			}
			if ( p == NULL )
			{
				node->next[i]->fail = obj->root;
			}
			q.push( node->next[i] );
		}
	}

	args.GetReturnValue().Set(Boolean::New(isolate, true));
}

void StringChecker::Replace(const v8::FunctionCallbackInfo<v8::Value>& args)
{
	Isolate* isolate = Isolate::GetCurrent();
	HandleScope scope(isolate);

	if (args.Length() < 1)
	{
		isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate,
				"Wrong number of arguments")));
		return ;
	}

	if (!args[0]->IsString())
	{
		isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate,
				"Wrong type of arguments, need string")));
		return ;
	}

	std::string src(*String::Utf8Value(args[0]->ToString()));

	StringChecker* obj = ObjectWrap::Unwrap<StringChecker>(args.Holder());

	bool ret = false;
	std::string tmp;
	std::string::iterator st = src.begin();
	std::string::iterator ed = src.begin();

	Node* node = obj->root;

	while ( ed != src.end() )
	{
		uint8 k =  *ed; // it must be cast to Unsigned !!
		if ( 'A' <= k && k <= 'Z')
			k += 'a' - 'A';

		while ( node->next[k] == NULL && node != obj->root )
		{
			node = node->fail;
		}

		if ( node->next[k] ) node = node->next[k];

		if ( node != obj->root && node->depth )
		{
			for( int i = ( ed - src.begin() + 1 - node->depth ); i < ( ed - src.begin() + 1 ); ++i )
			{
				src[i] = '*';
			}
			ret = true;
		}
		++ed;
	}

	if (ret)
		args.GetReturnValue().Set(String::NewFromUtf8(isolate, src.c_str()));
	else
		args.GetReturnValue().Set(String::NewFromUtf8(isolate, ""));
}

void StringChecker::Reset(const v8::FunctionCallbackInfo<v8::Value>& args)
{
	Isolate* isolate = Isolate::GetCurrent();
	HandleScope scope(isolate);

	StringChecker* obj = ObjectWrap::Unwrap<StringChecker>(args.Holder());

	obj->DeleteTree( obj->root );
	obj->prepareQueue.clear();
	obj->root = new Node();

	args.GetReturnValue().Set(Boolean::New(isolate, true));
}

void StringChecker::DeleteTree( Node* node )
{
	for ( int i = 0; i < BRANCH_NUM_MAX; i++ )
	{
		if ( node->next[i] ) DeleteTree( node->next[i] );
	}
	delete node;
}

void StringChecker::AddOnePattern(std::string value)
{
	const char* pat = value.c_str();

	uint16 depth = 0;
	Node* node = root;
	while ( *pat )
	{
		++depth;

		uint8 k = *pat;
		if ( node->next[k] == NULL )
		{
			node->next[k] = new Node();
		}
		node = node->next[k];
		++pat;
	}
	node->depth = depth;
}

void StringChecker::ClearFail(Node* node)
{
	for ( int i = 0; i < BRANCH_NUM_MAX; i++ )
	{
		if ( node->next[i] ) ClearFail( node->next[i] );
	}
	node->fail = NULL;
}

NODE_MODULE(StringChecker, StringChecker::Init)