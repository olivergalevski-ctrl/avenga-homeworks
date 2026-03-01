import { getData } from "./api.js";

async function handleStudents() {
  const students = await getData();
  console.log(students);

const studentsAverageGradeHigherThan3 = students.filter(student => student.averageGrade > 3);  
console.log(studentsAverageGradeHigherThan3);

const femaleStudentsAverageGradeOf5 = students.filter(student => student.averageGrade === 5 && student.gender === "Female");
console.log(femaleStudentsAverageGradeOf5);

const adultMaleStudentsWhoLiveInSkopje = students
.filter(student => student.age >= 18 && student.city === "Skopje")
.map(student => `${student.firstName} ${student.lastName}`);
console.log(adultMaleStudentsWhoLiveInSkopje);

 const averageGradesOfAllFemaleStudentsOver24 = students
 .filter(s => s.gender === "Female" && s.age > 24)
 .map(s => s.averageGrade);
 console.log(averageGradesOfAllFemaleStudentsOver24);

 const maleStudentsWithNameStartingWithBandAverageGradeHigherThan2 = students
    .filter(s => s.averageGrade > 2 && s.firstName.startsWith("B") && s.gender === "Male")
    .map(s => `${s.firstName} ${s.lastName}`);
 console.log(maleStudentsWithNameStartingWithBandAverageGradeHigherThan2);

 const femaleEmailsWithAgeBetween20And30OrderAscending = students
 .filter(s => s.gender === "Female" && s.age >= 20 && s.age <= 30)
 .map(s => s.email)
 .sort();
 console.log(femaleEmailsWithAgeBetween20And30OrderAscending);

 const studentsFullNameAbove40orderDescending = students
 .filter(s => s.age > 40)
 .map(s => `${s.firstName} ${s.lastName}`)
 .sort((a, b) => b.localeCompare(a));
 console.log(studentsFullNameAbove40orderDescending);

 const countOfStudentsUsingGoogleEmail = students
 .filter(s => s.email.includes("@google"))
 .length;
 console.log(countOfStudentsUsingGoogleEmail);

 const result = students.reduce(
  (acc, curr) => {
    if (curr.gender === "Female" && curr.city === "Skopje") {
      acc.totalAge += curr.age;
      acc.count++;
    }
    return acc;
  },
  { totalAge: 0, count: 0 }
);

const averageAgeOfFemaleStudentsLivingInSkopje = result.count === 0 ? 0 : result.totalAge / result.count;

console.log(averageAgeOfFemaleStudentsLivingInSkopje);
}

handleStudents();

