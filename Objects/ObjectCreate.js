/* Object.create to create object
Object is created based on the protypeObject.
More flexible and complex inheritance patterns can be implemented using Object.create

These properties and methods go into the __proto__ property of the instance. They're not the instance's OWN.
*/
var personProto = {
  caclulateAge: function() {
    console.log(2017 - this.yob);
    return 2017 - this.yob;
  },
  lastName: ''
};

// Using only the prototype object.
var p3 = Object.create(personProto);
// These properties and methods go into the instance directly. They're the instance's OWN.
p3.firstName = 'John';
p3.yob = 1990;
p3.job = 'SE';

// Using the prototype object and adding properties at the time of creation.
var p4 = Object.create(personProto,
{
  firstName: { value: 'Jane' },
  yob: { value: 1985 },
  job: { value: 'SSE' }
})
personProto.__proto__.lastName = 'Smith'; // Applies to all objects created using 'personProto'.
p4.__proto__.isMarried = true; // Applies to all objects created using 'personProto'.

console.log('p3');
console.log(p3);
console.log('p4');
console.log(p4);
console.log('p3.hasOwnProperty firstName: ' + p3.hasOwnProperty('firstName')); // true
console.log('p3.hasOwnProperty lastName: ' + p3.hasOwnProperty('lastName')); // false.
console.log('p3.isMarried: ' + p3.isMarried); // true.
console.log('p4.hasOwnProperty firstName: ' + p4.hasOwnProperty('firstName')); // true
console.log('p4.hasOwnProperty lastName: ' + p4.hasOwnProperty('lastName')); // false.
console.log('p4.isMarried: ' + p4.isMarried); // true.