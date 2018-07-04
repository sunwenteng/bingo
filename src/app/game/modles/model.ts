export abstract class Model {
    fields: any = {};

    has(key: string) {
        return this.fields.hasOwnProperty(key);
    }
}