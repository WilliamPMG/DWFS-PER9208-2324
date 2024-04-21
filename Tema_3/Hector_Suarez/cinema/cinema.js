// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

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

// Inicializar la matriz
let butacas = setup();

function on_suggest() {
    let s = suggest(8, butacas);
    console.log(s);
}
