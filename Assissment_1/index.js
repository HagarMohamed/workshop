

//A.1 Convert the string "123" to a number and add 7


// const str = "123";
// const num = Number(str);
// const result = num + 7;
// console.log(result); 







//A.2 Check if the given variable is falsy and return "Invalid" if it is

// const variable = 1; 

// if (!variable) {
//     console.log("Invalid");
// }







//A.3  Use for loop to print all numbers between 1 and 10, skipping even numbers using continue

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }






//A.4 Create an array of numbers and return only the even numbers using filter method. 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);






//A.5 Use the spread operator to merge two arrays, then return the merged array. 

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergedArray = [...array1, ...array2];
// console.log(mergedArray);       







//A.6 Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday)

// const dayNumber = 2;

// switch (dayNumber) {
//     case 1:
//         console.log("Sunday");  
//         break;   
//     case 2:
//         console.log("Monday");          
//         break;
//     case 3:
//         console.log("Tuesday");          
//         break;
//     case 4:
//         console.log("Wednesday");          
//         break;
//     case 5:
//         console.log("Thursday");          
//         break;
//     case 6:
//         console.log("Friday");          
//         break;
//     case 7:
//         console.log("Saturday");          
//         break;
//     default:
//         console.log("Invalid day number");
// }   







//A.7 Create an array of strings and return their lengths using map method 

// const arr = ["a", "ab", "abc"];
// const lengths = arr.map(str => str.length);
// console.log(lengths);







//A.8 Write a function that checks if a number is divisible by 3 and 5

// function divisible(num){

//     if(num % 3 === 0 && num % 5 === 0){
//         console.log("Divisible by both");
//     }

// }


// divisible(15);






//A.9 Write a function using arrow syntax to return the square of a number


// const square = num => num * num;
// console.log(square(5));







//A.10 Write a function that destructures an object to extract values and returns a formatted string


// const person = {
//     name: "John",
//     age: 25
// };

// const { name, age } = person;
// const formattedString = `${name} is ${age} years old.`;
// console.log(formattedString);








//A.11 Write a function that accepts multiple parameters (two or more) and returns their sum. 

// function sum(...numbers) {
//     let total = 0;
//     for (const num of numbers) {
//         total += num;
//     }
//     return total;
// }

// console.log(sum(1, 2, 3, 4, 5));






//A.12 Write a function that returns a promise which resolves after 3 seconds with a 'Success' message


// function delay() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Success");
//         }, 3000);
//     });
// }

// delay().then((message) => {
//     console.log(message);
// })









//A.13 Write a function to find the largest number in an array.


// function largestNumber(){

//     const numbers =  [1, 3, 7, 2, 4];
//     const largest = Math.max(...numbers);
//     console.log(largest);
// }

// largestNumber();









//A.14 Write a function that takes an object and returns an array containing only its keys


// function keys(obj){
//     const keys = Object.keys(obj);
//     return keys;
// }

// console.log(keys({ name: "John", age: 30}));













//A.15 Write a function that splits a string into an array of words based on spaces


function spilitString(str){
    const words = str.split(" ");
    return words;
}

console.log(spilitString("The quick brown fox"));










//B. Part 2: Essay Questions 


//1. What is the difference between forEach and for...of? When would you use each? 


//answer

//forEach is an array method that runs 
// a function on every item without letting you stop
//  early or wait for async tasks,

//  for...of is a flexible loop that works on any iterable
//  and lets you break, continue, or await each step.

//  Use forEach when you want clean code to run a simple
//  action on every element in a list,

//  and use for...of whenever you need control to exit early,
//  handle async operations, or loop over non-array data like strings.








//2. What is hoisting and what is the Temporal Dead Zone (TDZ)?
//  Explain with examples. 


//answer

// Hoisting refers to the process where variables and function declarations
//  are moved to the top of their containing scope before code execution.


// 1. Calling a function before it is written works!

sayHello(); 

function sayHello() {
  console.log("Hello!");
}


// 2. Accessing a 'var' before its line gives 'undefined'

console.log(score); 
var score = 100;
console.log(score); 





// The TDZ is a temporary zone in which variables are not accessible
//  before they are declared or initialized.


{
  
  console.log(age); 
  // ❌ ReferenceError: Cannot access 'age' before initialization
  
  // --- END OF TDZ FOR 'age' ---
  let age = 25; 
  
  console.log(age); // ✅ Output: 25
}














//3. What are the main differences between == and ===? 


//answer

// == checks for equality in value only
// === checks for equality in value and type











//4. Explain how try-catch works and why it is important in async operations.

//answer

//try-catch runs potentially risky code inside a try block
//  and immediately diverts any runtime errors to a catch block
//  so your program can handle them without crashing.

//  In async/await operations, it is essential
//  because external tasks like API calls or database queries
//  can unpredictably fail, and try-catch prevents those rejected 
// promises from crashing your app while letting you
//  show user-friendly error messages or fallbacks.   












//5. What’s the difference between type conversion and coercion? Provide examples of each.

//answer

// Type Conversion = You do it on purpose using functions
//  like Number() or String().


let input = "42";
let age = Number(input); // You manually convert string "42" to number 42
console.log(age + 8);    // Output: 50

let isLogged = Boolean(1); // Manually converts 1 to true
console.log(isLogged);     // Output: true






// Type Coercion = JavaScript does it automatically when mixing types like "5" + 2.



console.log("5" + 2);  // Output: "52" (Number 2 is automatically coerced into string "2")
console.log("5" - 2);  // Output: 3    (String "5" is automatically coerced into number 5)
console.log(5 == "5"); // Output: true (Loose equality coerces "5" to number 5 before comparing)




