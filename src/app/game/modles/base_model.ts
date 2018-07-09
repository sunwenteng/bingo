import {Role} from "./role";
import {Model} from "./model";

export abstract class BaseModel extends Model {
    loaded: boolean = false;
    role: Role = null;
    key: string;

    protected constructor(role: Role, key: string) {
        super();
        this.role = role;
        this.key = key;
    }

    protected makeDirty() {
        this.role.dirtyFields[this.key] = null;
    }

    // to redis
    public abstract serialize(): any;

    // from redis
    public abstract deserialize(data: string);

    public abstract serializeInitNetMsg();
}
