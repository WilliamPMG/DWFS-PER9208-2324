const SEATS = document.getElementsByClassName('seats__seat');
const COLUMNS = 15;
const ROWS = SEATS.length / COLUMNS;

// Inicializar la matriz
let butacas = [];

const input = document.getElementById('txtInput');
const btnReservation = document.querySelector('#btnReservation');

document.addEventListener('DOMContentLoaded', () => {
    butacas = setup();
    preSelected();
});

function suggest(butacas, numeroAsientos) {
    if (numeroAsientos > COLUMNS) {
        return [];
    }

    let sugerencias = [];
    for (let row = ROWS - 1; row >= 0 && sugerencias.length < numeroAsientos; row--) {
        for (let colunm = 0; colunm < COLUMNS && (sugerencias.length < numeroAsientos)
            && (COLUMNS - colunm >= numeroAsientos - sugerencias.length); colunm++) {

            const butaca = butacas[row][colunm];

            if (!butaca.estado) {
                sugerencias.push(butaca.id);
            }
            else {
                sugerencias = [];
            }

        }
    }

    return sugerencias;

}

function reserveSeat(butacas, reservas, reservar = false) {
    let asientosReservados = 0; // Contador de asientos reservados, para evitar recorrer la matriz de butacas innecesariamente
    for (let row = ROWS - 1; row >= 0 && asientosReservados < reservas.length; row--) {
        for (let column = 0; column < COLUMNS && asientosReservados < reservas.length; column++) {
            reservas
                .filter(asiento => butacas[row][column].id === asiento)
                .forEach(asiento => {
                    const seat = document.getElementById(asiento);
                    if (reservar) {
                        butacas[row][column].estado = true;
                        seat.classList.remove('--selected');
                        seat.classList.add('--reserved');
                    }
                    else {
                        seat.classList.add('--selected');
                    }
                    asientosReservados++;
                });
        }
    }
}

function print(butacas) {
    butacas.forEach((fila) => {
        let linea = '';
        fila.forEach((butaca) => {
            linea += ` [${butaca.id < 10 ? `0${butaca.id}` : butaca.id}:${butaca.estado ? 'X' : '-'}] `;
        });
        console.log(linea);
    });

}

function reset(butacas) {
    butacas.forEach((filas) =>
        filas
            .filter(butaca => !butaca.estado)
            .forEach((butaca) => {
                const seat = document.getElementById(butaca.id);
                if (seat.classList.contains('--selected')) {
                    seat.classList.remove('--selected');
                }
            })
    );

}

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let row = 0; row < ROWS; row++) {
        // Nueva fila
        let fila = [];
        for (let column = 0; column < COLUMNS; column++, idContador++) {
            // Nuevo asiento
            fila.push({
                id: idContador,
                estado: false // Estado inicial libre
            });

            // Obtener el asiento actual
            const seat = SEATS[row * COLUMNS + column];

            seat.id = idContador;
            seat.textContent = idContador;

        }
        butacas.push(fila);
    }

    return butacas;
}

const preSelected = () => {
    reset(butacas);
    const asientos = Number(input.value);
    const sugerencias = suggest(butacas, asientos);
    console.info(sugerencias);
    reserveSeat(butacas, sugerencias);
};

input.addEventListener('input', preSelected);

btnReservation.addEventListener('click', () => {
    const asientos = Number(input.value);
    const sugerencias = suggest(butacas, asientos);
    if (sugerencias.length === 0) {
        alert('No hay suficientes asientos disponibles');
        return;
    }
    reserveSeat(butacas, sugerencias, true);
    print(butacas);
    preSelected();
});

// Seleccionar asientos manualmente
for (let i = 0; i < SEATS.length; i++) {
    SEATS[i].addEventListener('click', function () {
        const id = Number(this.getAttribute('id'));
        if (this.classList.contains('--reserved')) {
            alert(`El asiento ${id} ya está ocupado`);
        } else if (confirm(`¿Reservar asiento: ${id}?`)) {
            reserveSeat(butacas, [id], true);
            preSelected();
        }
    });
}