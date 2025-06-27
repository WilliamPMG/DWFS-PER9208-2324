document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fullName').addEventListener('change', checkName);
    document.getElementById('username').addEventListener('change', checkUsername);
    document.getElementById('password').addEventListener('change', checkPassword);
    document.getElementById('confirmPassword').addEventListener('change', checkConfirmPassword);
    document.getElementById('email').addEventListener('change', checkEmail);
});

const showError = (id, message) => {
    let existingError = document.getElementById(id + 'Error');
    if (!existingError) {
        let errorElement = document.createElement('p');
        errorElement.id = id + 'Error';
        errorElement.textContent = message;
        errorElement.classList.add('error');
        document.getElementById(id).insertAdjacentElement('afterend', errorElement);
    }
};

const hideError = (id) => {
    let existingError = document.getElementById(id + 'Error');
    if (existingError) {
        existingError.remove();
    }
};

const checkName = () => {
    let fullName = document.getElementById('fullName').value;
    if (fullName.trim() === '') {
        showError('fullName', 'Por favor, completa tu nombre y apellidos.');
    } else {
        hideError('fullName');
    }
};

const checkUsername = () => {
    let username = document.getElementById('username').value;
    if (username.trim() === '') {
        showError('username', 'Por favor, elige un nombre de usuario.');
    } else {
        hideError('username');
    }
};

const checkPassword = () => {
    let password = document.getElementById('password').value;
    let passwordRegex = /^[A-Za-z0-9]{8,}$/;
    if (!passwordRegex.test(password)) {
        showError('password', 'La contraseña debe tener al menos 8 caracteres y contener números y letras.');
    } else {
        hideError('password');
    }
};

const checkConfirmPassword = () => {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        showError('confirmPassword', 'Las contraseñas no coinciden.');
    } else {
        hideError('confirmPassword');
    }
};

const checkEmail = () => {
    let email = document.getElementById('email').value;
    if (!email.includes('@') || !email.includes('.')) {
        showError('email', 'Por favor, introduce un email válido.');
    } else {
        hideError('email');
    }
};

document.getElementById('userForm').addEventListener('submit', (event) => {
    event.preventDefault();

    checkName();
    checkUsername();
    checkPassword();
    checkConfirmPassword();
    checkEmail();

    let errorMessages = document.querySelectorAll('form p');
    if (errorMessages.length === 0) {
        alert('¡Tu cuenta ha sido creada exitosamente!');
        window.location.href = "./pages/cinema.html";
    } 
});
