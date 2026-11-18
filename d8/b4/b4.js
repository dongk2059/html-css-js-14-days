const button = document.getElementById("themeBtn");

button.addEventListener("click", function (){
    const isDark = document.body.classList.toggle("dark");

    if(isDark){
        button.textContent = "chế độ sáng";
    }else{
        button.textContent = " chế độ tối";
    }


})


const sizeButton = document.querySelector("#sizeBtn");
const guide = document.querySelector("#b4");

sizeButton.addEventListener("click", function (){
    const size = b4.classList.toggle("large");

    if(size){
        sizeButton.textContent = "🔍 Chữ Nhỏ";
    }
    else{
        sizeButton.textContent = "🔍 Chữ To";
    }

})

