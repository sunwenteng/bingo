/*
 * StringChecker.h
 */

#ifndef STRINGCHECKER_H_
#define STRINGCHECKER_H_

#include <cstring>
#include <string>
#include <vector>

#include <node.h>
#include <node_object_wrap.h>

typedef long long         	int64;
typedef int                 int32;
typedef short               int16;
typedef signed char         int8;
typedef unsigned long long  uint64;
typedef unsigned int        uint32;
typedef unsigned short      uint16;
typedef unsigned char       uint8;

class StringChecker : public node::ObjectWrap
{
private:
	static const int BRANCH_NUM_MAX = 256;

	typedef struct Node
	{
		short depth;
		Node* next[BRANCH_NUM_MAX];
		Node* fail;
		Node()
		{
			depth = 0;
			fail = NULL;
			memset(next, 0, sizeof(next));
		}
	} Node;

	Node* root;
	std::vector<std::string> prepareQueue;
	static v8::Persistent<v8::Function> constructor;

public:
	static void Init(v8::Handle<v8::Object> exports);

	// add string pattern, need string
	static void AddPattern(const v8::FunctionCallbackInfo<v8::Value>& args);

	// invoke build after all pattern added !, no arguments
	static void Build(const v8::FunctionCallbackInfo<v8::Value>& args);

	// replace word with "***" where matches one of the patterns
	// return true if replace happened
	static void Replace(const v8::FunctionCallbackInfo<v8::Value>& args);

	// delete trie and reset root
	static void Reset(const v8::FunctionCallbackInfo<v8::Value>& args);

private:
	StringChecker();
	~StringChecker();

	void DeleteTree(Node* node);
	void AddOnePattern(std::string str);
	void ClearFail(Node* node);

	static void New(const v8::FunctionCallbackInfo<v8::Value>& args);
};

#endif /* STRINGCHECKER_H_ */