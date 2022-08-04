let arr = [[1, 2],[3, 4],[5, 6],[7, 8, 9],[10, 11, 12, 13, 14, 15]];

// console.log(arr.flat())

// let flatArray = [].concat.apply([], arr);
// let flatArray1 = [].concat(...arr);
// let flatArray = arr.reduce((acc, curVal) => {
//     return acc.concat(curVal)
// }, []);


// console.log(flatArray)
// // console.log(flatArray1)

// let arr2 = [1, , 3, 4, 5];

// console.log(arr2.flat());

// for (let outerIndex = 0; outerIndex < array.length; outerIndex++) {
//     const innerArray = array[outerIndex];

//     for (let innerIndex = 0; innerIndex < innerArray.length; innerIndex++) {
//         const innerArrayElement = innerArray[innerIndex];
//         console.log(innerArrayElement);
//     }
// }


// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j])
        
//     }
// }

function flattenArray(arr){
    let flat =[]
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i]) == false) flat.push(arr[i])
        else flat = flat.concat(flattenArray(arr[i]))
    }
    return flat
}
console.log(flattenArray(arr))