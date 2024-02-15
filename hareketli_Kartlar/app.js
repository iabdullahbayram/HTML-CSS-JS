const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", () => {

        removeActive();
        panel.classList.add("active");
    });
})

function removeActive(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}

const yazilar = document.querySelectorAll(".h3");

yazilar.forEach(yazilar => {
    yazilar.addEventListener("mouseEnter", () => {

        removeActive();
        panel.classList.add("active");
    });
})