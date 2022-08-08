// Cut Array Length

let arr = [5, 6, 8 ,4, 6, 3, 2, 5, 8, 9, 4, 2]

console.log(arr.slice(0, 3))  // [5, 6, 8]

// Sum of Array Element

let sum = arr.reduce((acc,curr)=> acc + curr)
console.log(sum)

// Remove Duplicate values from Array

let unique = new Set(arr)
console.warn([...unique])

// Value Swap using Destructuring

var a = 10, b = 20;

[a,b]=[b,a];

console.log(a,b);