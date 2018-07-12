import {RoleModel} from "./role_model";
import {S2C} from "../../proto/cmd";
import {Log} from "../../../lib/util/log";
import {Role} from "./role";
import {modelField} from "../../../lib/util/descriptor";
import {Reward} from "./reward";

export const MAX_MAIL_BAG_SIZE = 200;

export class Mail {
    uid: number = 0;
    title: string = '';
    content: string = '';
    rwd: Reward[] = [];
    senderName: string = '';
    senderId: number = 0;
    createTime: number = Date.now();
    isNew: boolean = true;

    constructor(title?: string, content?: string, senderId?: number, senderName?: string, rwd?: Reward[]) {
        if (title && content && senderId && senderName) {
            this.title = title;
            this.content = content;
            this.senderId = senderId;
            this.senderName = senderName;
            this.rwd = rwd;
        }
    }

    serializeNetMsg(msg: S2C.Mail) {
        for (let k in msg) {
            if (!this.hasOwnProperty(k)) {
                if (k !== 'constructor' && k !== '$type' && k !== 'toJSON') {
                    Log.sError('SC_UPDATE_MAIL %s not exist in role data', k);
                }
                continue;
            }
            msg[k] = this[k];
        }
    }
}

export class MailModel extends RoleModel {
    @modelField() private _mails: { [uid: number]: Mail } = {};
    private _maxUid: number = 0;

    constructor(role: Role, key: string) {
        super(role, key);
    }

    serialize(): string {
        return JSON.stringify(this.fields);
    }

    deserialize(data) {
        let o = JSON.parse(data), t = 0;
        for (let k in o) {
            if (k === '_mails') {
                for (let uid in o[k]) {
                    let mail = new Mail();
                    for (let pro in o[k][uid]) {
                        mail[pro] = o[k][uid][pro];
                    }
                    this._mails[uid] = mail;
                    t = parseInt(uid);
                    this._maxUid = t > this._maxUid ? t : this._maxUid;
                }
            }
            else {
                this['fields'][k] = o[k];
            }
        }
    }

    serializeInitNetMsg() {
        let pck = S2C.SC_UPDATE_MAIL.create(), msg;
        for (let uid in this._mails) {
            msg = S2C.Mail.create();
            this._mails[uid].serializeNetMsg(msg);
            pck.mails[uid] = msg;
        }
        return pck;
    }

    private createMail(title: string, content: string, senderId: number, senderName: string, rwd: Reward[]): Mail {
        if (this.getMailBagSize() >= MAX_MAIL_BAG_SIZE) {
            return null;
        }

        return new Mail(title, content, senderId, senderName);
    }

    private addMail(mail: Mail): boolean {
        mail.uid = ++this._maxUid;
        if (this._mails.hasOwnProperty(mail.uid)) {
            Log.sInfo('mailModel maxUid, error, maxUid=%d, uid=%d', this._maxUid, mail.uid);
            return false;
        }
        this._mails[mail.uid] = mail;
        return true;
    }

    createAndAddMail(title: string, content: string, senderId: number, senderName: string, recvId: number, rwd: Reward[], bSend2Client: boolean = true): Mail {
        let mail = this.createMail(title, content, senderId, senderName, rwd);
        if (!mail) {
            return null;
        }
        if (!this.addMail(mail)) {
            return null;
        }
        if (bSend2Client) {
            let msg = S2C.SC_UPDATE_MAIL.create();
            let mailMsg = S2C.Mail.create();
            mail.serializeNetMsg(mailMsg);
            msg.mails[mail.uid] = mailMsg;
            this.role.sendProtocol(msg);
        }
        return mail;
    }

    removeMail(uid, bSend2Client: boolean = true): boolean {
        if (!this._mails.hasOwnProperty(uid)) {
            return false;
        }
        if (bSend2Client) {
            let msg = S2C.SC_UPDATE_MAIL.create();
            msg.mails[-uid] = S2C.Mail.create();
            this.role.sendProtocol(msg);
        }
        delete this._mails[uid];
        this.makeDirty();
        Log.uInfo(this.role.uid, 'uid=%d', uid);
        return true;
    }

    sendMailUpdateProtocol(mail: Mail) {
        let msg = S2C.SC_UPDATE_MAIL.create();
        let mailMsg = S2C.Mail.create();
        mail.serializeNetMsg(mailMsg);
        msg.mails[mail.uid] = mailMsg;
        this.role.sendProtocol(msg);
    }

    getMail(uid, bReadonly: boolean): Mail {
        if (!bReadonly) {
            this.makeDirty();
        }
        return this._mails[uid];
    }

    getAllMail(bReadonly: boolean): { [uid: number]: Mail } {
        if (!bReadonly) {
            this.makeDirty();
        }
        return this._mails;
    }

    getMailBagSize(): number {
        return Object.keys(this._mails).length;
    }
}