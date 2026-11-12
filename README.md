Khóa học HTML, CSS & JavaScript trong 14 ngày
Repository lưu bài tập thực hành trong quá trình học xây dựng website.
Ngày 1 — HTML cơ bản và Form
Bài thực hành: Tạo form đặt lịch khám tại [`day-01/index.html`](day-01/index.html).
Kiến thức đã học
- Cấu trúc tài liệu: <!DOCTYPE html>, <html lang="vi">, <head>, <body>.
- Semantic HTML: <header>, <main>, <h1>.
- Form: <form method="get">, <label>, <input>, <textarea>, <select>, <option>, <button type="submit">.
- Thuộc tính id xác định phần tử và liên kết với label for.
- Thuộc tính name xác định tên trường khi dữ liệu được submit.
- Thuộc tính required ngăn submit nếu trường bắt buộc chưa có giá trị hợp lệ.
- Giá trị gửi từ <select> là value của <option> được chọn; nếu không có value thì dùng nội dung văn bản.
Kiểm chứng
1. Mở day-01/index.html bằng trình duyệt.
2. Điền họ tên, số điện thoại, ngày, giờ, lý do và chọn chuyên khoa.
3. Nhấn Đặt lịch, sau đó quan sát URL có dạng ...?name=...&phone=...&date=...&time=...&reason=...&chuyen-khoa=nhi nếu chọn nhi.
Đây là form thực hành dùng phương thức GET. Không nhập thông tin bệnh nhân thật: dữ liệu GET xuất hiện trong URL và có thể lưu trong lịch sử trình duyệt. Ứng dụng thực tế nên gửi dữ liệu qua HTTPS bằng POST và kiểm tra ở backend.
