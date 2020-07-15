'use strict'


const buttonMenu = document.querySelector(".nav-button");

function menu(buttonMenu) {
    buttonMenu.addEventListener("click", function () {
        this.classList.toggle("active");
        if (menu.style.display === "block") {
            menu.style.display = "none";

        } else {
            menu.style.display = "block";
        }

    })

}