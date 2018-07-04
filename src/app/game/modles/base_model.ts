import {Role} from "./role";
import {Model} from "./model";

export abstract class BaseModel extends Model {
    m_loaded: boolean = false;
    m_Role: Role = null;
    key: string;

    protected constructor(role: Role, key: string) {
        super();
        this.m_Role = role;
        this.key = key;
    }

    protected makeDirty() {
        this.m_Role.dirtyFields[this.key] = null;
    }

    // to redis
    public abstract serialize(): any;
    // from redis
    public abstract deserialize(data: string);
}