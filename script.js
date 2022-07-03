//Targil 0

var userInput1 = prompt("Write a number between 0 and 1000!");
if(userInput1){
    alert("OK");
}
else{
    alert("Not OK");
}

var userInput2 = prompt("Write a number with 5 long lenghts!");
if(userInput2.length === 5){
    alert("OK");
}
else{
    alert("Not OK");
}

var userInput3 = prompt("Write 5 letters word!");
if(userInput3.length === 5){
    alert("OK");
}
else{
    alert("Not OK");
}

var userInput4 = [];
for (var index = 0; index < 7; index++) {
    userInput4[index] = prompt("Enter 7 numbers that represent the amount of money youve spend in the last week!");
}
var userInt = userInput4.map(Number);
var calculator = userInt[0] + userInt[1] + userInt[2] + userInt[3] + userInt[4] + userInt[5] + userInt[6];
alert("The total amount youve spend this last week is : " + calculator);

var userInput5 = prompt("Write a number!");
if(userInput5 %= 5 === 0){
    alert("The number is multiply by 5");
}
else if(userInput5 %= 2 === 0){
    alert("The number is even");
}
else if(userInput5 >= 10 && userInput5 <= 100){
    alert("The number is between 10 and 100 inclued");
}
else if(userInput5 >= 101 && userInput5 <= 1000){
    alert("The number is between 101 and 1000 inclued");
}
else{
    alert("The number is larger than 1000 and dosent multiply by 5 and not even");
}

// null == true   / the answer supposed to be false
// 0 === false    / the answer supposed to be false
// !"Cat" == true / the answer supposed to be false

//Targil 1

function CheckIfTrue(a , b) {
    if(a > b && b < a){
        return true;
    }
    else if(a < b && b > a){
        return false
    }
    else if(a == b && b == a){
        return false
    }
    else{
        return false;
    }
}

console.log(CheckIfTrue(5, 5));

//Targil 2

function MatchesHouse(step) {
    return step === 0 ? 0 : step * 4 + (step + 1);
}

console.log(MatchesHouse(1));
console.log(MatchesHouse(2));
console.log(MatchesHouse(3));

//Targil 3

function Shape(letter , number) {
    var side = 4 * number;
    var radius = 6.28 * number;
    var square = "s";
    var circle = "c";
    var resultShape = letter === square? "square" : "circle";
    var resultCalculate = letter === circle? radius : side;
    console.log("The shape is : " + resultShape + " the size of it is : " + resultCalculate);
}

Shape("s", 4);
Shape("c", 6);
Shape("s", 8);
Shape("c", 12);

//Targil 4

function ASCII(sign) {

for (var index = 0; index < 7; index++) {
    console.log(sign.repeat(index));
}
}
ASCII("$");

//Targil 5

for (var index = 1; index < 101; index++) {
    if(index % 3 == 0){
        console.log("Fizz");
    }
    else if(index % 5 == 0){
        console.log("Buzz");
    }
    else if(index % (3 * 5) == 0){
        console.log("FizzBuzz");
    }
    else{
        console.log(index);
    }
}






