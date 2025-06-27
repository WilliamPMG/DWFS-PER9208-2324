document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('nameUser').addEventListener('change', validateNameUser);
    document.getElementById('nickName').addEventListener('change', validateNickName);
    document.getElementById('password').addEventListener('change', validatePassword);
    document.getElementById('confirmPassword').addEventListener('change', validateConfirmPassword);
    document.getElementById('email').addEventListener('change', validateEmail);
});

const validateNameUser = () => {
    let nameUser = document.getElementById('nameUser').value.trim();
    let nameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/; // Expresión regular para validar solo letras, incluyendo ñ y tildes
    if (!nameRegex.test(nameUser)) {
        errorMessage('nameUser', 'El nombre y apellidos solo pueden contener letras.');
    } else if (nameUser.length < 5) {
        errorMessage('nameUser', 'Nombre y apellidos deben tener al menos 5 caracteres.');
    } else {
        removeErrorMessage('nameUser');
    }
};

const validateNickName = () => {
    let nickName = document.getElementById('nickName').value.trim();
    let alphanumericRegex = /^[a-zA-Z0-9]+$/; // Expresión regular para validar solo caracteres alfanuméricos
    if (!alphanumericRegex.test(nickName)) {
        errorMessage('nickName', 'El nombre de usuario solo puede contener letras y números.');
    } else if (nickName.length < 5) {
        errorMessage('nickName', 'Nombre de usuario debe tener al menos 5 caracteres.');
    } else {
        removeErrorMessage('nickName');
    }
};

const validatePassword = () => {
    let password = document.getElementById('password').value.trim();
    if (password.length < 8) {
        errorMessage('password', 'La contraseña debe tener al menos 8 caracteres.');
    } else {
        removeErrorMessage('password');
    }
};

const validateConfirmPassword = () => {
    let confirmPassword = document.getElementById('confirmPassword').value.trim();
    let password = document.getElementById('password').value.trim();
    if (confirmPassword !== password) {
        errorMessage('confirmPassword', 'Las contraseñas no coinciden.');
    } else {
        removeErrorMessage('confirmPassword');
    }
};

const validateEmail = () => {
    let email = document.getElementById('email').value.trim();
    if (!isValidEmail(email)) {
        errorMessage('email', 'Ingrese un correo electrónico válido.');
    } else {
        removeErrorMessage('email');
    }
};

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const errorMessage = (id, message) => {
    let errorElement = document.getElementById(id + 'Error');
    if (!errorElement) {
        errorElement = document.createElement('p');
        errorElement.id = id + 'Error';
        errorElement.classList.add('error-message');
        document.getElementById(id).parentNode.appendChild(errorElement);
    }
    errorElement.textContent = message;
};

const removeErrorMessage = (id) => {
    let errorElement = document.getElementById(id + 'Error');
    if (errorElement) {
        errorElement.remove();
    }
};

document.getElementById('formRegistro').addEventListener('submit', (event) => {
    event.preventDefault();
    validateNameUser();
    validateNickName();
    validatePassword();
    validateConfirmPassword();
    validateEmail();

    let errorMessages = document.querySelectorAll('form p');
    if (errorMessages.length === 0) {
        window.location.replace('cinema.html');
    } else {
        alert('Validar datos de registro, previo a reservar asientos en cinema...');
    }
});
