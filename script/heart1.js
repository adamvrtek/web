window.onload = function() {
    
    var heartclass1 = localStorage.getItem("heart1");
    var heart1 = document.getElementById("heart1");

    heart1.classList.add(heartclass1)

}

var heart1 = document.getElementById("heart1");
heart1.addEventListener("click", (e) => {
    e.preventDefault();

    heart1.classList.toggle("active");
    
    if (heart1.classList.contains("active")) {
        localStorage.setItem("heart1", "active")
    } else {
        localStorage.removeItem("heart1", "active")
    }
    

})

