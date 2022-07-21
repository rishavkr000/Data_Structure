class DNode{
    constructor(data,prev = null, next = null){
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertAtBeginning(data){
        const dNode = new DNode(data)  // After creating this node, it present in memory but not linked with any list.
        // if list is empty
        if(this.size === 0){
            this.head = dNode;
            this.tail = dNode;
        }else{
            dNode.next = this.head;
            this.head.prev = dNode;
            this.head = dNode;  
        }


        this.size++;
    }

    insertAtEnd(data){
        const dNode = new DNode(data)
        // if list is empty
        if(!this.tail){
            this.head = dNode;
            this.tail = dNode
        }

        this.tail.next = dNode;
        dNode.prev = this.tail;
        this.tail = dNode;

        this.size++;
    }

    insertAtKthPosition(data, k){
        if(this.size < k){
            throw Error ("Invalid Position")
        }

        if(this.size === k){
            this.insertAtEnd(data)
        }else{
            
            const dNode = new DNode(data)
            
            let count = 1;
            let curr = this.head

            while(count !== k){
                curr = curr.next;
                count++;
            }

            let nextNode = curr.next;
            curr.next = dNode;
            dNode.prev = curr;
            dNode.next = nextNode;
            nextNode.prev = dNode;

            this.size++
        }      
    }

    printDList(){
        let curr = this.head;
        while(curr){
            console.log(curr.data)
            curr = curr.next;
        }
    }

    deletionFromBeginning(){
        if(!this.head){
            throw Error("List is empty, can't delete")
        }
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
            let temp = this.head;
            this.head = this.head.next;
    
            this.head.prev = null;
            temp.next = null;
    
            this.size--;
        }

    }

    deletionFromEnd(){
        if(!this.head){
            throw Error("List is empty, can't delete")
        }

        if(this.size == 1){
            this.deletionFromBeginning()
        }else{
            let secondLast = this.tail.prev;
            secondLast.next = null;
            this.tail.prev = null;
            this.tail = secondLast;
    
            this.size--;
        }

    }

    deletionFromKthPosition(k){
        if(this.size < k){
            throw Error("Invalid Position")
        }else if(this.size === k){
            this.deletionFromEnd();
        }else{
            let count = 1;
            let curr = this.head;
            while(count !== k){
                curr = curr.next;
                count++;
            }
            curr.prev.next = curr.next;
            curr.next.prev = curr.prev;
            curr.next = null;
            curr.prev = null;
        }
    }


}

const dList = new DoublyLinkedList();

dList.insertAtBeginning(6)
dList.insertAtBeginning(5)
dList.insertAtBeginning(4)
dList.insertAtEnd(8)
dList.insertAtEnd(7)
dList.insertAtEnd(9)
dList.insertAtKthPosition(1,2)
dList.insertAtKthPosition(1,5)

dList.printDList()

console.log("+++++++++++++++++++++++++")

// dList.deletionFromBeginning()
// dList.deletionFromEnd()
dList.deletionFromKthPosition(2)

dList.printDList()



// Time complexity of insertion
// 1. Begin :- o(1)
// 2. End   :- o(1)
// 3. Kth   :- o(n)     (Searching + insertion => o(n) + o(1) => o(n))


// Time complexity of deletion
// 1. Begin :- o(1)
// 2. End   :- o(1) 
// 3. Kth   :- o(n)     (Searching + deletion => o(n) + o(1) => o(n))