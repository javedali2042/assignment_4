
// Q # 1:
// Declare a variable named greeting with the string value "Hello, World!" and print it.

let greeting:string = "Hell0, World!";
console.log(greeting);

// Q # 2:
// Define two variables with integer values and calculate their sum, difference, product, and quotient.

let num1:number = 30;
let num2:number = 15;

let add = num1 + num2;
let subs = num1 - num2;
let multi = num1 * num2; 
let divide = num1 / num2;
let power = num1 ** num2;
let modlus = num1 % num2;


console.log("Addition of two numbers: " + add);
console.log("Substraction of two numbers: " + subs);
console.log("Multiplication of two numbers: " + multi);
console.log("Devision of two numbers: " + multi);
console.log("Modulus of two numbers: " + modlus);
console.log("power of two numbers: " + power);

// Q #3;
// Swap the values of two variables without using a third variable.

let a = 1;
let b = 2;
[a,b] = [b,a]

console.log(a, b);

 
// Q # 5;
// Use the modulus operator to find the remainder of two numbers.

let numOne:number = 19;
let numTwo:number = 4;

let modulusOperator = numOne % numTwo;

console.log(modulusOperator);

//  Q # 6;
// Increment a variable's value by 1 using two different methods.

console.log("////////////////////// Increment Challenge ////////////////////////");
  
let counter1 = 0;
let counter2 = 0;

counter1++;

counter2 += 1;

console.log(`First Method: ${counter1} and 2nd method: ${counter2}`);


//  Q # 7;
// Given three boolean variables, write expressions for AND, OR, and NOT gates.

console.log("////////////////////////  Logical Gates ////////////////////////");

let expLogic1:boolean = true,
expLogic2:boolean = false,
expLogic3:boolean = true; 

let outputAndOpe = expLogic1 && expLogic2 && expLogic3;
let outputOrOpe = expLogic1 || expLogic2 || expLogic3;
// let outputNot = expLogic1 != expLogic2 != expLogic3;

console.log(`Output of And Gate is: ${outputAndOpe}`);
console.log(`Output of OR Gate is: ${outputOrOpe}`);

//  Q # 8;
// Show examples of using compound assignment operators.

console.log("////////////////////////  Compound Assignment ////////////////////////");

let num:number = 10;

num += 8;
console.log(`Output (+=): ${num}`);

num -= 3;
console.log(`Output (-=): ${num}`);

num *= 6;
console.log(`Output (*=): ${num}`);

num /= 6;
console.log(`Output (/=): ${num}`);

//  Q # 9;
// Write a program to check if a number is even or odd.

console.log("//////////////////////// Even or Odd ////////////////////////");

let numOddOrEven:number = 19;

if(numOddOrEven % 2 === 0){
    console.log(`${numOddOrEven} is Even`);
}else{
    console.log(`${numOddOrEven} is Odd`);
}

//  Q # 10;
// Check if a person is eligible to vote.

console.log("//////////////////////// Voting Eligibility ////////////////////////");

let age:number = 22;

if(age >= 18){
    console.log(`Your age is ${age} so, you are eligible for vote casting.`); 
}else{
    console.log(`Your age is less than 18 so you dont eligible for vote casting.`);
}


//  Q # 11;
//  Assign a grade based on a numerical score.

console.log("//////////////////////// Grading System ////////////////////////");

let score:number = 37;

if(score >= 90){
    console.log("Grade A");
}else if(score >= 80 && score <= 89){
    console.log("Grade B");
}else if(score >= 70 && score <= 79){
    console.log("Grade C");
}else if(score >= 60 && score <= 69){
    console.log("Grade D");
}else if(score >= 50 && score <= 59){
    console.log("Grade E");
}else{
    console.log("Grade F");
}

//  Q # 12;
//  Find the maximum of three numbers.

console.log("//////////////////////// Max of Three ////////////////////////");

let x:number = 30;
let y:number = 42;
let z:number = 49;

if(x >= y && x >= z){
    console.log(`Maximum number X is ${x}`);
}else if(y >= x && y >= z){
    console.log(`Maximum number Y is ${y}`);
}else{
    console.log(`Maximum number Z is ${z}`);
}

//  Q # 13;
//  Check if a given year is a leap year.

console.log("////////////////////////  Leap Year Checker ////////////////////////");

let year: number = 2024;

if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log(`${year} is a leap year.`);
}else{
    console.log(`${year} is not a leap year.`);
}

//  Q # 14;
//  Write a program that converts temperature from Fahrenheit to Celsius.

console.log("//////////////////////// Fahrenheit to Celsius Converter ////////////////////////");

let fahrenheit: number = 60;  
let celsius: number; 
//formula
celsius = (fahrenheit - 32) * 5 / 9;

console.log(`${fahrenheit}, celsius number is ${celsius} `);


//  Q # 15;
//  Check if a number is positive, negative, or zero.

console.log("//////////////////////// Positive, Negative, or Zero ////////////////////////"); 

let isCheckNum:number = 10;

if(isCheckNum > 0){
    console.log(`${isCheckNum}`);
}else if(isCheckNum < 0){
    console.log(`${isCheckNum}`);
}else{
    console.log(`${isCheckNum}`); 
}


//  Q # 16;
//   Write a program that prints the multiplication table of a given number up to 10.

console.log("//////////////////////// Multiplication Table ////////////////////////"); 

let number: number = 10; 

for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}


console.log("//////////////////////// End Assignment 4 ////////////////////////");