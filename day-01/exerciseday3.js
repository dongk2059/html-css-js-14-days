console.log("Bài 1:")
const c =30;
const f = c * 9/5 + 32;
console.log("Từ C=30 đổi sang F = ",f);


console.log("Bài 2:")
const num =17;
if(num %2 === 0){
    consle.log("Số Chẵn")
}else{
    console.log("Số Lẻ")
}

console.log("Bài 3:")
const birthYear = 2000;
const currentYear = 2026;

const age = currentYear - birthYear;
console.log("tuổi của họ là",age)



console.log("Bài 4:")

const lastName = "Nguyễn";
const middleName ="Văn";
const firstName ="An";
const fullName =`$(lastName) $(middleName) $(firstName)`;



console.log("Bài 5:")
const price = 200000;
const vat =8;
const taxAmount = price * vat /100;
const total = price + taxAmount;
console.log("Total = ",total);



console.log("Bài 6:")
const fee = 300000;
const discount = 10;

const totalDisscount = 300000 * discount / 100;
const totalPay = fee - totalDisscount;

console.log("Số tiền phải trả là: ", totalPay);




console.log("Bài 7:");
const ktq = 150000;
const xn = 80000;
const sa = 120000;

const payTotal = ktq + xn + sa;
console.log("Tổng tiền là: ",payTotal);


console.log("Bài 8:");
const minute = 135;
const hour = Math.floor(135 / 60);
const aMinute = 135 % 60;
console.log(`Số giờ là $(hour) và số phút còn lại là $(aMinute)`);



console.log("Bài 9:")
const agee = 17;
if(agee === 18 || agee > 18){
    console.log("đủ tuổi");
}else{
    console.log("Chưa đủ tuổi");
}



console.log("Bài 10:")
const hourr = 10;
if(hourr >= 8 && hourr < 16){
    console.log("Giờ hợp lệ");
}else{
    console.log("Không hợp lệ");
}