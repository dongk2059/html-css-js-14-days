const button = document.getElementById("themeBtn");

button.addEventListener("click", function (){
    const isDark = document.body.classList.toggle("dark");

    if(isDark){
        button.textContent = "chế độ sáng";
    }else{
        button.textContent = " chế độ tối";
    }


})

