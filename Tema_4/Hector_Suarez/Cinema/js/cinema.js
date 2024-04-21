// Definir el tamaño de la matriz de butacas
const N = 7; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

function suggest(n_seats, butacas) {
    const seats = new Set();
    if (n_seats > N) {
        return seats;
    }
    for (let ix = N - 1; ix >= 0 && seats.size < n_seats; ix--) {
        for (let iy = 0; iy < N && seats.size < n_seats && N - iy >= n_seats - seats.size; iy++) {
            if (!butacas[ix][iy].estado) {
                seats.add(butacas[ix][iy].id);
            } else {
                seats.clear();
            }
        }
    }
    return seats;
}

function crear_asientos(butacas) {
    let butacas_display = document.getElementById('butacas_display');
    for (const [index, row] of butacas.entries()) {
        let filename = document.createElement('div')
        filename.classList.add('col')
        filename.textContent = `Fila ${index + 1}`;
        let butaca_elem = [filename];
        for (const obj of row) {
            let elem = document.createElement('div');
            elem.classList.add('col', 'seat');
            elem.id = `butaca_${obj.id}`;
            elem.textContent = `${obj.id}`;
            if (obj.estado) {
                elem.classList.add('seat--taken')
            }
            butaca_elem.push(elem);
        }
        let row_elem = document.createElement('div');
        row_elem.classList.add('row');
        row_elem.append(...butaca_elem)
        butacas_display.append(row_elem);
    }
}

function reset_seats(seats) {
    for (const seat of seats.flat()) {
        let elem_seat = document.getElementById(`butaca_${seat.id}`)
        elem_seat.classList.remove('seat--pretaken');
    }
}

function pre_taken(seats) {
    seats.forEach(element => {
        document.getElementById(`butaca_${element}`).classList.add('seat--pretaken');
    });
}

// Inicializar la matriz
let butacas = setup();
butacas[6][6].estado = true; // cambiar el estado

crear_asientos(butacas);

let seat_input = document.getElementById('seat_input');

seat_input.addEventListener('input', function () {
    let s = parseInt(this.value);
    let sg = suggest(s, butacas);
    reset_seats(butacas);
    pre_taken(sg);
});
