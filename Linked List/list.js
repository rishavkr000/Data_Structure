class Node{
    constructor(data){
        this.data = data;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addToFront(data){
        let node = new Node(data)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            let temp = this.head
            this.head = node
            node.next = temp
        }
    }

    addToEnd(data){
        let node = new Node(data)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
    }

    addAfterKthPosition(data, k){
        let count = 1
        let curr = this.head
        while(curr && count !== k){
            curr = curr.next
            count++
        }
        if(!curr && count !== k){
            throw Error("Invalid Position")
        }else if(!curr && count == k){
            this.addToEnd(data)
        }else{
            const node = new Node(data)
            node.next = curr.next
            curr.next = node
        }
    }

    deleteFromFront(){
        if(!this.head){
            throw Error("Can't delete from Empty List")
        }
        let curr = this.head
        this.head = curr.next
    }

    deleteFromEnd(){
        if(!this.head){
            throw Error("Can't delete from Empty List")
        }
        let curr = this.head;
        while(curr.next !== this.tail){
            curr= curr.next
        }
        curr.next = null;
        this.tail = curr;
    }

    deleteFromKthPosition(k){
        let count = 1;
        let curr = this.head;
        if(k === 1){
            this.deleteFromFront()
        }
        while(curr && count != k-1){
            curr = curr.next;
            count++;
        }
        if(!curr && count !== k){
            throw Error("Invalid Position")
        }
        else{
            let targetNode = curr.next;
            curr.next = targetNode.next;
            targetNode.next = null;
        
            if(!curr.next){
                this.tail = curr;
            }
        }
    }


    printList(){
        let curr = this.head
        while(curr){
            console.log(curr.data)
            curr = curr.next
        }
    }
}

const list = new LinkedList()

list.addToFront(5)
list.addToFront(6)
list.addToEnd(8)
list.addToEnd(9)
list.addAfterKthPosition(7,3)
list.addAfterKthPosition(45,1)


list.printList()

console.log("=============================")

// list.deleteFromFront()
// list.deleteFromEnd()
list.deleteFromKthPosition(7)

list.printList()
