document.addEventListener("DOMContentLoaded", () =>{
    document.getElementById('nombreUser').addEventListener('change', validanombreUser);
    document.getElementById('userCod').addEventListener('change', validauserCod);
    document.getElementById('passUsu').addEventListener('change', validapassUsu);
    document.getElementById('confPass').addEventListener('change', validaconfPass);
    document.getElementById('correo').addEventListener('change',validaCorreo);
});

const validanombreUser = () => {
    
    let nombreForm = document.getElementById('nombreUser').value;
    
    if (nombreForm.length < 5) {
        mensajeError('nombreUser', 'Validar datos datos.');
    } else {
        quitError('nombreUser');
    }

};

const validauserCod = () => {
    
    let usuPass = document.getElementById('userCod').value;
    if (usuPass.length < 5) {
        mensajeError('userCod', 'Usuario no cumple longitud minima [5].');
    } else {
        quitError('userCod');
    }

};

const validapassUsu = () => {
    
    let usuPass = document.getElementById('passUsu').value;
    if (usuPass.length < 5) {
        mensajeError('passUsu', 'Constraseña no cumple longitud minima [5].');
    } else {
        quitError('passUsu');
    }

};

const validaconfPass = () => {
    
    let usuPass1 = document.getElementById('confPass').value;
    let usuPass0 = document.getElementById('passUsu').value;
    if (usuPass0 !== usuPass1) {
        mensajeError('confPass', 'LIngresar la misma contraseña.');
    } else {
        quitError('confPass');
    }

};

const validaCorreo = () => {
    
    let usuMail = document.getElementById('correo').value;
    if (!usuMail.includes('@gmail.com')) {
        mensajeError('correo', 'Correo invalido, usar gmail.');
    } else {
        quitError('correo');
    }

};

const mensajeError = (id, mensaje) => {

    let existError = document.getElementById(id + 'Error');
    if(existError == null){
        let mensajeError = document.createElement('p');
        mensajeError.id = id + 'Error';
        mensajeError.textContent = mensaje;
        document.getElementById(id).insertAdjacentElement('afterend', mensajeError);
    }
}

const quitError = (id) => {

    let existErrorMsj = document.getElementById(id + 'Error');
    if(existErrorMsj){
        existErrorMsj.remove();
    }
}

document.getElementById('formRegistro').addEventListener('submit', (event) => {

    event.preventDefault();

    validanombreUser();
    validauserCod();
    validapassUsu();
    validaconfPass();
    validaCorreo();

    let pError = document.querySelectorAll('form p');
    if (pError.length === 0) {
        window.location.replace('cinema.html');
    } else {
        alert('Validar datos de registro, previo a reservar asientos en cinema...');
    }
});