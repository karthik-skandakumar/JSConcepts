var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style == 'formal') {
      console.log('Good ' + timeOfDay + ' ladies and gentlemen! I\'m ' + this.name + ', a ' + this.job + '. I\'m ' + this.age + ' years old.');
    } else if (style == 'friendly') {
      console.log('Hi! I\'m ' + this.name + ', a ' + this.job + '. I\'m ' + this.age + ' years old. Have a good ' + timeOfDay);
    }
  }
}

var emily = {
  name: 'Emily',
  age: 22,
  job: 'doctor'
}


john.presentation('friendly', 'Morning');
/* The 'call' method allows us to borrow the method and set the 'this' object. */
john.presentation.call(emily, 'formal', 'Afternoon'); // Method borrowing.


/* The 'apply' is similar to 'call' but the method being borrowed needs to take an array as argument. Following line would work only if the presentation method accepted arguments as an array instead of individual items.*/
// john.presentation.apply(emily, ['formal', 'Afternoon']);


/* Comment added to test git */

/* 
  'Bind' is similar to call but it allows us to store the function with pre-set arguments.
  Use of pre-set arguments is called currying.
  Pre-set arguments should be the first few arguments in arg list of method.*/
console.log('Bind with currying....')
var johnFriendly = john.presentation.bind(john, // Object to be used to set 'this'.
'formal') // We didn't set the timeOfDay;

johnFriendly('Morning'); // The remaining argument timeOfDay is set here during the call.

johnFriendly('Evening'); // We are using the pre-set parameters for 'this' and 'style'. Only 'timeOfDay' is being set on each call.

var emilyFriendly = john.presentation.bind(emily, 'friendly');
emilyFriendly('Morning');
emilyFriendly('Afternoon');



var years = [1990, 1995, 2000, 2005, 2010, 2015, 2016];
function arrayCalc(arr, fn) {
  var res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));    
  }
  console.log(res);
}

function calculateAge(yob) {
  return 2017 - yob;
}

function isMajor(limit, yob) {
  return calculateAge(yob) >= limit;
}

arrayCalc(years, calculateAge);
var isMajorJapan = isMajor.bind(this, 20);
var isMajorArab = isMajor.bind(this, 16);
arrayCalc(years, isMajorJapan);
arrayCalc(years, isMajorArab);