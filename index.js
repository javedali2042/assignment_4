// Q # 1:
// Declare a variable named greeting with the string value "Hello, World!" and print it.
var _a;
var greeting = "Hell0, World!";
console.log(greeting);
// Q # 2:
// Define two variables with integer values and calculate their sum, difference, product, and quotient.
var num1 = 30;
var num2 = 15;
var add = num1 + num2;
var subs = num1 - num2;
var multi = num1 * num2;
var divide = num1 / num2;
var power = Math.pow(num1, num2);
var modlus = num1 % num2;
console.log("Addition of two numbers: " + add);
console.log("Substraction of two numbers: " + subs);
console.log("Multiplication of two numbers: " + multi);
console.log("Devision of two numbers: " + multi);
console.log("Modulus of two numbers: " + modlus);
console.log("power of two numbers: " + power);
// Q #3;
// Swap the values of two variables without using a third variable.
var a = 1;
var b = 2;
_a = [b, a], a = _a[0], b = _a[1];
console.log(a, b);
// Q # 5;
// Use the modulus operator to find the remainder of two numbers.
var numOne = 19;
var numTwo = 4;
var modulusOperator = numOne % numTwo;
console.log(modulusOperator);
//  Q # 6;
// Increment a variable's value by 1 using two different methods.
console.log("////////////////////// Increment Challenge ////////////////////////");
var counter1 = 0;
var counter2 = 0;
counter1++;
counter2 += 1;
console.log("First Method: ".concat(counter1, " and 2nd method: ").concat(counter2));
//  Q # 7;
// Given three boolean variables, write expressions for AND, OR, and NOT gates.
console.log("////////////////////////  Logical Gates ////////////////////////");
var expLogic1 = true, expLogic2 = false, expLogic3 = true;
var outputAndOpe = expLogic1 && expLogic2 && expLogic3;
var outputOrOpe = expLogic1 || expLogic2 || expLogic3;
// let outputNot = expLogic1 != expLogic2 != expLogic3;
console.log("Output of And Gate is: ".concat(outputAndOpe));
console.log("Output of OR Gate is: ".concat(outputOrOpe));
//  Q # 8;
// Show examples of using compound assignment operators.
console.log("////////////////////////  Compound Assignment ////////////////////////");
var num = 10;
num += 8;
console.log("Output (+=): ".concat(num));
num -= 3;
console.log("Output (-=): ".concat(num));
num *= 6;
console.log("Output (*=): ".concat(num));
num /= 6;
console.log("Output (/=): ".concat(num));
//  Q # 9;
// Write a program to check if a number is even or odd.
console.log("//////////////////////// Even or Odd ////////////////////////");
var numOddOrEven = 19;
if (numOddOrEven % 2 === 0) {
    console.log("".concat(numOddOrEven, " is Even"));
}
else {
    console.log("".concat(numOddOrEven, " is Odd"));
}
//  Q # 10;
// Check if a person is eligible to vote.
console.log("//////////////////////// Voting Eligibility ////////////////////////");
var age = 22;
if (age >= 18) {
    console.log("Your age is ".concat(age, " so, you are eligible for vote casting."));
}
else {
    console.log("Your age is less than 18 so you dont eligible for vote casting.");
}
//  Q # 11;
//  Assign a grade based on a numerical score.
console.log("//////////////////////// Grading System ////////////////////////");
var score = 37;
if (score >= 90) {
    console.log("Grade A");
}
else if (score >= 80 && score <= 89) {
    console.log("Grade B");
}
else if (score >= 70 && score <= 79) {
    console.log("Grade C");
}
else if (score >= 60 && score <= 69) {
    console.log("Grade D");
}
else if (score >= 50 && score <= 59) {
    console.log("Grade E");
}
else {
    console.log("Grade F");
}
//  Q # 12;
//  Find the maximum of three numbers.
console.log("//////////////////////// Max of Three ////////////////////////");
var x = 30;
var y = 42;
var z = 49;
if (x >= y && x >= z) {
    console.log("Maximum number X is ".concat(x));
}
else if (y >= x && y >= z) {
    console.log("Maximum number Y is ".concat(y));
}
else {
    console.log("Maximum number Z is ".concat(z));
}
//  Q # 13;
//  Check if a given year is a leap year.
console.log("////////////////////////  Leap Year Checker ////////////////////////");
var year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("".concat(year, " is a leap year."));
}
else {
    console.log("".concat(year, " is not a leap year."));
}
//  Q # 14;
//  Write a program that converts temperature from Fahrenheit to Celsius.
console.log("//////////////////////// Fahrenheit to Celsius Converter ////////////////////////");
var fahrenheit = 60;
var celsius;
//formula
celsius = (fahrenheit - 32) * 5 / 9;
console.log("".concat(fahrenheit, ", celsius number is ").concat(celsius, " "));
//  Q # 15;
//  Check if a number is positive, negative, or zero.
console.log("//////////////////////// Positive, Negative, or Zero ////////////////////////");
var isCheckNum = 10;
if (isCheckNum > 0) {
    console.log("".concat(isCheckNum));
}
else if (isCheckNum < 0) {
    console.log("".concat(isCheckNum));
}
else {
    console.log("".concat(isCheckNum));
}
//  Q # 16;
//   Write a program that prints the multiplication table of a given number up to 10.
console.log("//////////////////////// Multiplication Table ////////////////////////");
var number = 10;
for (var i = 1; i <= 10; i++) {
    console.log("".concat(number, " * ").concat(i, " = ").concat(number * i));
}
console.log("//////////////////////// End Assignment 4 ////////////////////////");
