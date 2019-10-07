class LLNode {
    data;
    next;
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    head;

    constructor() {
        this.head = null;
    }

    insertAtBeginning(data) {
        let newNode = new LLNode(data);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    insertAtEnd(data) {
        let newNode = new LLNode(data);
        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let tail = this.head;
        while(tail.next !== null) {
            tail = tail.next;
        }
        tail.next = newNode;
        return this.head;
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter ++;
            node = node.next;
        }
        return null;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new LLNode(data, this.head);
            return;
        }
        const prev = this.getAt(index - 1);
        let newNode = new LLNode(data);
        newNode.next = prev.next;
        prev.next = newNode;
        return this.head;
    }

    deleteFirstNode() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
        return this.head;
    }

    deleteLastNode() {
        if (!this.head) {
            return;
        }

        if (this.head.next !== null) {
            this.head = null;
            return;
        }

        let prev = this.head;
        let tail = this.head.next;

        while(tail.next !== null) {
            prev = tail;
            tail = tail.next;
        }
        prev.next = null;
        return this.head;
    }

    deleteAt(index) {
        if (!this.head) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        const prev = this.getAt(index - 1);
        if (!prev || !prev.next) {
            return;
        }
        prev.next = prev.next.next;
        return this.head;
    }

    deleteList() {
        this.head = null;
    }
}

