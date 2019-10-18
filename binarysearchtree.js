class Node {
    constructor(elem) {
        this.data = elem;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    insert(elem) {
        const node = new Node(elem);
        if (!this.root) {
            this.root = node;
            this.size ++;
            return;
        }
        let currNode = this.root;
        while (currNode) {
            if (elem < currNode.data) {
                if (!currNode.left) {
                    currNode.left = node;
                    break;
                } else {
                    currNode = currNode.left;
                }
            } else if (elem > currNode.data) {
                if (!currNode.right) {
                    currNode.right = node;
                    break;
                } else {
                    currNode = currNode.right;
                }
            } else {
                console.log('Try Different value');
            }
        }
    }


    traverse(node, elem) {
        

    }


    /*
    traverse(node, elem) {
        if (!node.left && !node.right) {
            if (elem < node.data) {
                node.left = new Node(elem);
            } else if (elem > node.right) {
                node.right = new Node(elem);
            }
            return;
        }
       if (elem < node.left.data) {
        if (node.left === null) {
            node.left = new Node(elem);
        } else {
            this.traverse(node.left, elem);
        }
       } else if (elem > node.right.data) {
           if (node.right === null) {
            node.right = new Node(elem);
           } else {
               this.traverse(node.right, elem);
           }
       }
    }
    */
}


const bst = new BinarySearchTree();
bst.insert(7);
bst.insert(20);
bst.insert(5);
bst.insert(15);
bst.insert(10);
bst.insert(4);
// bst.insert(4);
bst.insert(33);
bst.insert(2);
bst.insert(25);
bst.insert(6);
debugger;