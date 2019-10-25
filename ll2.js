class Node {
    data;
    next;

    constructor(data) {
        this.data = data;
    }

    
}

class LinkedList {
    append(value) {
        if (!head) {
            head = new Node(value);
            return;
        }
        let current = this;
        while (current.next != null) {
            current = current.next;
        }
        current.next = new Node(value);
    }
}