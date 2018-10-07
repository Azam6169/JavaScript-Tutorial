//The JavaScript method toString() converts an array to a string of (comma separated) array values.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

//The join() method also joins all array elements into a string.

//It behaves just like toString(), but in addition you can specify the separator:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * "));


//The pop() method removes the last element from an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop()
console.log(fruits);

//The push() method adds a new element to an array (at the end):
var fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.push("Kiwi")
console.log(fruits);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon")
console.log(fruits);


//The shift() method returns the element that was shifted out.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift()
console.log(fruits);


fruits.unshift("Lemon");

