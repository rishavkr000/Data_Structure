// Q. Return sum of even number in the given object

let obj = {
    outer:2,
    obj:{
        inner:2,
        otherObj: {
            superNumber:8,
            notNumber:true,
            notEven:7
        }
    }
}


function evenSum(obj){
    let sum = 0
    for(let key in obj){
        if(obj[key]!=null && typeof(obj[key])==='object'){
            sum += evenSum(obj[key])      // add the parent object, sum to child object, sum result
        }
        else if(typeof(obj[key]) === 'number'){

            // if given key value is even number add it to sum
            if(obj[key] % 2 === 0){
                sum += obj[key]
            }
        }
    }
    return sum
}

console.log(evenSum(obj))