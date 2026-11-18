// ========== 0. DỮ LIỆU ==========
const doctors = [
  { id: 1, name: "BS. Nguyễn An", khoa: "Nội",          status: "online"  },
  { id: 2, name: "BS. Trần Bình", khoa: "Nhi",          status: "offline" },
  { id: 3, name: "BS. Lê Chi",    khoa: "Răng Hàm Mặt", status: "online"  },
];

// Bảng chữ hiển thị cho từng trạng thái
const DOCTOR_STATUS_LABEL = {
  online: "Đang trực",
  offline: "Nghỉ",
};

// ========== 1. THẺ CHA ==========
const doctorList = document.querySelector("#doctor-list");

// ========== 2. DỰNG 1 THẺ ==========
function createDoctorCard(doctor) {
  const li = document.createElement("li");
  li.classList.add("doctor-card");
  li.dataset.id = doctor.id;

  const info = document.createElement("span");
  info.textContent = `${doctor.name} – ${doctor.khoa}`;

  const badge = document.createElement("span");
  badge.classList.add("badge", doctor.status);
  badge.textContent = DOCTOR_STATUS_LABEL[doctor.status] ?? doctor.status;

  li.append(info, badge);
  return li;
}

// ========== 3. VẼ CẢ DANH SÁCH ==========
function renderDoctors(list) {
  doctorList.innerHTML = "";

  if (list.length === 0) {
    const empty = document.createElement("li");
    empty.classList.add("empty-message");
    empty.textContent = "Chưa có bác sĩ nào";
    doctorList.append(empty);
    return;
  }

  list.forEach((doctor) => {
    doctorList.append(createDoctorCard(doctor));
  });
}

// ========== 4. VẼ LẦN ĐẦU ==========
renderDoctors(doctors);