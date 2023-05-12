window.onload = function() {


    var heartclass5 = localStorage.getItem("heart5");
    var heart5 = document.getElementById("heart5");

    heart5.classList.add(heartclass5)

}

var heart5 = document.getElementById("heart5");
heart5.addEventListener("click", (e) => {
    e.preventDefault();
    
    heart5.classList.toggle("active");
    
    if (heart5.classList.contains("active")) {
        localStorage.setItem("heart5", "active")
    } else {
        localStorage.removeItem("heart5", "active")
    }
})