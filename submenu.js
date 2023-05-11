document.addEventListener("DOMContentLoaded", () => {
    let hamelmnts = document.querySelectorAll(".linkSub");
    for (const btn of document.querySelectorAll(".linkSub")) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            for (const element of hamelmnts) {
                element.classList.toggle("active");
            }  
        });
    }
});

function hover() {
    var x = document.getElementById("navMain")
    console.log(x)
    
    x.classList.remove("nav--home");
    
}


 function unhover() {
    var x = document.getElementById("navMain")
    console.log(x)
    
    x.classList.add("nav--home");
}

function hoverTour() {
    var x = document.getElementById("navMain")
    console.log(x)
    
    x.classList.remove("nav--tour");
    
}


 function unhoverTour() {
    var x = document.getElementById("navMain")
    console.log(x)
    
    x.classList.add("nav--tour");
}

function hoverCook() {
    var y = document.getElementById("navSub")

    y.classList.remove("submenu--cook")
}

function unhoverCook() {
    var y = document.getElementById("navSub")

    y.classList.add("submenu--cook")
}

function hoverVine() {
    var y = document.getElementById("navSub")

    y.classList.remove("submenu--vineyard")
}

function unhoverVine() {
    var y = document.getElementById("navSub")

    y.classList.add("submenu--vineyard")
}

function hoverNature() {
    var y = document.getElementById("navSub")

    y.classList.remove("submenu--nature")
}

function unhoverNature() {
    var y = document.getElementById("navSub")

    y.classList.add("submenu--nature")
}

function hover09() {
    var y = document.getElementById("navSub")

    y.classList.remove("submenu--09")
}

function unhover09() {
    var y = document.getElementById("navSub")

    y.classList.add("submenu--09")
}