// sort array
// Assigning array to Float64Array array type lets you correctly sort its numeric values.
let arr = [10, 23, 5, 456, 11, 1]
// let arrayToSort = new Float64Array(arr);  // or use Int32Array
// sortedArray = arrayToSort.sort(); 
// console.log(sortedArray); // returns [1, 5, 10, 11, 23, 456]

/*
****** Replacement Sort ******
let temp
for(let i = 0; i < arr.length - 1; i++){
    for(let j = i+1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            temp = arr[i]
            arr[i] = arr [j]
            arr[j] = temp
        }
    }
}
console.log(arr)

*/ 

/*
Bubble Sort
let temp
for(let i = 0; i < arr.length - 1; i++){
    for(j = 0; j < arr.length -1 - i; j++){
        if(arr[j] > arr[j+1]){
            temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
console.log(arr)

*/

let temp 
for(let i = 0; i < arr.length; i++){
    for(let j = 1; j < arr.length; j++){
        temp = arr[j]
        i = j - 1
        while(i >= 0 && temp < arr[i]){
            arr[i+1] = arr[i]
            i--
        }
        arr[i+1] = temp
    }
}
console.log(arr)