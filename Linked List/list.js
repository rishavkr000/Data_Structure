class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addInFront(data){
        const node = new Node(data)
        if(this.head == null){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
    }

    addInEnd(data){
        let node = new Node(data)
        if(this.head == null){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node
        }
    }

    addAfterKthPosition(data, k){
        let count = 1;
        let curr = this.head;
        if(k == 0){
            this.addInFront(data)
        }                                 
        while(curr && count != k){
            curr = curr.next
            count++
        }
        if(!curr && count !== k){
            throw Error("Invalid Position")
        }else if(!curr && Count == k){
            this.addInEnd(data)
        }else{
            let node = new Node(data)
            node.next = this.head.next
            this.head.next = node
        }        
    }

    printList(){
        let curr = this.head;
        while(curr){
            console.log(curr.data)
            curr = curr.next
        }
    }
}

const list = new LinkedList()

list.addInFront(10)
list.addInFront(20)
list.addInFront(30)

list.printList()

// console.log("===================")

// list.addInEnd(7)
// list.addInEnd(9)
// list.addInEnd(11)

// list.printList()

console.log("===================")

list.addAfterKthPosition(100,2)

list.printList()