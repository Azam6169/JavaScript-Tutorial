
//toString() returns a number as a string
//All number methods can be used on any type of numbers (literals, variables, or expressions):
var x = 123;
console.log(x.toString());            // returns 123 from variable x
console.log((123).toString()); // returns 123 from literal 123
console.log((100 + 23).toString());   // returns 123 from expression 100 + 23

//toExponential() returns a string, with a number rounded and written using exponential notation.
var x = 9.656;
console.log(x.toExponential(2)); 

//toFixed() returns a string, with the number written with a specified number of decimals
var x = 9.656;
console.log(x.toFixed(6)); 
    
//toPrecision() returns a string, with a number written with a specified length:
var x = 9.656;
console.log(x.toPrecision(6));


//valueOf() returns a number as a number.
 console.log((123).valueOf(),
    (100 + 23).valueOf());