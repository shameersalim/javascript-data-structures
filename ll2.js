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

const l11 = new LinkedList();
const l21 = new LinkedList();

function add(l1, l2) {
    const res = new LinkedList();
    const dat = l1.head.data + l2.head.data;
    res.append(dat);
}

add(l11, l21);

