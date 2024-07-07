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

// Función para sugerir asientos
function suggest() {
    const seatCount = document.getElementById('seatCount').value;
    if (!seatCount || seatCount > N) {
        console.log(new Set()); // Log and return empty set if invalid input
        return new Set();
    }

    const numAsientos = parseInt(seatCount, 10);
    const butacas = setup(); // Setup butacas

    // Modificar el estado de algunos asientos a true para probar la efectividad del algoritmo
    butacas[9][7].estado = true;
    butacas[9][8].estado = true;
    butacas[9][9].estado = true;

    let foundIds = new Set();
    let searchComplete = false;

    // Buscar desde la última fila hacia la primera
    for (let i = N - 1; i >= 0 && !searchComplete; i--) {
        let ids = [];
        for (let j = 0; j < N; j++) {
            if (!butacas[i][j].estado) {
                ids.push(butacas[i][j].id);
                if (ids.length === numAsientos) {
                    foundIds = new Set(ids);
                    searchComplete = true;
                }
            } else {
                ids = [];
            }
        }
    }

    console.log(foundIds);
    return foundIds;
}

// Hacer la función suggest global para que se pueda llamar desde el HTML
window.suggest = suggest;