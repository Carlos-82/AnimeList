'use strict'


const buttonMenu = document.querySelector(".nav-button");
const navMenu = document.querySelector(".nav-menu");


buttonMenu.addEventListener("click", function () {
    //this.classList.toggle("active");

    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";

    } else {
        navMenu.style.display = "block";
    }

})