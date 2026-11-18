// ===== HÀNH VI 1: nút "Đổi ca" trên TỪNG thẻ =====
// 1. CHỌN tất cả thẻ đã có sẵn trong HTML
const cards = document.querySelectorAll(".doctor-card");

// 2. Với MỖI thẻ
cards.forEach((card) => {
  // Tìm nút và nhãn BÊN TRONG thẻ này
  const shiftBtn = card.querySelector(".shift-btn");
  const badge = card.querySelector(".badge");

  // 3. NGHE click trên nút
  shiftBtn.addEventListener("click", () => {
    // 4. ĐỔI: hỏi nhãn đang ở trạng thái nào rồi lật sang trạng thái kia
    if (badge.classList.contains("online")) {
      badge.classList.remove("online");
      badge.classList.add("offline");
      badge.textContent = "Nghỉ";
    } else {
      badge.classList.remove("offline");
      badge.classList.add("online");
      badge.textContent = "Đang trực";
    }
  });
});

// ===== HÀNH VI 2: lọc "Chỉ hiện bác sĩ đang trực" =====
const onlyOnline = document.querySelector("#only-online");

// Sự kiện "change" của checkbox: chạy mỗi lần tick hoặc bỏ tick
onlyOnline.addEventListener("change", () => {
  cards.forEach((card) => {
    const badge = card.querySelector(".badge");
    const isOffline = badge.classList.contains("offline");

    // Đang tick lọc VÀ bác sĩ đang nghỉ → ẩn. Ngược lại → hiện.
    if (onlyOnline.checked && isOffline) {
      card.classList.add("hidden");
    } else {
      card.classList.remove("hidden");
    }
  });
});