// 1. Factorial Program

// function fact(n){
//     if(n == 1) return 1
//     let res = fact(n-1)
//     let result = n * res
//     return result
// }

// console.log(fact(6))

// 2. Power Program

function powerY(x, power){
    if(power == 1 ) return x
    if(power%2 == 0){
        return powerY(x, power/2) * powerY(x, power/2)
    }else{
        power-- // decrese 1 because it is a odd number
        return x * powerY(x, power/2) * powerY(x, power/2)
    }
   
}

let power2 = powerY(5,2)
console.log(power2)

// 3. Fabonacci series



// 4. Product of every number of an array

// function product(let a[], let n){
//     if(n == 0) return a[n]
//     else
//         return (a[n] * product(a[], n-1))
// }

// console.log(product(a[2,3,4],2))

// 5. Palindrome

// function palindrome(str){
//     if(str.length <= 9){
//         return str
//     }
//     return str + 1
// }

// console.log(palindrome(5))