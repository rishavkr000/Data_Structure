/*
=> call method is used to invoke a function directly by passing in the reference which points the this variable inside the method.a
=> apply is exactly same as a call method, the only difference is it take the second argument as a array list of the parameter which needs to the passed to the function.
=>  nbind method does not directly invoked the method but gives you the copy of that exactly same method which can be invoked later. 
*/

let name1 = {
    firstname : "Rishav",
    lastname : "Kumar",
}

let printFullName = function(hometown, state){
    console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state);
}
printFullName.call(name1, "Bihar Sharif", "Bihar");

printFullName.apply(name1, ["Bihar Sharif", "Bihar"]);

let name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar"
}

//function borrowing  (using call method we can do a function borrowing)
// We can borrow functions from other object and use it with the data of some other object.

printFullName.call(name2, "Mumbai", "Maharashtra");


printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

// bind method

let printMyName =printFullName.bind(name2, "Mumbai", "Maharashtra");
console.log(printMyName);
printMyName();