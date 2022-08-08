// let obj ={
//     "name" : "Rishav"
// }

// Normal copy 

// let user = obj
// user.name = "Rahul"

// console.log(obj)
// console.log(user)

// Shallow Copy (Method 1)


// let user = Object.assign({}, obj)
// user.name = "Rahul"

// console.log(obj)
// console.log(user)

// Shallow Copy (Method 2) 
// Shallow copy is not working if we have an object inside object.

// let user = {...obj}
// user.name = "Rahul"

// console.log(obj)
// console.log(user)

// Deep copy

// let obj ={
//     name : "Rishav",
//     "address": {
//         city: "Bihar Sharif",
//         state: "Bihar"
//     }
// }

// let user = JSON.parse(JSON.stringify(obj))
// user.address.city = "Bhopal"

// console.log(obj)
// console.log(user)

// Deep copy is not working if we have a function and date inside object. For copy function and date we use lodash npm package in project. and if you write normal javascript code then use lodash cdn.

let obj ={
    name : "Rishav",
    "address": {
        city: "Bihar Sharif",
        state: "Bihar"
    },
    getFun(){
        return "Hello"
    }
}

let user = _.cloneDeep(obj)  // first use lodash library, then this function work.
user.address.city = "Bhopal"

console.log(obj)
console.log(user)