console.log(8 * null)
// → 0
//type coercion.“wrong” type of value, JavaScript will quietly convert that value to the type it needs
console.log("5" - 1)
// → 4
//+ tries string concatenation before numeric addition
console.log("5" + 1)
// → 51
console.log("five" * 2)
//when null or undefined occurs on either side of the operator, it produces true only if both sides are one of null or undefined.
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
//first tests whether a value is precisely equal to the other, and the second tests whether it is not precisely equal.
//prevent type conversion:operators: === and !==.
console.log("" === false);
//false
console.log(null || "user")
//The logical operators and handle values of different types in a peculiar&&|| way.
//0, NaN, and the empty string ("") count as false
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
//short-circuit evaluation.
console.log(true || X)
//true->no matter what X is
console.log(false && X,)
//false->no matter what X is

