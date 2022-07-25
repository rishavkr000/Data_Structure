// Async-Await

// What is async-await?

// An async function is a function declared with the async keyword, and the await keyword is permitted within instanceof. The async and await keywords enable asynchronous, promise-based behaviour to be written in a cleaner StyleSheet, avoiding the need to explicitly configure promise chains.

function promise1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise1 resolved")
        }, 1000)
    })
}

function promise2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise2 resolved")
        }, 1000)
    })
}

// promise1().then(res1=>{
//     console.log("res1 resolved", res1)
//     return promise2()
// }).then(res2=>{
//     console.log("res2 resolved", res2)
//     // console.log("res1 resolved", res1)  // In promise, we can't access res1 here 
// }).catch((error)=>{
//     console.log("error", error)
// })


async function myAsyncAwait(){
    try{
        const res1 = await promise1()
        console.log("res1", res1)
        const res2 = await promise2();
        console.log("res2", res2, res1)  // In async-await, we use res1 anywhere because now this is in same scope.
    }
    catch(error){
        console.log("error", error)
    }
}

myAsyncAwait()

