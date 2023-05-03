function toggle() {
    var x = document.getElementById("textToggle")
    if (x.style.display === "block") {
        x.style.display = "-webkit-box";
    } else {
        x.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let hamelmnts = document.querySelectorAll(".toggle-text");
    for (const btn of document.querySelectorAll(".toggle-text")) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            for (const element of hamelmnts) {
                element.classList.toggle("active");
            }  
        });
    }
});