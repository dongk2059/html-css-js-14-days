// DỮ LIỆU: nguồn sự thật duy nhất
const thuoc = ["Paracetamol", "Vitamin C", "Amoxicillin"];

// 1. CHỌN thẻ cha (chỉ chọn 1 lần, bên ngoài hàm)
const list = document.querySelector("#list");
const count = document.querySelector("#count");

// HÀM RENDER: nhận mảng → vẽ lại toàn bộ danh sách
function renderThuoc(arr) {
  // 2. XÓA danh sách cũ
  list.innerHTML = "";

  // Trường hợp đặc biệt: mảng rỗng
  if (arr.length === 0) {
    count.textContent = "Chưa có thuốc nào";
    return;                                  // guard clause: dừng hàm sớm
  }

  count.textContent = `Có ${arr.length} loại thuốc`;

  // 3. LẶP qua mảng
  arr.forEach((ten) => {
    const li = document.createElement("li"); // 4. TẠO thẻ
    li.textContent = ten;                    // 5. ĐỔ dữ liệu (textContent)
    list.append(li);                         // 8. GẮN lên trang
  });
}

// Gọi lần đầu khi tải trang
renderThuoc(thuoc);