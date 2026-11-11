
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

