class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        const node = new Node(element);
        if (!this.head) {
            this.head = node;
            this.size ++;
            return;
        }
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
        this.size ++;
    }

    insertAt(element, location) {
        let current = this.head;
        let prev;
        let index = 0;
        while (index < location) {
           prev = current;
           current = current.next;
            index ++;
        }
       const node = new Node(element);
       node.next = current;
       prev.next = node;
       this.size ++;
    }

    removeFrom(location) {
        let current = this.head;
        let prev;
        let index = 0;
        while (index < location) {
           prev = current;
           current = current.next;
            index ++;
        }
        let temp = current;
        const next = current.next;
        prev.next = next;
        temp = null;
        this.size --;
    }

    removeElement(element) {
        let current = this.head;
        let prev;
        while (current.element !== element) {
           prev = current;
           current = current.next;
        }
        let temp = current;
        let next = current.next;
        prev.next = next;
        temp = null;
        this.size --;
    }
}

const ll = new LinkedList();
ll.add(5);
ll.add(6);
ll.add(7);
ll.add(9);
ll.add(10);
ll.add(11);

ll.insertAt(8, 3);
ll.removeFrom(2);

ll.removeElement(10);
debugger;

