// 1. CHỌN TẤT CẢ các khối FAQ (NodeList gồm 3 phần tử)
const items = document.querySelectorAll(".faq-item");

// 2. Với MỖI khối
items.forEach((item) => {
  // a. Tìm nút và mũi tên BÊN TRONG khối này
  const question = item.querySelector(".question");
  const arrow = item.querySelector(".arrow");

  // b. NGHE click trên nút của khối này
  question.addEventListener("click", () => {
    // c. ĐỔI: lật class open trên chính khối này
    const isOpen = item.classList.toggle("open");

    if (isOpen) {
      arrow.textContent = "▼";
    } else {
      arrow.textContent = "▶";
    }
  });
});



const doc = document.querySelectorAll(".doctor")

doc.forEach((doct)=>{
  const detail = doct.querySelector(".detail")

  detail.addEventListener("click", function(){
    const isShow = doct.classList.toggle("show");

    if(isShow){
      detail.textContent = "Thu gọn";
    }else{
      detail.textContent = " Xem chi tiết";
    }
})
})