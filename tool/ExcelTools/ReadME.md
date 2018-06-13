# 配表文档

## 工具安装

### 预安装
[AccessDatabaseEngine.exe](https://www.microsoft.com/zh-cn/download/confirmation.aspx?id=13255)

### 编译环境
Visual Studio 2010

### 运行环境
将env目录下的文件拷贝到ExcelTools.exe同目录下
```
├── Google.ProtocolBuffers.dll
├── Newtonsoft.Json.dll
├── ExcelTools.exe
├── protoc.exe
└── ProtoGen.exe
```

## 配表填写规范
### 配表名称
不要以数字开头

### sheet名称
对应于工具：配表生成-输入输出设置-SHEET名称。
默认为Main，所有文件导出sheet名必须统一。
其他sheet可以任意添加，不会影响输出文件。

### 内容格式
开始的1至4行为固定占用行，填写表头信息；其他行填写数据，行号必须递增排列，有效行号之间不能有空行。**空行之后/空列的数据导出时将被忽略。**
* 第1行：填写中文说明；
* 第2行：默认留空，填入s或S表示仅服务器可见；
* 第3行：列头号，第一列号必须为101。不重复编号，顺序无要求，注释用列填0；
* 第4行：英文列名，第一列必须为ID列，中文列名的前缀为"Text_"，其他列名格式视需求定。(可选)
* 第n行：之后的行第一列为主id，如果该sheet中有中文列名，则主id不能大于9999，第2-n列的值长度默认不能大于255

*注：Excel以oledb方式打开时，会根据前4行来自动判断数据格式，由于我们前四行的字符串长度不会太长，所以默认长度不能超过255*

如果想默认长度大于255，目前有一个临时的办法：
```
开始-运行-regedit.exe打开注册表
搜索TypeGuessRows，并改成1
TypeGuessRows的路经范例：
HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Office\14.0\Access Connectivity Engine\Engines\Excel\
```

******

## 配表生成

### 功能说明
将配表(.xlsx)转换成服务端和客户端可以阅读的格式，现在支持

#### csv数字：列头为excel第三行
xxx.csv

```
101,102,103
1,51020101,2
2,51020102,2
```

#### csv字符串：列头为excel第四行
xxx.csv

```
Id,Text_name,Quality
1,51020101,2
2,51020102,2
```

#### js：转换为jsObject
xxxdb.js

```
var xxxDB = {};

var xxxDBConfig = {};	// just for xxxDBConfig.get(id)

/**
 * @param id
 * @returns {xxxDB}
 */
xxxDBConfig.get = function (id) {
    return xxxDB[id];
};

Object.defineProperty(xxxDB, "rowLength",{	//数据行数
	value	:2,
	enumerable	: false
});
Object.defineProperty(xxxDB, "colLength",{	//数据列数
	value	:3,
	enumerable	: false
});

Object.defineProperty(xxxDB, "Id",{	//ID
	value	:0,
	enumerable	: false
});
Object.defineProperty(xxxDB, "Text_name",{	//名称
	value	:0,
	enumerable	: false
});
Object.defineProperty(xxxDB, "Quality",{	//品质
	value	:0,
	enumerable	: false
});

xxxDB["1"] =
{
	Id	:	101,
	Text_name	:	51020101,
	Quality	:	2
}

xxxDB["2"] =
{
	Id	:	102,
	Text_name	:	51020102,
	Quality	:	2
};
```

#### commonjs(node.js)
xxxdb.js

```
var xxxDB = {};
var xxxDB_$item = {};	// just for Object.defineProperty

/**
 * @param id
 * @returns {var xxxDB_$item = {};}
 */
module.exports.get = function (id) {
    return xxxDB[id];
};

/**
* @type {xxxDB}
*/
module.exports.config = xxxDB;
Object.defineProperty(xxxDB, "rowLength",{	//数据行数
	value	:2,
	enumerable	: false
});
Object.defineProperty(xxxDB, "colLength",{	//数据列数
	value	:3,
	enumerable	: false
});

Object.defineProperty(xxxDB, "Id",{	//ID
	value	:0,
	enumerable	: false
});
Object.defineProperty(xxxDB, "Text_name",{	//名称
	value	:0,
	enumerable	: false
});
Object.defineProperty(xxxDB, "Quality",{	//品质
	value	:0,
	enumerable	: false
});

xxxDB["1"] =
{
	Id	:	101,
	Text_name	:	51020101,
	Quality	:	2
}

xxxDB["2"] =
{
	Id	:	102,
	Text_name	:	51020102,
	Quality	:	2
};
```

#### TypeScript(node.js)
config_struct.ts

```
//********** header **********//
import fs = require('fs');
import CustomError = require('../../util/errors');
import ERRC = require('../../util/error_code');

//********** body **********//
// xxxdb
export class xxxDB {
	Id:any;						//ID
	Text_name:any;				//名称
	Quality:any;				//品质
  constructor(data) {
		this.Id = data.Id;
		this.Text_name = data.Text_name;
		this.Quality = data.Quality;
  }
}

class xxxDBMgr {
    xxxDBConfig : {[ID:number]: xxxDB} = {};
    constructor(data) {
        this.xxxDBConfig = {};
        Object.keys(data).forEach((key) => {
            this.xxxDBConfig[data[key].ID] = new xxxDB(data[key]);
        });
    }
    public get(ID:number):xxxDB {
        var config = this.xxxDBConfig[ID];
        if (!config) {
            throw new CustomError.UserError(ERRC.COMMON.CONFIG_NOT_FOUND, {
                msg: 'COMMON.CONFIG_NOT_FOUND, xxxdb, ID=' + ID
            })
        }
        return config;
    }
    public all():{[ID:number]: xxxDB} {
        return this.xxxDBConfig;
    }
}

//********** footer **********//
export class ConfigMgr {
	xxxdb:xxxDBMgr = null;

	public loadAllConfig(jsonDir) {
		var contents, json;

		/// xxxdb
        try {
            contents = fs.readFileSync(jsonDir + 'xxxdb.json');
            json = JSON.parse(contents);
            this.xxxdb = new xxxDBMgr(json);
        } catch (err) {
            throw new Error('xxxdb.json read failed');
        }
	}
}

```

#### ProtoBuffer
xxx.proto
```
message xxxTable
{
	optional string tname = 1;
	repeated xxx tlist = 2;
}

message xxx
{
	optional string Id=101;
	optional string Text_name=102;
	optional string Quality=103;
}
```
xxx.txt(临时文件)
```
1,51020101,2
2,51020102,2
```
xxxPro.cs(临时文件)
```
using System.IO;
using Google.ProtocolBuffers;
using System;

class Program
{
	static void addData( out xxx data, string[] arr )
	{
		xxx.Builder itemBuilder = xxx.CreateBuilder();
		itemBuilder.SetId( arr[0] );
		itemBuilder.SetTextName( arr[1] );
		itemBuilder.SetQuality( arr[2] );
		data = itemBuilder.Build();
	}

	static void Main( string[] args )
	{
		xxxTable.Builder tableBuilder = xxxTable.CreateBuilder();
		tableBuilder.SetTname( "xxx" );
		using ( StreamReader reader = new StreamReader( File.OpenRead( "\\proto\\out\\path\\xxx.txt" ) ) )
		{
			string strLine = null;
			while ( ( strLine = reader.ReadLine() ) != null )
			{
				string[] arrCell;
				arrCell = strLine.Split( '\t' );
				xxx _data;
				addData( out _data, arrCell );
				tableBuilder.AddTlist( _data );
			}
		}

		xxxTable tbl = tableBuilder.Build();

		using ( FileStream stream = new FileStream( "C:\\Users\\yangyanbin\\Desktop\\proto\\xxx.dbp", FileMode.Create ) )
		{
			tbl.WriteTo( stream );
			stream.Flush();
			stream.Close();
		}
	}
}
```
Proto.bat(临时文件)
```
@echo off
setlocal EnableDelayedExpansion

.\protoc.exe --descriptor_set_out=xxx.protobin --include_imports xxx.proto
.\ProtoGen.exe xxx.protobin
csc.exe /r:Google.ProtocolBuffers.dll /out:xxx.exe Xxx.cs xxxPro.cs
.\xxx.exe

del *.dll
del *.exe
del *.protobin
del *.cs
del *.txt
del %0%
```
xxx.dbp
```
xxxPro.cs生成的protobuffer二进制串
```

#### 中文提取
工具会提取列名前缀为"Text_"的列，并将其导入文字表(text.xlsx)，同时替换该表导出文件中的相应文字,方便多语言版本的制作。
> **注：工具会为有中文的配表添加前缀，并按照：表格前缀(2位)+列号(3位)+行号(4位)的顺序生成文字表ID。**

### 界面
#### 输入输出设置
* EXCEL目录：该目录下为所有Excel配表文件；
* CSV目录：生成的csv文件目录；
* JS目录：生成的js文件目录；
* CommonJS目录：生成的CommonJS文件目录。
* TypeScript目录：生成的TypeScript文件目录。
* ProtoBuffer目录：生成的ProtoBuffer文件目录。
* textdb.js目录：生成的中文文字目录，**仅对JS格式有效**。
* SHEET名称: 导出数据来源sheet，默认Main
* TEXT表名称: 导出文字表表名，默认text.xlsx
* TEXT表ID列：导出文字表主Id列列名，默认Id
* TEXT表Name列：导出文字表文字列列名，默认Name

#### 其他设置
* CSV(数字)：目前地城组使用
* CSV(字符串)：目前幻想英雄3d组使用
* JS：目前地城组使用
* CommonJS：目前暂无使用
* TypeScript：目前猎龙组使用
* ProtoBuffer：目前暂无使用
* textdb.js：目前地城组使用
* 存在第四行：表明存在英文列名，当前在开发中的项目组均需勾选。*是因为要匹配老英雄的配表添加的勾选项*

#### 使用
* 导出CSV并生成TEXT表：会强制导出所有配表
* 仅导出CSV：支持手选需要导出的表，仅导出CSV，**不会生成中文表**，*建议仅对没有中文列的配表使用*

******

## TEXT差异
### 功能说明
对比*配表生成*中导出的文字表(text.xlsx)差异，方便多语言版本的制作。
* 比较新旧TEXT表差异： 通过比较配表工具生成的新旧TEXT表生成差异表， 旧版本TEXT表(中文)+新版本TEXT表（中文）->TEXT差异表（中文）
* 根据翻译后的差异生成新TEXT表：通过中文差异表翻译过来的外文差异表和旧版外文Text表生成新版外文TEXT表，TEXT差异表（外语）+旧版本TEXT表（外语）->新版本TEXT表（外语）

### 界面
#### 输入输出设置
* 旧TEXT文件：必填输入文件，旧中文表文件路径
* 新TEXT文件：必填文件，新中文表文件路径
* 差异表路径：必填路径，存放新旧中文表文件差异的目录
* SHEET名称: 导出数据来源sheet，默认Main

#### 其他设置
* 存在第四行：表明存在英文列名，当前在开发中的项目组均需勾选。*是因为要匹配老英雄的配表添加的勾选项*

******

## 功能订制
### 功能说明
对指定分支的配表进行定制，方便多版本之间的数据修改（新增或修改）。


### 订制表说明
每个多语言语版本有一张【不受版本限制】的差异表，记录了这个语言版本【在所有功能版本中】相对中文版本的【修改】或【增加】项。

### 订制表填写
开始的第1行，填写表头信息；其他行填写数据。*表名可以重复，但相同表名的行id必须不同，相同行id的列id也必须不同*
* 第1行：表头
* 第n行：依次填写


A-E列为必填，后面的列可无线扩展
* A列：表名
* B列：修改(1)/新增(2)
* C列：行Id
* D列：列Id
* E列：内容
* F列：列Id
* G列：内容
* 后面依次类推

* sheet名：用来区分不同的语言版本，具体格式随意

*注：Excel以oledb方式打开时，会根据前4行来自动判断数据格式，由于我们前四行的字符串长度不会太长，所以默认长度不能超过255*

如果想默认长度大于255，目前有一个临时的办法：
```
开始-运行-regedit.exe打开注册表
搜索TypeGuessRows，并改成1
TypeGuessRows的路经范例：
HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Office\14.0\Access Connectivity Engine\Engines\Excel\
```

#### 输入输出设置
* 订制表文件：必填项，定制表路径
* 订制表SHEET：在填写定制表文件路径后，下拉选择语言版本
* 功能表目录（输入）：必填输入路径，一般为主语言版本配表目录（中/英）
* 功能表目录（输出）：必填输出路径，其他语言版本配表目录（小语种等）
* 旧功能表目录（可选）：可选输入路径，用来比较是否与旧版本小语种配表有冲突
* 订制冲突文件（可选）：可选输出路径，用来存放输出的冲突文件
* SHEET名称: 导出数据来源sheet，默认Main

#### 其他设置
* 存在第四行：表明存在英文列名，当前在开发中的项目组均需勾选。*是因为要匹配老英雄的配表添加的勾选项*

******

## 版本差异
### 功能说明
对指定的两个目录下的文件进行比较，并支持对差异的一键修改。

#### 输入输出设置
* 老版本目录：必填项，旧版本配表目录
* 新版本目录：必填项，新版本配表目录
* SHEET名称: 导出数据来源sheet，默认Main

#### 其他设置
* 存在第四行：表明存在英文列名，当前在开发中的项目组均需勾选。*是因为要匹配老英雄的配表添加的勾选项*

#### 使用
* 开始比较：比较新旧目录小所有文件，如果两者都存在文件x且有修改，则显示结果为修改。如果新版本存在y，而旧版本不存在，则心事救过为新增。
* 双击有修改的文件：出现文件差异比较，红色为修改区域，黄色为新增行
* 选择想要修改的行：可以按住ctrl多选，选择导入方向，*新增行全选用于导入所有新增的行*

>**注1：新增行，只能从有改行的文件导入没有改行的文件**+

>**注2：目前不支持删除操作，理论上也不建议删除行/列，如有需要，请和相关主程商讨**

******

## 场景文字
### 功能说明
通过正则表达式提取ui文件(json)中的中文字，方便多语言版本的制作。

### 其他
等待更新