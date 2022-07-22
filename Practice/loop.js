// Q1. Write a JS code to print numbers from 1 to 10
// Function `printNumbers()` prints numbers from 1 to 10 using for loop.

/* function printNumbers(){
    for(let i = 1; i <= 10; i++){
        console.log(i)
    }
}
printNumbers() */

// Q2. Write a JS code to print a 2D array
// Function `printArray()` prints all the elements of a 2D array using nested for loops.

/* var arr = [[1,2],[3,4],[5,6],[7,8],[9,10]]
function printArray(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[0].length; j++){
            console.log(arr[i][j])
        }
    }
}
printArray(arr) */

// Q3. Write a JS code to print Even numbers in given array
// Function `printEven()` prints all the even numbers of a 2D array using for loops and ‘%’ operator.

/* function printEven(n){
    for(let i = 1; i <= n; i++){
        if(i % 2 == 0)
            console.log(i)
    }
}
printEven(45) */

// Q4. Write a JS code to delete all occurrence of element in given array
// Function `deleteElement()` deletes all the occurrence of element from the given array.

/* let arr = [45, 85, 65, 45, 85, 32, 5, 7]
function deleteElement(arr, ele){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == ele){
            arr.splice(i,1)
        }
    }
    return arr
}
deleteElement(arr,45)
console.log(arr) */

// Q5. Write a JS code to demonstrate Async loop
// For loop consisting of setTimeout() function to print loop variable 5 times in asynchronous way.

 /* for(let i = 0; i < 5; i++){
    setTimeout(() => console.log(i), 5000)
    console.log(i)
} */
// Q6. Write a JS code to find the power of a number using for loop
// Function numPower() to returns power of number for provided exponential value using for loop.

/* function numPower(num, pow){
    let power = 1
    for(let i = 0; i < pow; i++){
        power = power * num
    }
    return power
}
const result = numPower(3, 3)
console.log(result) */

// Q7. Write a JS code to print a pattern using for loop
// Function printPattern() is used to print a pattern for a given range using nested for loop.
    // 1
    // 1 2
    // 1 2 3
    // 1 2 3 4
    // 1 2 3 4 5

/* function printPattern(n){
    for(let i = 1; i <= n; i++){
        let str = ""
        for(let j = 1; j <= i; j++){
            str = str + j + " "
        }
        console.log(str)
    }
}
printPattern(5) */


// Q8. Write a JS code to find the no of digits in a number
// Function digitCount() to returns the number of digits in a given number using while loop.

/*function digitCount(n){
    let str = n.toString()
    let count = 0;
    for(let i= 0; i < str.length; i++){
        count++
    }
    return count;
}
console.log(digitCount(1526564653))*/

// Q9. Write a JS code to calculate the sum of digits in a number
// Function digitSum() to returns sum of all digits in a given number using while loop. 

/* function digitSum(number){
    let sum = 0
    while(number){
        sum += number % 10;
        number = Math.floor(number/10)
    }
    return sum
}
console.log(digitSum(12345)) */

// Q10. Write a JS code to find the largest number in an array
// Program to find the largest number in the given 1D array. 

/* function largestInArray(arr){
    return arr.sort((a,b) => b-a)[0]
}
console.log(largestInArray([1,2,5,9,6,7,65])) */

/* function largestInArray(arr){
    let largest = 0
    for(let i = 0; i <= arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest
}
console.log(largestInArray([1,2,500,9,6,7,65])) */

// Q11. Write a JS code to find the number of zeros in 2D Matrix
// Program to find count number for zeros in 2d matrix using nested for loops and increment operation.



// Q12. Write a JS code to find product of two arrays
// Function findProd() to generate a new array which is the product of two arrays of the same size using for loop.



// Q13. Write a JS code to print the Fibonacci series for a given value of N
// The function fibonacci() prints the Fibonacci series for the given range N using While loop.



// Q14. Write a JS code to find N value in the Fibonacci series for a given number
// The function Findfibonacci() prints the index of number in the Fibonacci series if present or “element not present” if the number is not part of the Fibonacci series.



// Q15. Write a JS code to count all letters in a word
// Program to find the count of all letters in a word using double for loops.



// Q16. Write a JS code to find duplicate values in a given array
// Function findDup() to returns all the elements that are repeated more than once in a given array.




// Q17. Write a JS code for binary search algorithm
// Program to find the index of a search element in an array using the binary search algorithm.