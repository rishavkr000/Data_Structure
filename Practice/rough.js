// sort array
// Assigning array to Float64Array array type lets you correctly sort its numeric values.
let arr = [10, 23, 5, 456, 11, 1]
let arrayToSort = new Float64Array(arr);
sortedArray = arrayToSort.sort(); 
console.log(sortedArray); // returns [1, 5, 10, 11, 23, 456]