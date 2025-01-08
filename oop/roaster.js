// JavaScript code​​​​​​‌‌​​​‌‌​‌‌‌‌‌​​‌‌​‌​‌‌​​‌ below
// Change these boolean values to control whether you see
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

const roster = [
    {
        name: 'Anwar',
        grades: [97, 87, 99]
    },
    {
        name: 'Sophie',
        grades: [75, 22, 85]
    },
    {
        name: 'Ron',
        grades: [64, 77, 90]
    }
];
const teacher = 'Harriet'

/* A student is passing if their GPA is > 70 */
function calculateGPA(grades) {
    return Math.floor((grades.reduce((currSum, currValue) => currSum + currValue)) / grades.length);
}

// Your code goes here


function Student(name, grades) {
    this.name = name;
    this.grades = grades;
}

Student.prototype.getGrades = function() {
    return this.grades;
};

Student.prototype.checkIsPassing = function() {
    return calculateGPA(this.grades) > 70;
};


// Define the CourseRoster class
function CourseRoster(roster, teacher) {
    this.roster = roster; // Array of Student objects
    this.teacher = teacher;
}

CourseRoster.prototype.getRoster = function() {
    let studentNames = [];
    this.roster.forEach(student => studentNames.push(student.name));
    return studentNames.join(', ');
};

CourseRoster.prototype.returnGraduatingStudents = function() {
    return this.roster.filter(student => student.checkIsPassing());
};

// This is how your code will be called.
// Your answer should be an instance of the `CourseRoster` object
// You can edit the `students` code to try different testing cases.
const studentArray = roster.map(student => new Student(student.name, student.grades));
const result = new CourseRoster([...studentArray], teacher);
