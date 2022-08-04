let name = {
    firstName : "Rishav",
    lastname : "Kumar",
}

let printName = function(hometown, state){
    console.log(this.firstName + " " + this.lastname + ", " + hometown + ", " + state)
}

let printMyName = printName.bind(name, "Bihar Sharif");
printMyName("Bihar");

// Our task to create own implementation of bind function


Function.prototype.mybind = function(...args){
    let obj = this  // this variable points to printName method
        params = args.slice(1);  // Extracting the params from args by using the slice method. args.slice(1) will remove the first element from the list and will returns the all the letter elements.
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2]);

    }
}

let printMyName2 = printName.mybind(name, "Nalanda");
printMyName2("Bihar");