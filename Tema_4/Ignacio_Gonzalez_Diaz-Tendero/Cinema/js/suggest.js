
const N_FILAS = 5;
const N_COLUMNAS = 18;

function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N_FILAS; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N_COLUMNAS; j++) {
            // Nuevo asiento
            let estadoAsiento = false; // Estado inicial libre

            // Obtener el elemento seat por su id
            const asiento = document.getElementById(idContador);

            // Comprobar si el asiento existe y si no está disponible
            if (asiento && asiento.getAttribute('type') !== 'available') {
                estadoAsiento = true;
            }
            fila.push({
                id: idContador++,
                estado: estadoAsiento
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

function suggest(numAsientos) {
    let butacas = setup();
    const selectedSeats = new Set();
    let stopLoop = false; // Variable de control para detener el bucle exterior

    if (numAsientos > N_COLUMNAS) {
        stopLoop = true; // Establecemos la variable de control para detener el bucle exterior
    }

    // Recorremos las filas desde la más lejana a la pantalla
    for (let i = N_FILAS - 1; i >= 0 && !stopLoop; i--) {
        let availableSeats = 0; // Contador de asientos disponibles consecutivos
        let startIdx = -1; // Índice de inicio de asientos disponibles consecutivos

        // Recorremos los asientos de la fila actual
        for (let j = 0; j < N_COLUMNAS && !stopLoop; j++) {
            // Verificamos si el asiento está libre
            if (!butacas[i][j].estado) {
                // Si no hay asientos disponibles consecutivos reiniciamos el contador
                if (availableSeats === 0) {
                    startIdx = j;
                }
                availableSeats++; // Incrementamos el contador de asientos disponibles consecutivos

                // Si encontramos suficientes asientos consecutivos
                if (availableSeats === numAsientos) {
                    // Agregamos los IDs de los asientos seleccionados al Set
                    for (let k = 0; k < numAsientos; k++) {
                        selectedSeats.add(butacas[i][startIdx + k].id);
                    }
                    stopLoop = true; // Establecemos la variable de control para detener el bucle exterior
                }
            } else {
                // Reiniciamos el contador de asientos disponibles consecutivos
                availableSeats = 0;
            }
        }
    }
    // Devolvemos un Set vacío si no se encuentran suficientes asientos disponibles juntos
    return selectedSeats;
}

function suggestSeats() {
    //Vaciar los seleccionados
    const asientos = document.querySelectorAll('.seat[type="selected"]');
    if (asientos) {
        asientos.forEach(asiento => {
            asiento.setAttribute('type', 'available');
        });
    }

    // Obtener el número de butacas seleccionadas
    const numButacas = parseInt(document.getElementById('seats-selected').value);

    // Llamar a la función suggest con el número de butacas seleccionadas
    const asientosSugeridos = suggest(numButacas);

    console.log('Asientos sugeridos:', asientosSugeridos);
    // Iterar sobre el conjunto de asientos sugeridos y los pintamos
    asientosSugeridos.forEach(id => {
        const asiento = document.getElementById(id);
        if (asiento) {
            asiento.setAttribute('type', 'selected');
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {
    var volverCartelera = document.getElementById("volverCartelera");

    volverCartelera.addEventListener("click", function(event) {
        event.preventDefault();

        window.location.replace('cartelera.html');
    });
});