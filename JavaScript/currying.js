// There are two ways to currying our functions, the first one is to use bind function and second one by using the concepy of closures.


// To understand the function currying, lets create the function multiply() which basically multiplies two parameters x and y and then logs it to the console.

let multiply = function(x, y) {
    console.log(x * y)
}

// Lets create another method multiplyByTwo, which is exactly the copy of multiply, but will create the copy by executing the bind method over multiply. 

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

// Similarly we can create a multiplyByThree also

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);


// Method 2 => Using Closure

let multiply1 = function(x){
    return function (y) {
        console.log(x * y)
    }
}

let multiplyOfTwo = multiply1(2);
multiplyOfTwo(10);
