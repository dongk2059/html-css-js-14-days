console.log("========== Bài 1:===========");


// 1. Khai báo dữ liệu
const students = [
  { id: 1, name: "An", className: "A", score: 8.5 },
  { id: 2, name: "Bình", className: "B", score: 6.5 },
  { id: 3, name: "Chi", className: "A", score: 9.0 },
  { id: 4, name: "Dũng", className: "C", score: 4.5 },
  { id: 5, name: "Hà", className: "B", score: 7.0 },
  { id: 6, name: "Minh", className: "A", score: 9.0 },
  { id: 7, name: "Lan", className: "C", score: 5.0 },
  { id: 8, name: "Phúc", className: "B", score: 8.0 }
];

// 2. Định nghĩa hàm
function getExcellentStudents(students) {
  const result = students.filter((student) => {
    return student.score >= 8;
  });

  return result;
}

// 3. Gọi hàm
const excellentStudents = getExcellentStudents(students);

// 4. Hiển thị kết quả
console.table(excellentStudents);

console.log("===========Bài 2============");

function calculateTotalScore(students) {
  const total = students.reduce((acc, student) => {
    return acc + student.score;
  }, 0);

  return total;
}

function calculateAverageScore(students) {
  if (students.length === 0) {
    return 0;
  }

  const total = calculateTotalScore(students);
  const average = total / students.length;

  return Number(average.toFixed(2));
}

console.log(calculateTotalScore(students));
console.log(calculateAverageScore(students));

console.log("==================== Bài 3===================")

function countStudentsByClass(students){
    const kq = students.reduce((acc, student) => {
        const className = student.className;

        if(acc[className]=== undefined){
            acc[className] = 0;
        }

        acc[className] += 1;
        return acc;
    }, {});
    return kq;


}
console.log(countStudentsByClass(students));




console.log("=================Bài 4==================")

function sortStudentsByScore(students){
    const copiedStudents = [...students];

    copiedStudents.sort((a,b)=>{
        return b.score - a.score;
    })
    return copiedStudents;
}
const sortedStudents = sortStudentsByScore(students);

console.table(sortedStudents);



console.log("============Bài 5==============");
function findTopStudents(students) {
  if (students.length === 0) {
    return [];
  }

  const maxScore = students.reduce((max, student) => {
    return student.score > max
        ? student.score
        : max;
  }, -Infinity);

  const topStudents = students.filter((student) => {
    return student.score === maxScore;
  });

  return topStudents;
}

console.table(findTopStudents(students));


console.log("========== Trả nợ mục 1: In mọi thuộc tính ==========");

const student = students[0];

// Cách 1: for...in
console.log("--- Cách 1: for...in ---");
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}

// Cách 2: Object.entries + forEach
console.log("--- Cách 2: Object.entries ---");
Object.entries(student).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});


console.log("========== Trả nợ mục 3: Viết lại 3 vòng for ==========");

// 1. Đếm nguyên âm
const text = "Hello JavaScript";
const vowelCount = text
    .toLowerCase()
    .split("")
    .filter((char) => "aeiou".includes(char))
    .length;
console.log("Số nguyên âm:", vowelCount);          // 5

// 2. Tìm số lớn nhất
const numbers = [12, 45, 7, 89, 23, 56, 89, 10];
const max = numbers.reduce((currentMax, n) => (n > currentMax ? n : currentMax), numbers[0]);
console.log("Số lớn nhất:", max);                   // 89
console.log("Cách ngắn:", Math.max(...numbers));    // 89

// 3. Tổng các chữ số
const num = 5832;
const digitSum = String(num)
    .split("")
    .map(Number)
    .reduce((sum, digit) => sum + digit, 0);
console.log("Tổng các chữ số:", digitSum);          // 18