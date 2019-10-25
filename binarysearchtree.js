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

    find(elem) {
        let depth = 0;
        const node = new Node(elem);
        if (this.root.data == elem) {
            depth = 0;
            return;
        }
        let currNode = this.root;
        while (currNode) {
            if (currNode.data === elem) {
                console.log('Depth of ', elem, ' is ', depth);
                break;
            }
            if (elem < currNode.data) {
                if (!currNode.left) {
                    break;
                } else {
                    currNode = currNode.left;
                    depth ++;
                }
            } else if (elem > currNode.data) {
                if (!currNode.right) {
                    break;
                } else {
                    currNode = currNode.right;
                    depth ++;
                }
            }
           

        }
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

bst.find(7);
bst.find(20);
bst.find(5);
bst.find(15);
bst.find(10);
bst.find(4);
// bst.insert(4);
bst.find(33);
bst.find(2);
bst.find(25);
bst.find(6);
debugger;