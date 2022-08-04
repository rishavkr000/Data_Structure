// let arr = [[1,2,3],[0,4],[3]]

// console.log(arr.flat())

// console.log([].concat(...arr))

// console.log([].concat.apply([],arr))

// let flatArr = arr.reduce((x,y) => {
//     return x.concat(y)
// }, [])
// console.log(flatArr)


// ============== solution 4 ============== //
// const array = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7, 8],
// ];

// for (let outerIndex = 0; outerIndex < array.length; outerIndex++) {
//     const innerArray = array[outerIndex];

//     for (let innerIndex = 0; innerIndex < innerArray.length; innerIndex++) {
//         const innerArrayElement = innerArray[innerIndex];
//         console.log(innerArrayElement);
//     }
// }

// // ============== solution 5 ============== //

// for (let number = 1; number <= 50; number++) {
//     if (number === 1) {
//         continue;
//     }

//     let isPrimeNumber = true;
//     for (let divisor = 2; divisor < number; divisor++) {
//         if (number % divisor === 0) {
//             isPrimeNumber = false;
//             break;
//         }
//     }

//     if (isPrimeNumber) {
//         console.log(number);
//     }
// }

// let a = () => {
//     setTimeout(() => {
//       console.log("internal serval call.");
//     }, "5000");
//     console.log("One");
//   };
//   let b = () => {
//     setTimeout(() => {
//       console.log("Two");
//     }, "0");
//     console.log("function b called");
//   };
//   console.log("Coding Test");
//   a();
//   b()




