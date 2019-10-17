class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    enqueue(elem) {
        const node = new Node(elem);
        if (!this.head) {
            this.head = node;
            this.size ++;
            return;
        }
        let curr = this.head;
        node.next = curr;
        this.head = node;
        this.size ++;
    }

    dequeue() {
        let top = this.head;
        const secondTop = top.next;
        this.head = secondTop;
        this.size --;
        return top;
    }
}

let q = new Queue();
q.enqueue(5);
q.enqueue(6);
const elem = q.dequeue();
q.enqueue(7);
q.enqueue(8);

const graph = [
    {item: 0, neighbors: [1, 9]},
    {item: 1, neighbors: [0, 8]},
    {item: 9, neighbors: [0, 8]},  
    {item: 8, neighbors: [1, 9, 7]}, 
    {item: 7, neighbors: [8, 10, 11, 3, 6]}, 
    {item: 6, neighbors: [7, 5]}, 
    {item: 3, neighbors: [7, 2, 4]},
    {item: 10, neighbors: [7]},
    {item: 11, neighbors: [7]},
    {item: 5, neighbors: [6]},
    {item: 4, neighbors: [3]},
    {item: 2, neighbors: [3]}
];

function bfsAlgo() {
    q = new Queue();
    const startingNode = graph[0];
    q.enqueue(startingNode);
    console.log('Visited Node', startingNode.item);
    startingNode.visited = true;
    
    do {
        const node = q.dequeue();
        for (const nb of node.element.neighbors) {
            const item = getItem(nb);
            if (!item.visited) {
                item.visited = true;
                console.log('Visited Node', item.item);
                q.enqueue(item);
            }
         }
    }
    while (q.size !== 0);
}

function getItem(elem) {
    for (const vo of graph) {
        if (elem === vo.item) {
            return vo;
        }
    }
}

bfsAlgo();
