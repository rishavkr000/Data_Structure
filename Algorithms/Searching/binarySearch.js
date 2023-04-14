// Binary Search
// Divide and Conquere Technique
// Find the Index of given number in the sorted array
// array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// Search element / number = 7

// min = 0, element = 1
// max = array.length - 1 == 14, element = 15
// midIndex = (min + max) / 2 == (0 + 14) / 2 == 7(index), element = 8
// if array[midIndex] < number (7)
// min = midIndex + 1, min = 8, max = 15, array = [9,10,11,12,13,14,15]
// if array[midIndex] > number (7)
// max = midIndex - 1, min = 0, max = 6, array = [1,2,3,4,5,6,7]
// else midIndex is output


function binarySearch(array, number){
    let min = 0; 
    let max = array.length - 1;
    while(min <= max){
        let midIndex = Math.floor((min + max) / 2)
        if(array[midIndex] < number){
            min = midIndex + 1
        }else if(array[midIndex] > number){
            max = midIndex - 1
        }else{
            return midIndex
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7))