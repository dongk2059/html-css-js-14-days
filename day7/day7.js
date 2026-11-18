console.log("===== Debug 1 =====");
function countPending(list) {
    let count = 0;
    for (const b of list) {
        if (b.status === "pending") {
            count++;
        }
    }
    return count;
}
const list1 = [{ id: 1, status: "pending" }, { id: 2, status: "approved" }, { id: 3, status: "rejected" }];
console.log(countPending(list1)); // mong đợi: 1

console.log("===== Debug 2 =====");
function totalFee(fees) {
    let total = 0;
    for (let i = 0; i < fees.length; i++) {
        total += fees[i];
    }
    return total;
}
console.log(totalFee([100000, 200000, 300000])); // mong đợi: 600000

console.log("===== Debug 3 =====");
function calcTotal(price, vat) {
    return price + (price * vat) / 100;
}
const priceFromInput = 200000; // giá trị đọc từ ô input
console.log(calcTotal(priceFromInput, 8)); // mong đợi: 216000

console.log("===== Debug 4 =====");
function hasPending(list) {
    for (const b of list) {
        if (b.status === "pending") {
            return true;     // thoát khỏi hasPending
        }
    }
    return false;
}
console.log(hasPending(list1)); // mong đợi: true

console.log("===== Debug 5 =====");
function getLatest(list) {
    const sorted = [...list].sort((a, b) => (a.date < b.date ? 1 : -1));
    return sorted[0];
}
const list5 = [
    { id: 1, date: "2026-11-20" },
    { id: 2, date: "2026-11-25" },
    { id: 3, date: "2026-11-18" },
];
console.log(getLatest(list5).id);    // mong đợi: 2
console.log(list5.map((b) => b.id)); // mong đợi: [1, 2, 3] (mảng gốc KHÔNG đổi)