document.addEventListener('DOMContentLoaded', () => {
    // Obtener todos los botones de asiento
    const seats = document.querySelectorAll('.seats-container .seat');

    // Asignar un id único a cada asiento y añadir estado de reserva
    seats.forEach((seat, index) => {
        seat.id = `seat-${index + 1}`;
        seat.dataset.reserved = seat.classList.contains('btn-danger') ? 'true' : 'false';
    });

    // Inicializar listeners para el input de número de asientos
    const seatCountInput = document.getElementById('seatCount');
    seatCountInput.addEventListener('input', suggest);
});

const N = 5; // Número de filas y columnas

// Función para sugerir asientos
function suggest() {
    const seatCount = parseInt(document.getElementById('seatCount').value);
    if (!seatCount || seatCount > N) {
        resetSeatColors();
        return new Set();
    }

    const seats = document.querySelectorAll('.seats-container .seat');
    const butacas = setup(seats);

    let foundIds = new Set();
    let searchComplete = false;

    // Buscar desde la última fila hacia la primera
    for (let i = N - 1; i >= 0 && !searchComplete; i--) {
        let ids = [];
        for (let j = 0; j < N; j++) {
            if (!butacas[i][j].estado) {
                ids.push(butacas[i][j].id);
                if (ids.length === seatCount) {
                    resetSeatColors();
                    highlightSeats(ids);
                    foundIds = new Set(ids);
                    searchComplete = true;
                }
            } else {
                ids = [];
            }
        }
    }

    if (!foundIds.size) { // Si no se encontraron asientos suficientes resetear colores
        resetSeatColors();
    }

    return foundIds; // Devolver los ids de los asientos encontrados o un set vacío
}

// Función para inicializar la matriz de butacas
function setup(seats) {
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            const seat = seats[i * N + j];
            fila.push({
                id: seat.id,
                estado: seat.dataset.reserved === 'true' // Estado basado en la data attribute
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Función para resetear los colores de los asientos
function resetSeatColors() {
    const seats = document.querySelectorAll('.seats-container .seat');
    seats.forEach(seat => {
        seat.classList.remove('btn-warning');
        if (seat.dataset.reserved === 'true') {
            seat.classList.add('btn-danger');
        } else {
            seat.classList.add('btn-secondary');
        }
    });
}

// Función para resaltar los asientos seleccionados
function highlightSeats(ids) {
    ids.forEach(id => {
        const seat = document.getElementById(id);
        seat.classList.remove('btn-secondary', 'btn-danger');
        seat.classList.add('btn-warning');
    });
}

// Hacer la función suggest global para que se pueda llamar desde el HTML
window.suggest = suggest;