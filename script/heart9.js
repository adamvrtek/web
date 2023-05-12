window.onload = function() {

    var heartclass9 = localStorage.getItem("heart9");
    var heart9 = document.getElementById("heart9");

    heart9.classList.add(heartclass9)

}

var heart9 = document.getElementById("heart9");
heart9.addEventListener("click", (e) => {
    e.preventDefault();
    
    heart9.classList.toggle("active");
    
    if (heart9.classList.contains("active")) {
        localStorage.setItem("heart9", "active")
    } else {
        localStorage.removeItem("heart9", "active")
    }
})
