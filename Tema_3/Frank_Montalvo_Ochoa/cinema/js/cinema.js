const SEATS = document.getElementsByClassName('seats__seat');
const COLUMNAS = 15;
const FILAS = SEATS.length / COLUMNAS;

function suggest(butacas, numeroAsientos) {
    if (numeroAsientos > COLUMNAS) {
        return [];
    }

    let asientos = [];
    let sugerencias = [];
    for (let i = FILAS - 1; i >= 0; i--) {
        for (let j = 0; j < COLUMNAS && sugerencias.length < numeroAsientos; j++) {
            const butaca = butacas[i][j];
            if (butaca.estado === false) {
                asientos.push(i);
                sugerencias.push(butaca.id);

                if (!sameRow(asientos)) {
                    j = -1;
                    asientos = [];
                    sugerencias = [];
                }
            }
            else {
                asientos = [];
                sugerencias = [];
            }

        }
    }

    return (sugerencias.length < numeroAsientos) ? [] : sugerencias;

}

function sameRow(asientos) {
    if (asientos.length === 0) {
        return true;
    }

    const primerElemento = asientos[0];
    for (let i = 1; i < asientos.length; i++) {
        if (asientos[i] !== primerElemento) {
            return false;
        }
    }

    return true;
}

function reserve(butacas, reservas) {
    for (let row = 0; row < FILAS; row++) {
        for (let column = 0; column < COLUMNAS; column++) {
            for (let k = 0; k < reservas.length; k++) {
                if (butacas[row][column].id === reservas[k]) {
                    butacas[row][column].estado = true;
                }
            }
        }
    }

}

function print(butacas) {
    for (let i = 0; i < FILAS; i++) {
        let fila = '';
        for (let j = 0; j < COLUMNAS; j++) {
            const butaca = butacas[i][j];
            fila += butaca.estado ? ` [${butaca.id < 10 ? `0${butaca.id}` : butaca.id}:X] ` : ` [${butaca.id < 10 ? `0${butaca.id}` : butaca.id}:-] `;
        }
        console.log(fila);
    }
}

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let row = 0; row < FILAS; row++) {
        // Nueva fila
        let fila = [];
        for (let column = 0; column < COLUMNAS; column++) {
            // Nuevo asiento
            fila.push({
                id: idContador,
                estado: false // Estado inicial libre
            });

            const seat = SEATS[row * COLUMNAS + column];
            seat.innerHTML = idContador;
            if (seat.classList.contains('--occupied')) {
                fila[column].estado = true;
            }

            idContador++;

        }
        butacas.push(fila);
    }

    return butacas;
}

// Inicializar la matriz
let butacas = setup();

const input = document.getElementById('txtInput');

const btnReservation = document.querySelector('#btnReservation');

btnReservation.addEventListener('click', () => {
    const asientos = Number(input.value);
    const sugerencias = suggest(butacas, asientos);
    console.info(sugerencias);
    reserve(butacas, sugerencias);
    print(butacas);
});