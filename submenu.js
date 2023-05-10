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