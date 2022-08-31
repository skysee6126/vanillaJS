const print = document.querySelector(".hello h1");

function changeColor() {
    print.classList.toggle("active");
}


print.addEventListener("click", changeColor);