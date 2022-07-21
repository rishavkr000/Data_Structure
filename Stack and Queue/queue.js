// Queue is a linear data structure, it follow FIFO (First In First Out);
// Application of Queue
// 1. Ticket Booking
// 2. Sliding Window
// 3. Used in Breadth First Search (BST)
// 4. Tree in order traversal
// 5. Event queue

// Implementation of Queue using Linked List

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    appendElement(data){
        const node = new Node(data);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    removeElement(){
        if(this.size === 0){
            throw Error("Queue is empty")
        }

        let curr = this.head;
        this.head = curr.next;
        curr.next = null;
        this.size--;
        return curr.data;
    }
    
}


class Queue{
    constructor(){
        this.list = new LinkedList();
    }

    enQueue(data){
        // adding element in a queue
        this.list.appendElement(data)
    }

    deQueue(){
        // remove element from a queue
        return this.list.removeElement()
    }

    get getSize(){          // Kisi function ke aage 'get' lagane pr vo function getter bn jata hai, to hame bracket lagakar call krne ki jarurat nhi padti hai.
        // return the size of the queue
        return this.list.size;
    }

    frontElement(){
        return this.list.head.data;
    }

    isEmpty(){
        return this.list.size === 0;
    }

}

const que = new Queue();

que.enQueue(10);
que.enQueue(20);
que.enQueue(30);
que.enQueue(40);
que.enQueue(50);

// console.log(que.deQueue())

// while(!que.isEmpty()){
//     console.log(que.getSize,"=====",que.deQueue());
// }

// console.log(que.getSize)

// Implement stack using queue

class StackUsingQueue{
    constructor(){
        this.q1 = new Queue();
        this.q2 = new Queue();
        this.size = 0;
    }

    push(data){

        if(this.q1.isEmpty()){
            this.q2.enQueue(data)
        }else{
            this.q1.enQueue(data)
        }
        this.size++;
    }

    pop(){
        this.size = Math.max(0,this.size-1)
        if(this.q1.isEmpty()){
            while(this.q2.getSize !== 1){
                this.q1.enQueue(this.q2.deQueue())
                
            }
            return this.q2.deQueue()
        }else{
            while(this.q1.getSize !== 1){
                this.q2.enQueue(this.q1.deQueue())
                
            }
            return this.q1.deQueue()
        }
    }

    isEmpty(){
        return this.size === 0
    }

    get getSize(){
        return this.size
    }

}


const st = new StackUsingQueue();

st.push(10);
st.push(20);
st.push(30);
st.push(40);


// while(!st.isEmpty()){
//     console.log(st.getSize,"=====",st.pop());
// }

// console.log(st.getSize)


// Implement Queue using Stack
// Operation performed => push, pop, top, getSize, isEmpty


module.exports = Queue





/* Queue in Real Life

Let's say you are going to the movie. You join the queue to buy a movie ticket, you always join the queue from last.
The person who is first in the queue is getting the tickets first. /*

//  Queue

/* The same conditions are also applied to the queue in programming.
A queue is a general way os storing data that follows FIFO(First In First Out Rule)
When you add something to the queue, it goes to the rare(back) of the queue.  (Enqueue)
When you remove something from the queue, it goes from the front of the queue.   (Dequeue) */