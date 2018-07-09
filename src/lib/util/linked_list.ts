export class ListNode<T> {
    element: T;
    next: ListNode<T>;
    previous: ListNode<T>;

    constructor(element: T) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

export class LinkedList<T> {
    private _head: ListNode<T>;
    private _tail: ListNode<T>;
    private _length: number;

    constructor(elements?: T[]) {
        this._head = null;
        this._tail = null;
        this._length = 0;
        if (elements) {
            for (let e of elements) {
                this.append(e);
            }
        }
    }

    get head(): ListNode<T> {
        return this._head;
    }

    get tail(): ListNode<T> {
        return this._tail;
    }

    get length(): number {
        return this._length;
    }

    public prepend(element: T): void {
        let node = new ListNode<T>(element);
        if (this._length === 0) {
            this._head = node;
            this._tail = node;
        }
        else {
            this._head.previous = node;
            node.next = this._head;
            this._head = node;
        }
        ++this._length;
    }

    public append(element: T): void {
        let node = new ListNode<T>(element);
        if (this._length === 0) {
            this._head = node;
            this._tail = node;
        }
        else {
            this._tail.next = node;
            node.previous = this._tail;
            this._tail = node;
        }
        ++this._length;
    }

    /**
     * index 从0开始，保证链表第index个位置是指定元素
     * @param {number} index
     * @param {T} element
     */
    public insert(index: number, element: T): void {
        if (index >= this._length || index < 0) {
            throw  new Error('index not valid, index=' + index + ', length=%d' + this._length);
        }

        if (index === 0) {
            this.prepend(element);
        } else if (index === (this._length - 1)) {
            this.append(element);
        }
        else {
            let cur = this._head;
            let node = new ListNode<T>(element);
            let t = index;
            while (--t > 0) {
                cur = cur.next;
            }

            if (index === 0) {
                this._head = node;
            }

            node.previous = cur;
            node.next = cur.next;
            cur.next.previous = node;
            cur.next = node;

            ++this._length;
        }
    }

    /**
     * index 从0开始，删除第index个node
     * @param {number}
     * @returns {LinkedList}
     */
    public delete(index: number): void {
        if (index >= this._length || index < 0) {
            throw new Error('index exceed the length, index=' + index + ', length=%d' + this._length);
        }
        if (index === 0) {
            this.deleteNode(this._head);
        } else if (index === this._length - 1) {
            this.deleteNode(this._tail);
        } else {
            let cur = this._head;
            while (index--) {
                cur = cur.next;
            }
            this.deleteNode(cur);
        }
    }

    /**
     * 会直接释放node的内存，使用时注意
     * @param {ListNode<T>} node
     */
    public deleteNode(node: ListNode<T>): void {
        if (!this._head && !this._tail) {
            return;
        }
        else {
            if (this._head === this._tail) {
                this._head = null;
                this._tail = null;
            }
            else if (this._head === node) {
                this._head.next.previous = null;
                this._head = this._head.next;
            }
            else if (this._tail === node) {
                this._tail.previous.next = null;
                this._tail = this._tail.previous;
            }
            else {
                node.previous.next = node.next;
                node.next.previous = node.previous;
            }
            --this._length;
            node = null;
        }
    }

    public toString(forward: boolean = true): string {
        let cur = forward ? this._head : this._tail, ret = '';
        while (cur) {
            ret += cur.element + ',';
            cur = forward ? cur.next : cur.previous;
        }
        return ret.substring(0, ret.length - 1);
    }

    public reverse(): void {
        if (this._length) {
            let t = this._head;
            this._head = this._tail;
            this._tail = t;
        }
    }

    public clear(): void {
        if (this._length) {
            this._length = 0;
            this._head = null;
            this._tail = null;
        }
    }

    public sort(): void {
        // TODO
    }
}