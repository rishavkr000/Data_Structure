function simple(){
    console.log("This is normal function")
}

function* simpleGenerator(){
    console.log("Function called")
    let x = 100;
    yield "First stop";
    yield x;
    let y = "Hello";
    yield y;
    console.log("Function ends")
}

let sG = simpleGenerator();   // Create instance of simpleGenerator function

console.log(sG.next().value)
console.log(sG.next().value)
console.log(sG.next())  
console.log(sG.next())
