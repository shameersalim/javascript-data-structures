class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(element) {
        const node = new Node(element);
        if (!this.head) {
            this.head = node;
            this.size++;
            return;
        }
        const curr = this.head;
        node.next = curr;
        this.head = node;
        this.size++;
    }

    pop() {
        let topElem = this.head;
        const nextElem = topElem.next;
        this.head = nextElem;
        topElem = undefined;
        this.size--;
    }
}

const s = new Stack();
s.push(5);
s.push(6);
s.push(7);
s.pop();
s.push(8);


const rightMap = {
    '[': ']',
    '{': '}',
    '(': ')'
};

function checkForMatchingBrackets(input) {
    const s2 = new Stack();
    let bracketsMatching = true;
    for (const br of input) {
        let isLeftBr;
        if (!rightMap[br]) {
            isLeftBr = false;
        } else {
            isLeftBr = true;
        }
        if (isLeftBr) {
            s2.push(br);
            continue;
        } 
        if (s2.size === 0) {
            bracketsMatching = false;
            break;
        }
            const top = s2.head;
            const expectedRight = rightMap[top.element];
            if (expectedRight === br) {
                s2.pop();
            }
    }
    if (!bracketsMatching || s2.size !== 0) {
        console.log('Brackets not matching');
    } else {
        console.log('Brackets matching');
    }
}

checkForMatchingBrackets('[[{}]()]');
