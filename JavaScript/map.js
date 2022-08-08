/*
JavaScript Map
    => Map is similar to object but little bit advance from object.
    => Map key can be any data type (Object can have string key only)
    => Map has more features which don't have in object.
    => Map has better performance than Object. 
*/

let data = new Map([
    ['name' , 'Rahul'],
    [true, "This is a bool key in map"]
])

data.set('city', 'Bihar Sharif')
data.set({}, "This is a object type")
data.set(() => {}, "This is a arrow function type")

// data.delete(true)


// console.log(data.has('hj'))

//Loop on map

// data.forEach((value, keys) => {
//     console.log(keys, value)
// })

// for([key, value] of data){
//     console.log(key)
// }

console.log(typeof data)