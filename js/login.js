'use strict'

class Login {
    constructor() {
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");

        this.loginButton = document.querySelector("#login-button");
        this.messageContainer = document.querySelector(".message-container")


    }

    submit = (event) => {
        event.preventDefault();

        const usersDB = db.getAllUsers();

        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        console.log(email, password)
        const user = usersDB.find((userObj) => {
            console.log(email, password)
            if (userObj.email === email && userObj.password === password) {
                return true;
            }
        })

        this.showMessage(user);
    }


    showMessage = (user) => {

        this.messageContainer.innerHTML = "";

        const message = document.createElement('p');

        if (user) {
            message.innerHTML = `Bienvenido ${user.email}`;
            message.classList.add("correct-message");
            this.redirect()

        } else {
            message.innerHTML = 'El mail y/o el password son incorrectos';
        }
        this.messageContainer.appendChild(message);

    }

    redirect = () => {
        setTimeout(() => location.assign("/index.html"), 1000);
    }

}

const login = new Login();

login.loginButton.addEventListener("click", login.submit);