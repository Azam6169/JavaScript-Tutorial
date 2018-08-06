//while loop
let number = 0;
while(number <= 12){
    console.log(number)
    number+=2;
}

//a do loop always executes its body at least once.

    var text = " "
    var i = 0;
    do {
        text += "\n";
        text += "The number is " + i  ;
       
        i++;
    }
    while (i < 5);
    console.log(text);
     
    


//Indenting Code
if (false != true) {
console.log("That makes sense.");
if (1 < 2) {
console.log("No surprise there.");
}
}

//for loop
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
result = result * 2;
}
console.log(result);
// ? 1024

for (let courrent = 20; ; courrent = courrent + 1){
 if(courrent % 7 == 0){
   console.log(courrent)
   break;
  }
}

//switch case loop
switch("sunny"){
case "rainy":
 console.log("Please bring an umbrella");
 break;
case "cloudy":
break;
console.log("dress lightly");
case "sunny":
console.log("Put on your sunglass");
break;
default:
console.log("Unknown weather type!");
break;

}
  