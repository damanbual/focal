
const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
// Write code to filter this list down to only passing grades.

const passingGrades = grades.filter(function(grade) {
  return frade >= 70;
});

console.log("Passing grades:", passingGrades);

// Convert to Arrow function
const passingGrades = grades.filter(grade => grade >= 70);
console.log("Passing grades:", passingGrades);

// Completed code 

const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
const passingGrades = grades.filter(grade => grade >= 70);
console.log("Passing grades:", passingGrades);