
//The length property returns the length of a string
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(txt.length);

//The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("Please");
console.log(pos);

//Both indexOf(), and lastIndexOf() return -1 if the text is not found.
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("John");
console.log(pos);

//Both methods accept a second parameter as the starting position for the search:
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate",15);
console.log(pos);

//slice() extracts a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters: the starting index (position), and the ending index (position).
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);

//If a parameter is negative, the position is counted from the end of the string
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
console.log(res);

//If you omit the second parameter, the method will slice out the rest of the string:
var res = str.slice(7);
console.log(res);

//or, counting from the end:
var res = str.slice(-12);
console.log(res);

//substring() is similar to slice().
//The difference is that substring() cannot accept negative indexes.
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
console.log(res);

//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.
//If you omit the second parameter, substr() will slice out the rest of the string.
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
console.log(res);

var str = "Apple, Banana, Kiwi";
var res = str.substr(7);
console.log(res);

//If the first parameter is negative, the position counts from the end of the string.
var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);
console.log(res);




