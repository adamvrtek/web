window.onload = function() {
    
    var heartclass1 = localStorage.getItem("heart1");
    var heart1 = document.getElementById("heart1");

    var heartclass5 = localStorage.getItem("heart5");
    var heart5 = document.getElementById("heart5");

    var heartclass8 = localStorage.getItem("heart8");
    var heart8 = document.getElementById("heart8");

    var heartclass9 = localStorage.getItem("heart9");
    var heart9 = document.getElementById("heart9");

    heart1.classList.add(heartclass1)
    heart5.classList.add(heartclass5)
    heart8.classList.add(heartclass8)
    heart9.classList.add(heartclass9)

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





