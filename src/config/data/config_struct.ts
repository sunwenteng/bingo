//********** header **********//
import * as fs from 'fs';


//********** body **********//
// equipdb
export class equipDB {
	ID:any;				//ID
	Text_name:any;		//装备名字
	groupID:any;		//组ID
	JSON_attribute:any;	//属性组
	plus:any;			//是否进阶
	attribute1:any;		//属性1
	attribute2:any;		//属性2
	maxlv:any;			//最大等级
	raity:any;			//稀有度
	atkbasic:any;		//0级攻击
	atkgrow:any;		//成长攻击
	defbasic:any;		//0级防御
	defgrow:any;		//成长防御
	icon:any;			//图标
	matchexp:any;		//匹配升级经验
	nomatchexp:any;		//非匹配升级经验
	atkid:any;			//Atkid
	skillid:any;		//SkillId
	modelid:any;		//modelid
	LooksLv1:any;		//变装等级1
	Looks1ID:any;		//avatar1
	LooksLv2:any;		//变装等级2
	Looks2ID:any;		//avatar2
	LooksLv3:any;		//变装等级3
	Looks3ID:any;		//avatar3
	precious:any;		//是否
	Text_des:any;		//描述
	albumDisplay:any;	//显示在图鉴
	constructor(data) {
		this.ID = data.ID;
		this.Text_name = !data.Text_name ? '' : ConfigMgr.getInstance().textdb.get(data.Text_name).Name;
		this.groupID = data.groupID;
		this.JSON_attribute = data.JSON_attribute;
		this.plus = data.plus;
		this.attribute1 = data.attribute1;
		this.attribute2 = data.attribute2;
		this.maxlv = data.maxlv;
		this.raity = data.raity;
		this.atkbasic = data.atkbasic;
		this.atkgrow = data.atkgrow;
		this.defbasic = data.defbasic;
		this.defgrow = data.defgrow;
		this.icon = data.icon;
		this.matchexp = data.matchexp;
		this.nomatchexp = data.nomatchexp;
		this.atkid = data.atkid;
		this.skillid = data.skillid;
		this.modelid = data.modelid;
		this.LooksLv1 = data.LooksLv1;
		this.Looks1ID = data.Looks1ID;
		this.LooksLv2 = data.LooksLv2;
		this.Looks2ID = data.Looks2ID;
		this.LooksLv3 = data.LooksLv3;
		this.Looks3ID = data.Looks3ID;
		this.precious = data.precious;
		this.Text_des = !data.Text_des ? '' : ConfigMgr.getInstance().textdb.get(data.Text_des).Name;
		this.albumDisplay = data.albumDisplay;
	}
}
class equipDBMgr {
                equipDBConfig : {[ID:number]: equipDB} = {};
                constructor() {
                }
                public load(data:any) {
                    this.equipDBConfig = {};
                    Object.keys(data).forEach((key) => {
                        this.equipDBConfig[data[key].ID] = new equipDB(data[key]);
                    });
                }
                public get(ID:number):equipDB {
                    return this.equipDBConfig[ID];
                }
                public all():{[ID:number]: equipDB} {
                    return this.equipDBConfig;
                }
            }

// itemdb
export class itemDB {
	ID:any;					//ID
	Text_name:any;			//名字
	type:any;				//物品类型
	raity:any;				//物品品质
	maxnum:any;				//堆叠上限
	price:any;				//出售价格
	Text_description:any;	//描述
	icon:any;				//大图标
	icon1:any;				//小图标
	precious:any;			//是否提示
	constructor(data) {
		this.ID = data.ID;
		this.Text_name = !data.Text_name ? '' : ConfigMgr.getInstance().textdb.get(data.Text_name).Name;
		this.type = data.type;
		this.raity = data.raity;
		this.maxnum = data.maxnum;
		this.price = data.price;
		this.Text_description = !data.Text_description ? '' : ConfigMgr.getInstance().textdb.get(data.Text_description).Name;
		this.icon = data.icon;
		this.icon1 = data.icon1;
		this.precious = data.precious;
	}
}
class itemDBMgr {
                itemDBConfig : {[ID:number]: itemDB} = {};
                constructor() {
                }
                public load(data:any) {
                    this.itemDBConfig = {};
                    Object.keys(data).forEach((key) => {
                        this.itemDBConfig[data[key].ID] = new itemDB(data[key]);
                    });
                }
                public get(ID:number):itemDB {
                    return this.itemDBConfig[ID];
                }
                public all():{[ID:number]: itemDB} {
                    return this.itemDBConfig;
                }
            }

// textdb
export class textDB {
	ID:any;		//ID
	Name:any;	//名称
	constructor(data) {
		this.ID = data.ID;
		this.Name = data.Name;
	}
}
class textDBMgr {
                textDBConfig : {[ID:number]: textDB} = {};
                constructor() {
                }
                public load(data:any) {
                    this.textDBConfig = {};
                    Object.keys(data).forEach((key) => {
                        this.textDBConfig[data[key].ID] = new textDB(data[key]);
                    });
                }
                public get(ID:number):textDB {
                    return this.textDBConfig[ID];
                }
                public all():{[ID:number]: textDB} {
                    return this.textDBConfig;
                }
            }

//********** footer **********//
export class ConfigMgr {
	equipdb:equipDBMgr = null;
	itemdb:itemDBMgr = null;
	textdb:textDBMgr = null;
	static instance:ConfigMgr;
	public static getInstance() {
		if(!this.instance)
			this.instance = new ConfigMgr();
		return this.instance;
	}
	public static getConfigList():Array<string> {
		return ["equipdb","itemdb","textdb"];
	}

	public loadAllConfig(jsonDir) {
		let contents, json;

		/// textdb
                try {
                    contents = fs.readFileSync(jsonDir + 'textdb.json');
                    json = JSON.parse(contents);
                    this.textdb = new textDBMgr();
                    this.textdb.load(json);
                } catch (err) {
                    throw new Error('textdb.json read failed');
                }
		/// equipdb
                try {
                    contents = fs.readFileSync(jsonDir + 'equipdb.json');
                    json = JSON.parse(contents);
                    this.equipdb = new equipDBMgr();
                    this.equipdb.load(json);
                } catch (err) {
                    throw new Error('equipdb.json read failed');
                }
		/// itemdb
                try {
                    contents = fs.readFileSync(jsonDir + 'itemdb.json');
                    json = JSON.parse(contents);
                    this.itemdb = new itemDBMgr();
                    this.itemdb.load(json);
                } catch (err) {
                    throw new Error('itemdb.json read failed');
                }
	}
}
