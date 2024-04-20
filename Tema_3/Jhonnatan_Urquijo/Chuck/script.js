async function mostrarMensaje() {
    try {
        const url = "https://api.chucknorris.io/jokes/random";
        const fetchResponse = await fetch(url);

        if (!fetchResponse.ok) {
            throw new Error("No se pudo conectar con el servicio");
        }
        
        const json = await fetchResponse.json();
        let mensaje = json.value;
        actualizarMensaje(mensaje);
    } catch (error) {
        actualizarMensaje("ocurrió un error al cargar el mensaje");
    }
}

let actualizarMensaje = (mensaje) => {
    document.getElementById("mensaje").innerText = mensaje;   
}



