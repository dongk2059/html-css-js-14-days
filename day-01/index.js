
"use strict";


function isValidTime(h, m) {
    if (
        !Number.isInteger(h) ||
        !Number.isInteger(m) ||
        h < 0 || h > 23 ||
        m < 0 || m > 59
    ) {
        return false;
    }

    const isMorning = h >= 8 && h < 12;
    const isAfternoon = h >= 13 && h < 17;
    const isValidMinute = m === 0 || m === 30;

    return (isMorning || isAfternoon) && isValidMinute;
}
console.log(isValidTime(12,0));
console.log(isValidTime(7,0));
console.log(isValidTime(11,30));
console.log(isValidTime(12,30));
console.log(isValidTime(16,30));
console.log(isValidTime(17,0))




function generateSlots() {

    const slots = [];


    for (let total = 8 * 60; total < 17 * 60; total += 30) {

        const h = Math.floor(total / 60);
        const m = total % 60;


        if (isValidTime(h, m)) {


            const hour = String(h).padStart(2, "0");
            const minute = String(m).padStart(2, "0");

            const time = `${hour}:${minute}`;


            slots.push(time);
        }
    }


    return slots;
}



const availableSlots = generateSlots();

// console.log("Danh sách giờ khám:", availableSlots);
// console.log("Tổng số khung giờ:", availableSlots.length);



function validateBooking(data){
    let errors = [];
    const name = data.name.trim();
    if(name === ""){
        errors.push("Thiếu tên");

    }

    const phone = data.phone;
    let allDigits = true;
    for (const c of phone){
        if(!"0123456789".includes(c)){
            allDigits = false;
            break;
        }
    }
    if(phone.length !== 10 || !allDigits){
        errors.push("SĐT phải gồm đúng 10 chữ số");
    }

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth()+1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const todayStr = `${yyyy} - ${mm} - ${dd}`;
    const date = data.date ?? "";
    if(date === "" || date < todayStr){
        errors.push("Ngày khám không hợp lệ");
    }

    const parts = (data.time ?? "").split(":");
    const h = Number(parts[0]);
    const m = Number(parts[1]);
    if(!isValidTime(h, m)){
        errors.push("Giờ ngoài giờ khám")
    }
    return errors;

}

// ===== TEST validateBooking (hôm nay = 2026-11-13) =====
const tests = [
    // ✅ 3 bộ HỢP LỆ → mong đợi []
    { name: "Nguyễn Văn An", phone: "0912345678", date: "2026-11-13", time: "08:00", reason: "Đau họng", "chuyen-khoa": "nhi" },          // 1. đặt HÔM NAY, giờ biên sáng
    { name: "Trần Thị Bình", phone: "0987654321", date: "2026-11-20", time: "16:30", reason: "Khám răng", "chuyen-khoa": "rang-ham-mat" }, // 2. giờ biên chiều
    { name: "  Lê Văn Cường  ", phone: "0368866240", date: "2026-12-01", time: "13:00", reason: "Sốt", "chuyen-khoa": "noi" },            // 3. tên có khoảng trắng 2 đầu, đầu giờ chiều

    // ❌ 3 bộ SAI
    { name: "Phạm Dũng", phone: "0912345678", date: "2026-11-20", time: "12:30", reason: "Ho", "chuyen-khoa": "noi" },                    // 4. giờ nghỉ trưa
    { name: "Hoàng Em", phone: "09123abcde", date: "2026-11-12", time: "09:00", reason: "Đau bụng", "chuyen-khoa": "nhi" },               // 5. SĐT có chữ + ngày hôm qua
    { name: "   ", phone: "0912 34567", date: "", time: "17:00", reason: "", "chuyen-khoa": "" },                                         // 6. sai cả 4 lỗi
];

tests.forEach((t, i) => {
    console.log(`Bộ ${i + 1}:`, validateBooking(t));
});