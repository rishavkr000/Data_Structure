// Convert number to reversed array of digits
// number = 12345 => return [5,4,3,2,1]

// Method 1 => Using Array.from() method

let number = 12345;
let str = '' + number  // Convert number to string
let a = num => Number(num)  // create a function

let intArr = Array.from(str, a)  // Number to array

console.log(intArr)
console.log(intArr.reverse())  // Reverse the array by using reverse function


// Method 2 => Using map() method

let myArr = str.split("").map((number) => {
    return Number(number)
})

console.log(myArr)
console.log(myArr.reverse())

// Method 3 => Using reduce() function

let arr = [...str].reduce((acc, curr) => acc.concat(+curr), [])

console.log(arr)
console.log(arr.reverse())