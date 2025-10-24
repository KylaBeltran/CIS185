// Problem 1: Find The Largest Number
// Kyla Beltran
// Date: October 23 2025

function findLargest(numbers) {
    if (numbers.length === 0) return null;
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

// Test cases
console.log("Testing findLargest:");
console.log(findLargest([2311, 5, 1115, 229, 5]));          //2311
console.log(findLargest([-2, -3, -200, -555]));             //-2
console.log(findLargest([100, 2039, 123, -12444]));         //2039
console.log(findLargest([1222, -2339, -12343, -467]))       //1222