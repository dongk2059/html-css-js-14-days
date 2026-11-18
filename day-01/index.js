
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
    const todayStr = `${yyyy}-${mm}-${dd}`;
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


// ===== DỮ LIỆU LỊCH KHÁM (Ngày 6) =====
const bookings = [
    { id: 1, name: "Nguyễn Văn An",   phone: "0912345678", date: "2026-11-20", time: "09:30", status: "pending"  },
    { id: 2, name: "Trần Thị Bình",   phone: "0987654321", date: "2026-11-16", time: "08:00", status: "approved" },
    { id: 3, name: "Lê Văn Cường",    phone: "0368866240", date: "2026-11-25", time: "14:00", status: "pending"  },
    { id: 4, name: "Phạm Minh Dũng",  phone: "0901112233", date: "2026-11-16", time: "15:30", status: "rejected" },
    { id: 5, name: "Hoàng Thị Em",    phone: "0934556677", date: "2026-11-18", time: "10:00", status: "approved" },
    { id: 6, name: "Đỗ Hương Giang",  phone: "0977889900", date: "2026-11-20", time: "08:30", status: "pending"  },
    { id: 7, name: "Vũ Thu Hà",       phone: "0865432198", date: "2026-11-15", time: "13:00", status: "rejected" },
    { id: 8, name: "Bùi Quốc Khánh",  phone: "0398765432", date: "2026-11-22", time: "11:30", status: "approved" },
];

// 1. Lọc lịch theo trạng thái → trả về MẢNG MỚI
function getByStatus(bookings, status) {
    return bookings.filter((b) => b.status === status);
}

// 2. Tìm 1 lịch theo id → trả về OBJECT (không thấy → undefined)
function findById(bookings, id) {
    return bookings.find((b) => b.id === id);
}

// 3. Đếm số lịch chờ duyệt → dùng lại getByStatus
function countPending(bookings) {
    return getByStatus(bookings, "pending").length;
}

// 4. Sắp xếp theo ngày, cùng ngày thì theo giờ → trả về BẢN SAO
function sortByDate(bookings) {
    const copy = [...bookings];          // tạo bản sao trước khi sort
    copy.sort((a, b) => {
        if (a.date !== b.date) {
            return a.date < b.date ? -1 : 1;
        }
        if (a.time !== b.time) {
            return a.time < b.time ? -1 : 1;
        }
        return 0;
    });
    return copy;
}
const before = JSON.stringify(bookings);   // chụp lại mảng gốc dưới dạng chuỗi

console.log("pending:", getByStatus(bookings, "pending").map((b) => b.id));
console.log("approved:", getByStatus(bookings, "approved").map((b) => b.id));
console.log("cancelled:", getByStatus(bookings, "cancelled"));
console.log("id 3:", findById(bookings, 3));
console.log("id 99:", findById(bookings, 99));
console.log("id '3':", findById(bookings, "3"));
console.log("countPending:", countPending(bookings));
console.log("sorted:", sortByDate(bookings).map((b) => `${b.id} ${b.date} ${b.time}`));

const after = JSON.stringify(bookings);
console.log("Mảng gốc không đổi:", before === after);





// =====================================================
// NGÀY 7 · MINI PROJECT: QUẢN LÝ LỊCH KHÁM
// =====================================================

console.log(` =====================================================NGÀY 7 · MINI PROJECT: QUẢN LÝ LỊCH KHÁM=====================================================`);

// =====================================================
// NGÀY 8 · RENDER DANH SÁCH LỊCH TỪ MẢNG bookings
// =====================================================

// Chữ hiển thị cho từng trạng thái (tra cứu bằng object)
const STATUS_LABEL = {
  pending: "Chờ duyệt",
  approved: "Đã duyệt",
  rejected: "Từ chối",
};

// "2026-11-20" → "20/11/2026"
function formatDate(dateStr) {
  return dateStr.split("-").reverse().join("/");
}

// Dựng 1 thẻ lịch từ 1 object booking → TRẢ VỀ thẻ li (chưa gắn lên trang)
function createBookingCard(booking) {
  // 1. Tạo thẻ li
  const li = document.createElement("li");
  li.classList.add("booking-card");

  // 2. Gắn id của lịch vào thẻ
  li.dataset.id = booking.id;

  // 3. Phần thông tin: tên + ngày giờ + SĐT (đều dùng textContent → an toàn XSS)
  const info = document.createElement("div");
  info.classList.add("booking-info");

  const name = document.createElement("span");
  name.classList.add("booking-name");
  name.textContent = booking.name;

  const meta = document.createElement("span");
  meta.classList.add("booking-meta");
  meta.textContent = `📅 ${formatDate(booking.date)} · ⏰ ${booking.time} · 📞 ${booking.phone}`;

  info.append(name, meta);

  // 4. Nhãn trạng thái: class chung "badge" + class lấy từ dữ liệu
  const badge = document.createElement("span");
  badge.classList.add("badge", booking.status);
  badge.textContent = STATUS_LABEL[booking.status] ?? booking.status;

  // 5. Ghép phần thông tin + nhãn vào li
  li.append(info, badge);

  // 6. Trả về thẻ
  return li;
}

// Vẽ lại TOÀN BỘ danh sách từ mảng
function renderBookings(list) {
  // 1. Tìm thẻ cha
  const ul = document.querySelector("#booking-list");

  // 2. Xóa danh sách cũ
  ul.innerHTML = "";

  // 3. Mảng rỗng → báo và dừng
  if (list.length === 0) {
    const empty = document.createElement("li");
    empty.classList.add("empty-message");
    empty.textContent = "Chưa có lịch nào";
    ul.append(empty);
    return;
  }

  // 4. Mỗi booking → tạo thẻ → gắn vào ul
  list.forEach((booking) => {
    const card = createBookingCard(booking);
    ul.append(card);
  });
}

// Vẽ lần đầu khi tải trang, xếp theo ngày giờ (hàm sortByDate của Ngày 6)
renderBookings(sortByDate(bookings));
