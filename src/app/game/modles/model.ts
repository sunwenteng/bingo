export abstract class Model {
    fields: any = {};

    has(key: string) {
        return this.fields.hasOwnProperty(key);
    }
}

export abstract class DirtyModel extends Model {
    dirtyFields: { [key: string]: string } = {};
}