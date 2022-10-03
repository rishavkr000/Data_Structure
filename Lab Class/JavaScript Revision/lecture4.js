// 1. What is a callback function?

// function add(num,callback) {
//     callback(null, num+10)
// }

// add(20,(error, result)=>{
//     console.log(error,result)
// })

// console.log('First')

// setTimeout(()=>{
//     console.log('Second')
// },2000)

// console.log('Third')




// **********************************************************************************************************




// 2. What are the drawbacks of callback and what is callback hell?

/* 

Drawbacks of callback :- The biggest problem with callbacks is that they do not scale well for even moderately complex asynchronous code. The resulting code often becomes hard to read, easy to break and hard to debug.

Callback hell :- Callback hell is a phenomenon that afflicts a JavaScript developer when he tries to execute multiple asynchronous operations are after the other.

*/




// **********************************************************************************************************





// 3. What is the difference between callback and promise? How can you write the same async operation using promise and callback?

// function add(num,callback) {
//     callback(null, num+10)
// }

// add(20,(error, result)=>{
//     console.log(error,result)
// })

// function add(num){
//     return new Promise((resolve,reject)=>{
//         // resolve(num+10)
//     })
// }

// add(20).then((res)=>{
//     console.log("Result is:", res)
// }).catch((error)=>{
//     console.log("Error is:", error)
// })

// console.log(add(20))


// Now using async 
/*
async function add(num) {
    return num+10
}

async function result() {
    let res = await add(20)
    console.log(res)
}
result()

console.log('First')

// console.log(add(20))

console.log('Third')
*/





// **********************************************************************************************************





// 4. Difference between normal function and Arrow Function

/*
 1. First difference is different syntax.

    function es5(){
    console.log("ES5 function")
    }
    es5()

    const es6 = () => {
        console.log("ES6 function")
    }
    es6()

 2. In arrow function, we don't need curly bracket if we have a single statement and we write the statement in the same line.
    
    function es5(a,b){
    console.log("ES5 function",a,b)
    }
    es5(10,20)

    const es6 = (a,b) => console.log("ES6 function"a,b)
    es6(10,20)
 
 3. In arrow function, if we have a single argument then we don't need to write this argument in bracket, means no need to add parenthesis around arguments if you have passing a single argument.

    function es5(a){
    console.log("ES5 function",a)
    }
    es5(10)

    const es6 = a => console.log("ES6 function",a)
    es6(10)

 4. In normal function, if we don't pass any argument then we write the blank parenthesis, while in arrow function, if we don't pass any argument then we simply add underscore.

    function es5(){
    console.log("ES5 function")
    }
    es5()

    const es6 = _ => console.log("ES6 function")
    es6()


 5. In normal function, we call the function before declear but in arrow function we can't call the function before declear.
 
    es5()
    function es5(){
    console.log("ES5 function")
    }

    es6() // This gives a Reference error: cannot access 'es6' before initialization
    const es6 = _ => console.log("ES6 function")
    
*/


