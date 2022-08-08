// HashMap in JavaScript

let s = "thissisthe"  // Given String

let arr = s.split('')  // Convert string to array

let hashmap = {};

for(let i = 0; i < arr.length; i++){
    if(!hashmap[arr[i]]){
        hashmap[arr[i]] = 1;
    }else{
        hashmap[arr[i]] += 1;
    }
}

console.log(hashmap)

for(let el in hashmap){
    console.log(Math.min(hashmap[el]))
}