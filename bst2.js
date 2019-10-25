class Node {
    left, right, data;

    constructor(data) {
        this.data = data;
    }

    insert(value) {
        if (value <= data) {
            left = new Node(value);
        } else {
            this.left.insert(value);
        }

        if (value > data) {
            right = new Node(value);
        } else {
            this.right.insert(value);
        }
    }

    contains(value) {
        if (value === data) {
            return true;
        }
        if (value < data) {
            if (!left) {
                return false;
            } 
            return this.left.contains(value);
        }
        else {
            if (!right) {
                return false;
            }
            return this.right.contains(value);
        }
    }

    printInOrder() {
        if (left) {
            this.left.printInOrder();
        }
        console.log(data);
        if (right) {
            this.right.printInOrder();
        }
    }
}

class BST {
    checkForBST( root) {
        this.checkForBST(root, Number.MIN_VALUE, Number.MAX_VALUE);
    }

    checkForBST(node, min, max) {
        if (!node) {
            return true;
        }
        if (node.data < min || node.data > max) {
            return false;
        }
        return ((checkForBST(node.left, min, node.data -1) && checkForBST(node.right, node.data + 1, max));
    }
}

