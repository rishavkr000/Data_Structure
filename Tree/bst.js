// Binary search tree

// all the nodes on left subtree having lesser value than the root node
// all the nodes on right subtree having greater value than the root node
// and all the subtree follows the above property
// then the given tree is binary search tree

// Basic operation
// Insertion, Deletion, Searching


// Use case
// Database indexing
// Binary search trees, a variant of binary trees are used in the implementation of sorting algorithms to order items.





class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}



class BST{

    constructor(){
        this.root = null;
    }


    
    
    insertRecursively(root, data){

        if(!root){
            const node = new Node(data);
            return node;
        }

        // If incoming value is greater than current node
        if(root.data < data){
            root.right = this.insertRecursively(root.right, data);
        }
        else{
            root.left = this.insertRecursively(root.left, data)
        }

        return root;
    }

    
    
    insert(data){
        this.root = this.insertRecursively(this.root, data);
    }

    
    
    
    // inorder traversal of binary search tree gives sorted array
    inorder(root){
        if(root){
            this.inorder(root.left);
            console.log(root.data)
            this.inorder(root.right);
        }

    }

    search(root, data){
        if(!root){
            // end of the tree, return null
            return null;
        }
        if(root.data > data){
            return this.search(root.left,data);
        }else if(root.data < data){
            return this.search(root.right,data);
        }

        // find that element
        return root;
    }

    findMax(root){
        if(!root){
            return null;
        }
        if(root.right === null){
            return root;
        }

        return this.findMax(root.right);
    }

    findMin(root){
        if(!root){
            return null;
        }
        if(root.right === null){
            return root;
        }

        return this.findMin(root.left);
    }

    findMaxInTree(root){
        if(!root){
            return null;
        }
        
        return Math.max(this.findMaxInTree(root.right), this.findMaxInTree(root.left),root.data);
    }

    findMinInTree(root){
        if(!root){
            return Infinity;
        }

        return Math.min(this.findMinInTree(root.right), this.findMinInTree(root.left),root.data);
    }

    delete(root, data){

        if(!root){
            return null;
        }

        if(root.data > data){
            return this.search(root.left,data);
        }else if(root.data < data){
            return this.search(root.right,data);
        }

        else{

            // we find the node that we want to delete

            // if leaf node
            if(root.left === null && root.right === null){
                return null;
            }

            else if(root.left !== null && root.right !== null){

                let maxNode = this.findMax(root.left);
                root.data = maxNode.data;
                root.left = this.delete(root.left, root.data)
            }
            else{
                let curr = root;
                if(root.left === null){
                    root = root.right;
                }
                if(root.right === null){
                    root = root.left
                }
                curr.left = null;
                curr.right = null;
            }
        }
        // return root of the sub tree
        return root;
    }


    isBST(root){
        if(!root){
            return true;
        }

        if(root.left != null && this.findMaxInTree(root.left) > root.data){
            return false;
        }
        if(root.right != null && this.findMinInTree(root.right) < root.data){
            return false;
        }

        return this.isBST(root.left) && this.isBST(root.right)
    }
}

const bst = new BST();
const arr = '6 4 10 3 1 5 7 12 9 8'.split(' ').map(val => +val)
// console.log(arr)

for(let val of arr){
    bst.insert(val)
}

console.log(bst.search(bst.root,1));
bst.delete(bst.root,1);
// console.log(bst.search(bst.root,1));

// bst.root.left.left.data = 50
bst.inorder(bst.root)

// bst.inorder(bst.root)
// bst.search(bst.root,1)
// bst.delete(bst.root,9)

// console.log(bst.findMaxInTree(bst.root))

// Average Time complexity of searching in bst