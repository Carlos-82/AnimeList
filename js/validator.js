'use strict'

class Validator {
    constructor() {
        this.invalidEmailError = 'Introduce un email valido';
        this.emailExistError = 'Este mail ya esta registrado';
        this.passwordError = 'Introduce una contraseña valida';
        this.repeatPasswordError = 'Los campos no coinciden';

        this.errors = {
            invalidEmailError: this.invalidEmailError,
            passwordError: this.passwordError,
            repeatPasswordError: this.repeatPasswordError,
        }
    }
    validateValidEmail = (email) => {
        if (this.emailIsValid(email)) {
            delete this.errors.invalidEmailError;
        } else {
            this.errors.invalidEmailError = this.invalidEmailError;
        }

    }

    emailIsValid = (email) => {
        const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

        const isValid = emailRegEx.test(email);

        return isValid

    }

    validateUniqueEmail = (newEmail) => {
        const usersDB = db.getAllUsers();

        let emailUnique = true;

        if (usersDB.length > 0) {
            usersDB.forEach((userObj) => {
                if (userObj === newEmail) {
                    emailUnique = false;
                }
            })

            if (emailUnique) {
                delete this.errors.emailExistError;
            } else {
                this.errors.emailExistError = this.emailExistError
            }
        }
    }

    validatePassword = (password) => {
        if (password.length > 5) {
            delete this.errors.passwordError
        } else {
            this.errors.passwordError = this.passwordError
        }

    }

    validatePasswordRepeat = (password, passwordRepeat) => {
        if (password === passwordRepeat) {
            delete this.errors.repeatPasswordError
        } else {
            this.errors.repeatPasswordError = this.repeatPasswordError
        }

    }

    getErrors = () => {
        return this.errors;
    }

    resetValidator = () => {
        this.errors = {
            invalidEmailError: this.invalidEmailError,
            passwordError: this.passwordError,
            repeatPasswordError: this.repeatPasswordError,
        }
    }
}

const validator = new Validator();