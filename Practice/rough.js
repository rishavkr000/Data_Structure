// sort array
// Assigning array to Float64Array array type lets you correctly sort its numeric values.
let arrayToSort = new Float64Array([10, 23, 5, 456, 11, 1]);
sortedArray = arrayToSort.sort(); 
console.log(sortedArray); // returns [1, 5, 10, 11, 23, 456]