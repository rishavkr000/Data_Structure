// SetTimeout() in JAVASCRIPT

// Introduction

/* SetTimeout() method will run the piece of code inside it after the user defined timer gets completed.
The timer is also be termed as a delay before the code inside SetTimeout runs. */

// setTimeout in javascript is a native function that sets a callback function to be executed when a specified timer complete.
// timer is in milliseconds, so setTimeout will execute the callback function after a delay of the timer value.

// Syntax

// SetTimeout(function, delay)

/* Takes two main parameters,

1. A function, that gets executed after the delay expires.
2. Delay (in milliseconds) */

// Example 1

/* The functiom speak will get executed after the timer i.e. 3000 milliseconds expires. */

setTimeout(function speak() {
    console.log("I am inside SetTimeout");
}, 3000);

// Example 2

/* If the function inside setTimeout have arguments. We can pass the arguments value after the delay parameter. */

// values of a and b are passed after the delay as 5 and 7.

setTimeout(function add(a, b) {
    console.log(`Addition of ${a} and ${b} is`, a + b);
}, 6000, 5, 7)


// Example 3

// The setTimeout method returns an IdleDeadline. We can use the id to clear the delay

const id = setTimeout(()=>{
    console.log("setTimeout returns an id");
}, 1000)
console.log(id)



// ================================================================================//

// How to cancel a setTimeout

// clearTimeout is a function used to cancel a previously declare timeout. It receives an id as an argument. It uses that id to determine what established timeout to cancel.

const timeoutId = setTimeout(function() {
    console.log("setTimeout cancelled successfully")
}, 5000)
clearTimeout(timeoutId)