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
  
    insert(data){
      let node = new Node(data)
      if(!this.head){
        this.head = node;
        this.tail = node;
      }
      else{
        // let curr = this.head;
        node.next = this.head
        this.head = node
      }
    }

    reverse(){

        let curr = null;
        while(this.head){
            if(!curr){
                this.tail = this.head
            }
            let nextNode = this.head.next;
            this.head.next = curr;
            curr = this.head;
            this.head = nextNode
        }
        this.head = curr
    }
  
    

  
    print(){
      let curr = this.head;
      while(curr !== null){
        console.log(curr.data)
        curr = curr.next
      }
    }
    
  }
  
  let list = new LinkedList()
  
  list.insert(5)
  list.insert(7)
  list.insert(9)
  list.insert(4)
  list.insert(2)
  
  list.print()

console.log("====================")
  
  list.reverse()

console.log("====================")

  list.print()




  