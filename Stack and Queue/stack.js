// Stack is a linear data structure, this follow LIFO (Last In First Out)
// Application of stack
// 1. Undo-Redo
// 2. In Browser History
// 3. In Bracket Balancing
// 4. Function call (callback stack)
// 5.Html tag mapping
// 6. Infix to postfix 

// arr.push() => Insertion
// arr.pop() => Removal


// Bracket Balancing [, {, (

    function isBalance(str){

        let stack = []
    
        for(let i = 0; i < str.length; i++){
    
            if(str[i] === '(' || str[i] === '{' || str[i] === '['){
                stack.push(str[i]);
            }
    
            if(str[i] === ')'){
                if(stack[stack.length-1] === '(')
                    stack.pop();
                else
                    return false;
            }
    
            if(str[i] === '}'){
                if(stack[stack.length-1] === '{')
                    stack.pop();
                else
                    return false;
            }
    
            if(str[i] === ']'){
                if(stack[stack.length - 1] === '[')
                    stack.pop();
                else    
                    return false;
            }
        }
        return stack.length === 0;
    }
    
    // console.log(isBalance("[(){}{}[](){()[]}]"))
    
    // Time Complexity = O(n)
    // Space Complexity in Worst case = O(n)
    
    
    // Implement stack using linked list
    
    // const LinkedList = require("../Linked List/SinglyList")
    // If i have not import linked list file then we require to first create a linked list.
    
    class Node{
        constructor(data){
            this.data = data;
            this.next = null;
        }
    }
    
    class LinkedList{
        constructor(){
            this.head = null; // head return top value of the stack
            this.size = 0;
        }
    
        pushBack(data){
            const node = new Node(data)
            node.next = this.head;
            this.head = node;
            this.size++;
        }
    
        popBack(){
            if(!this.size){
                throw Error("Stack is empty")
            }
            let curr = this.head;
            this.head = this.head.next;
            this.size--;
            curr.next = null;
            return curr.data;
        }
    
    }
    
    class Stack{
        constructor(){
            this.list = new LinkedList();
        }
    
        push(val){
            // append at end
            this.list.pushBack(val);
        }
    
        pop(){
            // remove from end
            return this.list.popBack();
        }
    
        getTop(){
            // return last element value
            return this.head;
        }
    
        get getSize(){          // Kisi function ke aage 'get' lagane pr vo function getter bn jata hai, to hame bracket lagakar call krne ki jarurat nhi padti hai.
            // return the size of the stack 
            return this.list.size;
        }
    
        isEmpty(){
            return this.list.size === 0;
        }
    }
    
    const st = new Stack();
    
    st.push(10);
    st.push(20);
    st.push(30);
    st.push(40);
    
    // st.pop();
    // st.getTop();
    // st.getSize();
    
    while(!st.isEmpty()){
        console.log(st.getSize,"=====",st.pop());
    }
    
    console.log(st.getSize)