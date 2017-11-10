/* IIFE Immediately Invoked Function Expressions 
  Used for encapsulation. Data and function privacy.
  It can also be used to expose only those properties and functions that we want an object to reveal.
*/

// Simple IIFE. Not exposing any property or function.

(function(){
  var a = 25;
  var b = 30;

  console.log( a + b ); // >> 55.
})();  // The entire function is enclosed inside parantheses to make javascript engine treat it like an expression. And then we call the expression.

// IIFE bound to a property.
var iife = (function() {
  var a = 10;
  var b = 20;

  console.log( a + b );
});

iife();  // Called here. >> 30 


// IIFE revealing only specific functions.
var employee = (function(){
  var firstName = 'Karthik';
  var lastName = 'Skanda Kumar';
  var age = 32;

  var _getFullName = function() {
    return firstName + ' ' + lastName;
  };

  return {
    getFullName: function() {
      return _getFullName();
    },

    setAge: function(a) {
      age = a;
    },

    isMajor: function(limit) {
      return age > limit;
    },

    printThisObject: function() {
      console.log(this);
    }
  };
})();

console.log(employee.firstName); // No Access. >> 'undefined'.
console.log(employee.lastName); // No Access. >> 'undefined'.
console.log(employee.getFullName()); // >> Karthik Skanda Kumar
console.log(employee.isMajor(18)); // >> true

employee.setAge(10);
console.log(employee.isMajor(18)); // >> false

employee.printThisObject(); // Prints only the exposed items and not firstName, lastName or age.