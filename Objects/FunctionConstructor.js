/* Function constructor to create object
The prototype of function is used to create the object.
*/
var Person = function(firstName, yob, job) {
  this.firstName = firstName;
  this.yob = yob;
  this.job = job;
  console.log(this); // Logs the instance of Person object when that is created.
  this.calculateAge = function() {
    console.log(this); // Logs the instance of Person object when calculateAge() is called.
    return 2017 - this.yob;
  }
}
Person.prototype.lastName = 'Smith'; // Applies to all objects created using 'Person'.

var p1 = new Person('John', 1990, 'SE');
console.log('p1.hasOwnProperty firstName: ' + p1.hasOwnProperty('firstName')); // true
console.log('p1.hasOwnProperty lastName: ' + p1.hasOwnProperty('lastName')); // false.

var p2 = new Person('Jane', 1985, 'SSE');
p1.__proto__.isMarried = false; // Applies to all instances of 'Person' object.
console.log('p1.isMarried: ' + p1.isMarried); // false
p1.isMarried = true;
console.log(p1.isMarried); // true
console.log(p2.isMarried); // false
p2.isMarried = true;
console.log(p2.isMarried); // true;
console.log('p2.hasOwnProperty lastName: ' + p2.hasOwnProperty('lastName')); // false
console.log('p2.hasOwnProperty isMarried: ' + p2.hasOwnProperty('isMarried')); // false.