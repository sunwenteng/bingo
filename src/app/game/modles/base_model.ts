import {Role} from "./role";

export abstract class BaseModel {
    m_Role: Role = null;
    fields: any = {};
    key:string;

    protected constructor(role: Role, key:string) {
        this.m_Role = role;
        this.key = key;
    }

    protected makeDirty() {
        this.m_Role.dirtyFields[this.key] = null;
    }
}