// ===================== call() method =======================================================

// call() method is a pre-defined method of the javascript. It allows the object to use the method of another object.

let obj = {name : "Rishav"}
function getCall(){
  return "Hello " + this.name
}
console.log(getCall.call(obj))

// ===================== Apply() method =======================================================

// call() method takes arguments separately whereas apply() method takes arguments as an array.

let person = {name : "Rishav"}
function getApply(message){
  return this.name + " is " + message
}
console.log(getApply.apply(person, ["good"]))

// ===================== bind() method  =========================================================

// This method return a new function, where the value of "this" keyword will be bound to the owner object, which is provided as a parameter.

var bikeDetails = {
  displayDetails: function(registrationNumber, brandName){
    return this.name+ ", "+ "bike details: "+ registrationNumber + ", " + brandName
  }
}

var person1 = {name: "Rishav"}
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "BR021-3765", "Bullet")
console.log(detailsOfPerson1())