
var person = {
    firstName:"John" ,
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
   
};

console.log(person);
console.log(person["lastName"]);
//In a function definition, this refers to the "owner" of the function.In the example above, this is the person object that "owns" the fullName function.
//In other words, this.firstName means the firstName property of this object.
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());

var person = {name:"Shaina", age:38};
console.log(person.name + " is " + person.age + " years old.");


var person = {
    firstName : "Azam",
    lastName  : "Shirani",
    age       : 20,
    eyeColor  : "Brown"
};

// Display some data from the object:

x = person.firstName + " is " + person.age + " years old" + " with " + person.eyeColor + " EyeColor " ;
console.log(x);