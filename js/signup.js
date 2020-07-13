'use strict';

class Signup {
    constructor() {
        this.nameInput = document.querySelector("#name");
        this.emailInput = document.querySelector('#email');
        this.passwordInput = document.querySelector('#password');
        this.repeatPasswordInput = document.querySelector('#repeat-password');

        this.buttonInput = document.querySelector('#sign-up-button');
        this.errorsWrapper = document.querySelector('.message-container');

    }

    handleEmailInput = (event) => {
        const email = event.target.value;

        validator.validateValidEmail(email);

        const errors = validator.getErrors();
        if (!errors.invalidEmailError) {
            validator.validateUniqueEmail(email);
        }

        this.setErrorMessages();

    }

    handlePasswordInput = (event) => {
        const password = event.target.value;
        const passwordRepeat = this.repeatPasswordInput.value;

        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);

        this.setErrorMessages();
    }

    handleRepeatPasswordInput = (event) => {
        const passwordRepeat = event.target.value;
        const password = this.passwordInput.value;

        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);

        this.setErrorMessages();
    }

    saveData = (event) => {
        event.preventDefault();
        const name = this.nameInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const repeatPassword = this.repeatPasswordInput.value;


        const newUser = new User(name, email, password);

        db.saveNewUser(newUser);

        this.nameInput.value = "";
        this.emailInput.value = "";
        this.passwordInput.value = "";
        this.repeatPasswordInput.value = "";

        this.showSuccesMessage();
        this.removeMessages();

    }

    addListeners = () => {
        this.emailInput.addEventListener("input", this.handleEmailInput);
        this.passwordInput.addEventListener("input", this.handlePasswordInput);
        this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);

        this.buttonInput.addEventListener("click", this.saveData);
    }

    showSuccesMessage = () => {
        this.errorsWrapper.innerHTML = "";

        const errorsObj = validator.getErrors();
        const errorsStringArr = Object.values(errorsObj);

        if (errorsStringArr.length > 1) {
            return
        }

        const succesMessageP = document.createElement('p');
        succesMessageP.innerHTML = "Bienvenido Otaku!";

        this.errorsWrapper.appendChild(succesMessageP)
    }

    removeMessages = () => {
        setTimeout(() => {
            this.errorsWrapper.innerHTML = "";
        }, 3000)

    }

    setErrorMessages = () => {

        this.errorsWrapper.innerHTML = "";
        const errorsObj = validator.getErrors();

        const errorsStringArr = Object.values(errorsObj);

        errorsStringArr.forEach((errorStr) => {
            const errorMessageP = document.createElement('p');
            errorMessageP.innerHTML = errorStr;

            this.errorsWrapper.appendChild(errorMessageP)
        })
    }

}

const signup = new Signup();

window.addEventListener("load", signup.addListeners);

/*this.errors = {
            invalidEmailError: this.invalidEmailError,
            passwordError: this.passwordError,
            repeatPasswordError: this.repeatPasswordError,
        }*/