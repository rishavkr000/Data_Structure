// What is the time complexity and why we need it

// Time taken by the code or algorithm or function
// It tells the time taken bt the code, algorithm, funtion

// How to calculate the time complexity

var a = 1;   // Time complexity of this statement is c (constant time)

var b = 2;   // Time complexity of this statement is c (constant time)

var c = a + b;   // Time complexity of this statement is 2c (constant time)   =>   c(addition) + c(assignment)

// Total time taken by the code to execute or complete is (c + c + 2c) = 4c

var arr = []  // Time complexity of empty array is c (constant)

// We need to calculate total even number in an array

arr = [1, 2, 5, 7, 9, 10, 20, 22]  // (8c) => Time complexity of non-empty array is depends on the no. of element present in an array.

var count = 0   // c
for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){       // c
        count++                 //2c ( count = count + 1)
    }       
}          
console.log(count)

// total = c + loop(c + 2c + c + c + 2c) 

// total time complexity => c + loop(c + 2c) => c + loop(3c) => c + no. of time loop runs(in our case arr.length) * 3c => c + 8 * 3c => 25c

// Time complexity of array size of n => c + n*2c => c + 2nc => c(2n + 1)

var x = 3; // one constaint time (c)
var y = 4; // one constaint time (c)
var z = x + y;  // two constaint time(2c)



// =========================================================================================
// find the maximum number in the array

/**
 We want to wrigth a function to sum of all numbers from 1 to n.
 */

// function addUpTo(n) {
//   total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }
// console.log(addUpTo(50));
// ===========================================================================

// function addUPTo(n) {
//   return (n * (n + 1)) / 2;
// }
// console.log(addUPTo(6));
// ==============================================================================
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }
  let t1 = performance.now();
  addUpTo(1000000000);
  let t2 = performance.now();
  // console.clear()
  // console.log(`time Elapesd: ${(t2 - t1) / 1000 }seconds. `);
  
  // =================================================================================
  function addUPTo(n) {
    return (n * (n + 1)) / 2;
  }
  let t3 = performance.now();
  addUPTo(10000000000000);
  let t4 = performance.now();
  // console.log(`time Elaped: ${(t4-t3)/1000} seconds.`)
  
  // console.log(4 / '2');
  // ====================================================================================
  /**
  Big-O Notation Primer-
  The Big-O notation measures the worst-case complexity of an algorithm. In Big-O 
  notation, n represents the number of inputs. The question asked with Big-O is the 
  following: “What will happen as n approaches infinity?”
   */
  
  // common example
  
  function commonLinear(n) {
    for (let i = 0; i < n; i++) {
      console.log(i);
    }
  }
  // console.log(commonLinear(3))
  // O(n) time complexity
  // =============================================================================================
  function exampleQuardratic(n) {
    for (let i = 0; i < n; i++) {
      console.log(i);
      for (let j = i; j < n; j++) {
        console.log(j);
      }
    }
  }
  // console.log(exampleQuardratic(3))
  // timeComplexity=O(n*2)
  // ========================================================================================
  function exampleCubic(n) {
    for (let i = 0; i < n; i++) {
      console.log(i);
      for (let j = i; j < n; j++) {
        console.log(j);
        for (let k = j; k < n; k++) {
          console.log(k);
        }
      }
    }
  }
  // console.log(exampleCubic(3))
  // timeComplexity=O(n*3)
  // =================================================================================
  function exampleLogarithmic(n) {
    for (let i = 0; i < n; i = i * 2) {
      console.log(i);
    }
  }
  // console.table(exampleLogarithmic(100))
  // console.count(exampleLogarithmic(100))
  // timeComplexity=O(n)
  // ======================================================================================
  
  // coefficient rule
  // ==========================================================
  function a(n) {
    count = 0;
    for (let i = 0; i < 5 * n; i++) {
      count += 1;
    }
    return count;
  }
  // console.log(a(2))
  // ==============================================
  function a(n) {
    count = 0;
    for (let i = 0; i < n; i++) {
      count += 1;
    }
    count += 3;
    return count;
  }
  // console.log(a(5))
  // ==============================================================