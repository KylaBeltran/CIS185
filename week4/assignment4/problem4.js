// Problem 4: Is It A Prime Number?
// Kyla Beltran
// Date: October 23 2025

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

// Test cases
console.log("Testing isPrime:");
console.log(isPrime(1));   //f
console.log(isPrime(11));  //t
console.log(isPrime(3));   //t
console.log(isPrime(5))    //t