/* Function hoisting... 
Function declaration causes function to be created. A property is created for the function in the Variable object of the execution stack and points to the declartion of the function.
Function expression is treated like variable declaration... 
    For the variable present in current context, a property is created in Variable object but it is set to 'undefined'. 
    So, the function is not assigned to the variable until after the line assigning function to the variable is interpreted. 
    If we attempt to call the function before the function is assigned to variable, we get an error '<variabe_name>' is not a function. Which explains that the variable doesn't know that it's assigned a function till that line is interpreted.
*/

/* Variable hoisting...
A property is created for the variable in the Variable object of execution context and leaves it as undefined.

*/
console.log('Hoisting.... **********************');
calculateAge(1966);

function calculateAge(yob) {
    console.log(2017 - yob);
}

//retirement(1966); // This will fail because variable 'retirement' is not yet set to the function in the execution context.
var retirement = function(yob) {
    console.log(65 - (2017-yob));
}
retirement(1966);

/* Scoping.
  Following example shows that execution context is not same as scope chain.
  A function has access global variables always. It has access to all variables that are defined in the same scope
  as itself. It also has access to variables which were in scope when the function was called.

  If variable names clash, the value of the nearest scope will be used.
*/

console.log('Scoping.... ***********************');
var a = 0;
one();

function one() {
    var b = 1;
    two();

    function two() {
        var c = 2;
        three();

        function three() {
            var d = 3;
            console.log(a+b+c+d); // 6
            four();
            five();
        }
    }
    
    function five() {
        var f = 5;
        console.log(a+b+f); // 6
    }
}

function four() {
    var e = 4;
    console.log(a+e); // 4
}


/* 'this' keyword
  * 'this' keyword points to global context by default.
  * Inside a function, it points to the current execution context of the function.
  * Inside a method (which is a function of an object), it points to current instance of the object.
  * 'this' is set when a function is invoked.
*/
console.log('this keyword.... ******************');

console.log(this); //In a browser, 'this' points to 'window' object which is the global context.

calculateSum(3, 2);
function calculateSum(a, b) {
    console.log (a + b);
    console.log(this); //Still points to 'window' as 'calculateSum' function is invoked in global context.
}

var cs = function(a, b) {
    console.log (a + b);
    console.log(this); //Still points to 'window' as 'cs' variable is declared in global context.
}
cs(10, 20);

var john = {
    name: 'John',
    yob: 1956,
    calculateAge: function() {
        console.log(this); // Points to 'john' object as it is used inside a method of 'john'.
        console.log(2017 - this.yob);

        /*
        function innerFunction() {
            console.log(this); // This is a regular function defined inside a method. It is not called on the 'john' object. So 'this' will be 'window'.
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yob: 1985
}
mike.calculateAge = john.calculateAge; // This is function borrowing.

console.log('Calling from \'Mike\'');
mike.calculateAge(); // 'this' inside john.calculateAge will now point to 'Mike'. Risk of using variables that are not relevant to Mark object is a programming problem.
