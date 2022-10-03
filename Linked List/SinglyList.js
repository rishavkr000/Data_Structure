// Linked list is a linear data structuredClone, used for storing collection of data.
// Properties of Linked List
    // Next element connected by Reference
    // 1st element point null
    // Linked list ka size dynamically badh sakta hai or ghat sakta hai.

// Create a node
class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

// Create a List
class LinkedList{
    constructor(){
        this.firstNode = null;
        this.lastNode = null;
    }

    //Insert in front
    insertInFrontOfList(data){
        const node = new Node(data)  // Node is created and does not linked with any list.

        // If Linked List is empty
        if(!this.firstNode){
            this.firstNode = node;
            this.lastNode = node;
        }
        // If Linked List is not empty
        else{
            const temp = this.firstNode;
            t                = node;
            node.next = temp;
        }
    }

    // Insert in Last
    insertInLastOfList(data){
        const node = new Node(data) // Create a node

        // If Linked List is empty
        if(!this.firstNode){
            this.firstNode = node;
            this.lastNode = node;
        }
        // If Linked List is not empty
        else{
            this.lastNode.next = node;
            this.lastNode = node;
        }
    }



    // Print List
    printList(){
        let curr = this.firstNode;
        while(curr){
            console.log(curr.data)
            curr = curr.next;
        }
    }

    // Craete a generalised function to insert node in the middle of linked list.
    insertAfterKthPosition(data, k){  // k is the position where we insert node.
        let count = 1;
        let curr = this.firstNode;
        while(curr && count !== k){ 
            curr = curr.next;
            count++
        }
        if(!curr && count !== k){
            console.log("Invalid Position")
            throw Error("Invalid Position")
        }
        else if(curr === null && count === k){
            this.insertInLastOfList(data)
        }
        else{
            const node = new Node(data)
            node.next = curr.next;
            curr.next = node
        }
    }

    // Delete node from front
    deleteFromFront(){
        if(!this.firstNode){
            throw Error("We can't delete from empty list.")
        }
        let temp = this.firstNode;
        this.firstNode = this.firstNode.next;
        temp.next = null
        if(!this.firstNode){
            this.lastNode = null;
        }
    }

    // Delete node from last
    deleteFromLast(){
        let curr = this.firstNode
        while(curr.next !== this.lastNode){
            curr = curr.next
        }
        console.log(curr, this.lastNode)
        curr.next = null
        this.lastNode = curr;
    }

    // Delete node from any position
    deleteFromKthPosition(k){
        let count = 1;
        let curr= this.firstNode
        if(k === 1){
            this.deleteFromFront();
        }
        while(curr && count != k - 1){
            curr = curr.next;
            count++;
        }
        if(!curr){
            console.log("Invalid Position")
            throw Error("Invalid Position")
        }
        else{
            let targetNode = curr.next;
            curr.next = targetNode.next;
            targetNode.next = null

            // If we remove last node
            if(!curr.next){
                this.lastNode = curr;
            }
        }
    }
    reverseList(){

        let curr = null;
        while(this.firstNode){
            if(!curr){
                this.lastNode = this.firstNode;
            }
            let nextNode=this.firstNode.next;
            this.firstNode.next =curr;
            curr = this.firstNode;
            this.firstNode = nextNode
        }
        this.firstNode=curr;
    }

    loopStartNodeHashingTechnique(){
        let isLoopStarted = false;
        let set = new Set();
        
        let curr = this.firstNode;
        while(curr && !isLoopStarted){
            if(set.has(curr)){
                isLoopStarted=true;
            }else{
                set.add(curr);
                curr=curr.next
            }
        }
        if(isLoopStarted){
            return curr;
        }
        return null;
    }

    loopDeletionWithSlowPtr(){
        let slowPtr=this.firstNode;
        let fastPtr = slowPtr.next;

        while(slowPtr && fastPtr && fastPtr.next){
            slowPtr=slowPtr.next;
            fastPtr = fastPtr.next.next;
            if(slowPtr === fastPtr){
                return true
            }
        }
        return false;
    }
}

const list = new LinkedList();
list.insertInFrontOfList(25);
list.insertInFrontOfList(60);
list.insertInLastOfList(5);
list.insertInLastOfList(10)

list.printList()

console.log("=========================")

list.insertAfterKthPosition(16,4)

list.printList()

console.log("=========================")

list.deleteFromKthPosition(4)

list.printList()


/**
 * what we have learned till now
 * insertionIn front
 * insertion in middle
 * insertion in last
 * iteration over linked list
 */
/**
 * insertion Time Complexity
 * Insertion in front= O(1)
 * insertion in last = O(1)
 * insertion in between =O(n) //we need to traverse the list
 */
/*deletion Time Complexity
 * Deletion in front=O(1)
 * Deletion in last = O(1)
 * Deletion in between =O(n) //we need to traverse the list */

/*array insertion Time Complexity
last O(1)
middle O(n)
front O(n)

deletion in array Time Complexity
last O(1)
middle O(n)
front O(n)
*/
//**ask interview detect loop in list */
// }

module.exports = LinkedList