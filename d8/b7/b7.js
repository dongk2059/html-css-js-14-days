
const thuoc = ["Paracetamol", "Vitamin C", "Amoxicillin"];


const count = document.querySelector("#count");
const list = document.querySelector("#list");

function renderThuoc(arr){

  list.innerHTML = "";

  if(arr.length === 0){
    count.textContent = "Chưa có thuốc nào";
    return;

  }
  count.textContent = `có ${arr.length} loại thuốc`


  arr.forEach((ten)=> {
    const li = document.createElement("li");
    li.textContent = ten;
    list.append(li);
  })
}
renderThuoc(thuoc);