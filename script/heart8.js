window.onload = function() {

    var heartclass8 = localStorage.getItem("heart8");
    var heart8 = document.getElementById("heart8");

    heart8.classList.add(heartclass8)

}

var heart8 = document.getElementById("heart8");
heart8.addEventListener("click", (e) => {
    e.preventDefault();
    
    heart8.classList.toggle("active");
    
    if (heart8.classList.contains("active")) {
        localStorage.setItem("heart8", "active")
    } else {
        localStorage.removeItem("heart8", "active")
    }
})