window.onscroll = function() {myFunction()};

var stickbox = document.getElementById("stick");
console.log(stickbox)
var sticky = stickbox.offsetTop;

function myFunction() {
   console.log(stickbox)
   console.log(sticky)
  if (window.pageYOffset > sticky) {
    stickbox.classList.add("sticky");
  } else {
    stickbox.classList.remove("sticky");
  }
}
