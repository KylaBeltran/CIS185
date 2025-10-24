// Problem 5: Grade Calculator
// Kyla Beltran
// Date: October 23 2025

function calculateGrade(score) {
    if (score > 100 || score < 0) return "Invalid score";
    if (score >= 92) return "A";
    if (score >= 90) return "A-";
    if (score >= 87) return "B+";
    if (score >= 83) return "B";
    if (score >= 80) return "B-";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

// Test cases
console.log("Testing calculateGrade:");
console.log(calculateGrade(93));  //A
console.log(calculateGrade(85));  //B
console.log(calculateGrade(80));  //B-
console.log(calculateGrade(68));  //D
console.log(calculateGrade(50));  //F
console.log(calculateGrade(91));  //A+
console.log(calculateGrade(105))  //invalid