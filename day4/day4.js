
"use strict";

// =====================================
// BÀI 1: FIZZBUZZ
// =====================================

console.log("===== BÀI 1: FIZZBUZZ =====");

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.log("ĐÃ HOÀN THÀNH BÀI 1");


// =====================================
// BÀI 2: ĐẾM NGUYÊN ÂM
// =====================================

console.log("\n===== BÀI 2: ĐẾM NGUYÊN ÂM =====");

const text = "Hello JavaScript";
let count = 0;

for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();

    if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
    ) {
        count++;
    }
}

console.log("Chuỗi:", text);
console.log("Số nguyên âm:", count);
console.log("ĐÃ HOÀN THÀNH BÀI 2");


// =====================================
// BÀI 3: TÌM SỐ LỚN NHẤT
// =====================================

console.log("\n===== BÀI 3: TÌM SỐ LỚN NHẤT =====");

const numbers = [12, 45, 7, 89, 23, 56, 89, 10];


let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

for(const numberr of numbers){
    if(numberr > 50){
        console.log("số đầu tiên lớn hơn 50 là: ", numberr)
        break;
    }
}

console.log("Mảng:", numbers);
console.log("Số lớn nhất:", max);


// =====================================
// BÀI 4: KIỂM TRA SỐ NGUYÊN TỐ
// =====================================


console.log("\n===== BÀI 4: KIỂM TRA SỐ NGUYÊN TỐ =====");

const n =9;

let isPrime = true;


if(n < 2){
    isPrime = false;
}else{
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            isPrime = false;
            break;
        }
    }

}

isPrime
  ? console.log(n, "là số nguyên tố")
  : console.log(n, "không phải số nguyên tố");


// =====================================
// BÀI 5: TÍNH TỔNG CÁC CHỮ SỐ
// =====================================

console.log("\n===== BÀI 5: TÍNH TỔNG CÁC CHỮ SỐ =====");

const num = 5832;

let number = num;

let sum =0;

while(number > 0){
    const digit = number % 10;

    sum = sum + digit;

    number = Math.floor(number / 10);
}
console.log("Số ban đầu:", num);
console.log("Tổng các chữ số:", sum);




console.log("============= IN RA BẢNG 7 ===============")
const x =7;
for(let i = 1; i <= 10; i++){
    console.log(`7 x ${i} = ${x * i}`);
}

console.log("Cách 2")

let i = 1;

while (i <= 10) {
  console.log(`7 x ${i} = ${7 * i}`);
  i++;
}









