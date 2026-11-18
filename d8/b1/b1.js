// ===================== BÀI 1 =====================
// 1. CHỌN
const greeting = document.querySelector("#greeting");
const btn = document.querySelector("#btn");

// Trạng thái: lúc đầu chưa đổi
let daDoi = false;

// 2. NGHE → 3. ĐỔI
btn.addEventListener("click", () => {
  daDoi = !daDoi;
  if (daDoi) {
    greeting.textContent = "Chào mừng bạn đến phòng khám!";
  } else {
    greeting.textContent = "Xin chào!";
  }
});

// ===================== BÀI 1b =====================
// 1. CHỌN
const statusText = document.querySelector("#status");
const approveBtn = document.querySelector("#btn-approve");
const rejectBtn  = document.querySelector("#btn-reject");

// 2. NGHE nút Duyệt → 3. ĐỔI
approveBtn.addEventListener("click", () => {
  statusText.textContent = "Lịch đã được duyệt ✅";
});

// 2. NGHE nút Từ chối → 3. ĐỔI
rejectBtn.addEventListener("click", () => {
  statusText.textContent = "Lịch bị từ chối ❌";
});