var cars = [
    "Saab",
    "Volvo",
    "BMW"
];

console.log(cars);
console.log(cars.length);

console.log(cars.sort());

var points = [40, 100, 1, 5, 25, 10];
console.log(points.sort());
console.log(points[4]);

//type of
//The typeof operator returns object because a JavaScript array is an object.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(typeof fruits);

//To solve this problem ECMAScript 5 defines a new method Array.isArray():
console.log(Array.isArray(fruits));

//Also To solve this problem you can create your own isArray() function:


function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}





