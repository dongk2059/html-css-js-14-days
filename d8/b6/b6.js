// 1. CHỌN
const item = document.querySelector("#faq");
const question = item.querySelector(".question");   // tìm BÊN TRONG item
const arrow = item.querySelector(".arrow");

// 2. NGHE
question.addEventListener("click", () => {
  // 3. ĐỔI: lật class open trên khối cha, lấy kết quả
  const isOpen = item.classList.toggle("open");

  if (isOpen) {
    arrow.textContent = "▼";
  } else {
    arrow.textContent = "▶";
  }
});