// Q. Find the minimum number in the given array.

let arr = [8, 9, 1, -2, 0]

// Approach 1 :- First sort the array in ascending order and return the first element.

// let sortedArr = arr.sort((a,b) => a-b)
// console.log(sortedArr[0])

// Use replacement sort  

function minInArray(){
    if(!arr.length){
        throw Error("Enter element in array to find minimum value")
    }else if(arr.length == 1){
        return arr[0]
    }else{
        for(let i = 0; i < arr.length; i++){
            for(let j = i+1; j < arr.length; j++){
                if(arr[i] > arr[j]){
                    let temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                }
            }
        }
        return arr[0]
    }
}


console.log(minInArray(arr))

/*
Approach 2 :- 
                Step 1 :- Assume first element is minimum (min = arr[0])
                Step 2 :- Check the next element is greater or less.
                Step 3 :- If next number is less than min then we will pretend next number is minimum.
                Step 4 :- Repeat step 2 and 3 till end of array
*/


function minInArray(){
    if(!arr.length){
        throw Error("Enter element in array to find minimum value")
    }else if(arr.length == 1){
        return arr[0]
    }else{
        let min = arr[0]
        let i = 1;
        while(i < arr.length){
            if(arr[i] < min){
                min = arr[i]
            }
            i++;
        }
        return min;
    }
}

console.log(minInArray(arr))