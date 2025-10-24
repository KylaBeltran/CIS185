// Problem 3: Count The Vowels
// Kyla Beltran
// Date: October 23 2025

function countVowels(str) {
    if (typeof str !== "string") return 0;
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

// Test cases
console.log("Testing countVowels:");
console.log(countVowels("Hello"));              //2
console.log(countVowels("Kyla Beltran"));       //3
console.log(countVowels("South Puget Sound"));  //6
console.log(countVowels("Community College"));  //6
console.log(countVowels("AEIOU"));              //5
console.log(countVowels(""))                    //0