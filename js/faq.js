'use strict'

const questionExp = document.querySelectorAll(".question");

questionExp.forEach((questions, idx) => {
    questions.addEventListener("click", function () {
        this.classList.toggle("active");
        let answerExp = this.nextElementSibling;
        if (answerExp.style.display === "block") {
            answerExp.style.display = "none";

        } else {
            answerExp.style.display = "block";
        }
    })
})