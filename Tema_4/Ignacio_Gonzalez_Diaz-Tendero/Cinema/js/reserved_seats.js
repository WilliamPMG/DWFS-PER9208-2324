console.log("f5 para obtener una nueva distribución de asientos reservados");
const RESERVED_SEATS = 20; // Modificar este valor para cambiar el número de asientos reservados

function asignarAsientosReservados() {
    // Obtener todos los asientos
    const asientos = document.querySelectorAll('.seat[type="available"]');

    const indicesAleatorios = [];
    while (indicesAleatorios.length < RESERVED_SEATS) {
        const indice = Math.floor(Math.random() * asientos.length);
        if (!indicesAleatorios.includes(indice)) {
            indicesAleatorios.push(indice);
        }
    }

    // Asignar el atributo type a "reserved" para los elementos seleccionados
    indicesAleatorios.forEach(indice => {
        asientos[indice].setAttribute('type', 'reserved');
    });
}

// Llamar a la función cuando se cargue la página
window.addEventListener('load', asignarAsientosReservados);
