// Define Student object using ES6 class
class Student {
  constructor(name, grade, subjects) {
    this.name = name;
    this.grade = grade;
    this.subjects = subjects;
  }

  // Method to display student info
  displayInfo() {
    console.log("Student Name:", this.name);
    console.log("Grade:", this.grade);
    console.log("Subjects:", this.subjects.join(", "));
  }

  // Dynamically check if student passed
  get passed() {
    return this.grade >= 50;
  }
}

// 1. Create a new student
const student = new Student("Alice", 65, ["Math", "Science", "English"]);

// 2. Call displayInfo method
student.displayInfo();

// 3. Display if passed
console.log("Passed:", student.passed);

// 4. Loop through all properties of the student
console.log("\nAll properties of student:");
for (let [key, value] of Object.entries(student)) {
  console.log(`${key}:`, value);
}

