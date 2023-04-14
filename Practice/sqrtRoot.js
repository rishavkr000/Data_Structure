
// var mySqrt = function(num) {
    //     let arr1 = []
    //     let subtractedNum = num - 1
//     let oddNumber = 1

//     while (subtractedNum > 0) {
    //         oddNumber += 2
    //         subtractedNum -= oddNumber
    //     }
    
    //     if(subtractedNum === 0){
        //         arr1.push(Math.ceil(oddNumber / 2))
        //     }else{
            //         arr1.push(Math.floor(oddNumber / 2))
            //     }
            
            //     // let a =  (subtractedNum === 0) ? Math.ceil(oddNumber / 2) : Math.floor(oddNumber / 2)
            //     // // return arr1.push(a)
            //     // console.log(a)
            // };
            
let arr = [9, 4, 25, 81, 225, 16, 121]
var mySqrt = function(arr) {
    let result = []
    for(let i = 0; i < arr.length; i++){
        result.push(Math.round(arr[i] ** 0.5))
    }
    return result
};
console.log(mySqrt(arr))

// const customMap = (arr, callback) => {
//     const finalArr = []
//     arr.forEach((item, index) => {
//       const res = callback(item)
//       finalArr.push(res)
//       arr[index] = res // This will modify original array
//     })
  
//     return finalArr
//   }
  
  
//   const numbers = [1, 2, 3, 4, 5];
  
//   const newNumbers = customMap(numbers, (number) => {
//     return number + 3;
//   });

// console.log(customMap(arr, console.log))