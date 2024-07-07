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

function suggest(butacas, numAsientos) {
    if (numAsientos > N) {
        return new Set(); // Si se piden más asientos que los disponibles en una fila, devolver set vacío
    }

    let foundIds = new Set(); // Usar una variable para guardar los IDs encontrados
    let searchComplete = false; // Variable para controlar la búsqueda

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

    return foundIds;
}

// Ejemplo de prueba
// Inicializar la matriz de butacas
let butacas = setup();

// Modificar el estado de algunos asientos a true para probar la efectividad del algoritmo
butacas[9][7].estado = true;
butacas[9][8].estado = true;
butacas[9][9].estado = true;

let resultado = suggest(butacas, 3);
console.log(resultado); // Debería devolver un conjunto con los IDs de los asientos libres juntos en la fila más lejana a la pantalla

// Modificar el estado de algunos asientos a true para probar otro caso
butacas[8][7].estado = true;
butacas[8][8].estado = true;
butacas[8][9].estado = true;

resultado = suggest(butacas, 3);
console.log(resultado); // Debería devolver un conjunto con los IDs de los asientos libres juntos en la siguiente fila más lejana a la pantalla