// A tree is a nonlinear hierarchical data structure that consists of nodes connected by edges.

// A tree is called binary tree if each node pointing to maximum (zero, one or two children)

const queue = require("../stackandqueue/queue")  // import queue module

class Node {
    constructor(data,left,right){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let isFound = false;

class BinaryTree{
    constructor(){
        this.root = null;
        this.size = 0;
    }
    // insert a node in binary tree
    insert(data){
        const node = new Node(data)
        if(!this.root){
            this.root = node;
        }else{

            // we need to traverse the tree and find the node where we want to insert new node
            // We use level-ordered traversal 

            const queue = new Queue();

            queue.enQueue(this.root);
            queue.enQueue(null);

            while(!queue.isEmpty()){

                let temp = queue.deQueue();

                if(temp.left){
                    queue.enQueue(temp.left);
                }
                else if(!temp.left){
                    temp.left = node;
                    return;
                }
                if(temp.right){
                    queue.enQueue(temp.right);
                }
                else{
                    temp.right = node;
                    return;
                }
            }
        }
    }

    inorderTraversal(root){

        if(!root){
            return;
        }
        this.inorderTraversal(root.left);
        console.log(root.data, " -> ");
        this/this.inorderTraversal(root.right);

    }

    preorderTraversal(root){

        if(!root){
            return;
        }
        console.log(root.data, " -> ");
        this.preorderTraversal(root.left);
        this/this.preorderTraversal(root.right);
    }

    postorderTraversal(root){

        if(!root){
            return;
        }
        this.postorderTraversal(root.left);
        this/this.postorderTraversal(root.right);
        console.log(root.data, " -> ");
    }

    postordersearchingTraversal(root, val){

        if(!root){
            return;
        }
        this.postorderTraversal(root.left, val);
        this.postorderTraversal(root.right, val);
        if(root.data === val){
            console.log("Element Found", val);
            isFound = true
        }
    }

    heightOfTree(root){
        if(!root){
            return 0;
        }

        let leftTree = this.heightOfTree(root.left)
        let rightTree = this.heightOfTree(root.right)

        return Math.max(leftTree,rightTree)+1;
    }

    totalLeafNode(root){
        if(!root){
            return;
        }

        if(root.left == null && root.right == null){
            leftNodeCount++;
        }
        this.totalLeafNode(root.left)
        this.totalLeafNode(root.right)
    }

}

const binaryTree = new BinaryTree();

binaryTree.insert(1)
binaryTree.insert(2)
binaryTree.insert(3)
binaryTree.insert(4)
binaryTree.insert(5)
binaryTree.insert(6)
binaryTree.insert(7)

// console.log(binaryTree.root)

binaryTree.inorderTraversal(binaryTree.root)

binaryTree.preorderTraversal(binaryTree.root)

binaryTree.postorderTraversal(binaryTree.root)

binaryTree.postordersearchingTraversal(binaryTree.root,10,isFound)
console.log(isFound, ">>>")

console.log(binaryTree.heightOfTree(binaryTree.root))

binaryTree.totalLeafNode(binaryTree.root)
console.log(binaryTree.heightOfTree(binaryTree.root),leftNodeCount)


// Traversing Algorithm
// inorder      (Left -> data -> right) Traversal
// preorder     (data -> left -> right) Traversal
// postorder    (left -> right -> data) Traversal
// level order