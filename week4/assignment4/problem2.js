// Problem 2: Is It Even or Odd?
// Kyla Beltran
// Date: October 23 2025

function isEvenOrOdd(number) {
    if (typeof number !== "number") return "Invalid input";
    return number % 2 === 0 ? "Even" : "Odd";
}

// Test cases
console.log("Testing isEvenOrOdd:");
console.log(isEvenOrOdd(1283));             //odd
console.log(isEvenOrOdd(29290));            //even
console.log(isEvenOrOdd(-1002));            //even
console.log(isEvenOrOdd(555));              //odd
console.log(isEvenOrOdd(0));                //even
console.log(isEvenOrOdd("hi"))              //invalid