let names = document.getElementById("name");
let user = document.getElementById("user");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let Registrarse = document.getElementById("btnRegistrarse");
let regex ='';

names.addEventListener("change", function(){
    valNames();
});

user.addEventListener("change", function(){
    valUser();
});

password.addEventListener("change", function(){
    valPassword();
});
confirmPassword.addEventListener("change", function(){
    valConfirmPassword();
});

Registrarse.addEventListener("click", function(){
    let confirmVal = true; 
    confirmVal = valNames();
    if (!confirmVal) {
        return;
    }
    confirmVal = valUser();
    if (!confirmVal) {
        return;
    }
    confirmVal = valPassword();
    if (!confirmVal) {
        return;
    }
    confirmVal = valPassword();
    if (!confirmVal) {
        return;
    }
    window.location.href = "cinema.html";
});

const valNames = () => {
    let errorMessage = document.getElementById("errorName");
    regexNames = /^[A-Za-z\s]{5,30}$/;
    if (!regexNames.test(names.value)) {
        errorMessage.classList.remove("nonDisplay");
        names.focus();
        return false;
    }
    errorMessage.classList.add("nonDisplay");
    return true;
}

const valUser = () => {
    let errorMessage = document.getElementById("errorUser");
    regex = /^[A-Za-z\s]{5,30}$/;
    if (!regex.test(user.value)) {
        errorMessage.classList.remove("nonDisplay");
        user.focus();
        return false;
    }
    errorMessage.classList.add("nonDisplay");
    return true;
}

const valPassword = () => {
    let errorMessage = document.getElementById("errorPassword");
    regex = /^[A-Za-z0-9]{8,30}$/;
    if (!regex.test(password.value)) {
        errorMessage.classList.remove("nonDisplay");
        password.focus();
        return false;
    } 
    errorMessage.classList.add("nonDisplay");
    return true;
}

const valConfirmPassword = () => {
    let errorMessage = document.getElementById("errorConfirmPassword");
    regex = /^[A-Za-z0-9]{8,30}$/;
    if (password.value != confirmPassword.value) {
        errorMessage.classList.remove("nonDisplay");
        confirmPassword.focus();
        return false;
    } else if (!regex.test(confirmPassword.value)) {
        errorMessage.classList.remove("nonDisplay");
        confirmPassword.focus();
        return false;
    }
    errorMessage.classList.add("nonDisplay");
    return true;
}
