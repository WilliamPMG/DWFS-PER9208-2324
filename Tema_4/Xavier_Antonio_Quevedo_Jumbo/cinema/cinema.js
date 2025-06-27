const N = 10;
const FILAS = ['Fila 1', 'Fila 2', 'Fila 3', 'Fila 4', 'Fila 5', 'Fila 6', 'Fila 7', 'Fila 8', 'Fila 9', 'Fila 10'];

// Función para inicializar la matriz de butacas y generar la tabla en el DOM
function setup() {
    let idContador = 1;
    let butacas = [];
    let butacasTable = document.getElementById('butacasTable');

    for (let i = 0; i < N; i++) {
        // Crear una nueva fila en la tabla
        let fila = document.createElement('tr');
        let butacaRow = [];

        let encabezado = document.createElement('th');
        encabezado.innerText = FILAS[i];
        fila.appendChild(encabezado);

        for (let j = 0; j < N; j++) {
            // Crear una nueva celda en la fila
            let butaca = document.createElement('td');
            butaca.id = `butaca-${idContador}`; // Asignar un ID único a la butaca
            butaca.className = Math.random() > 0.8 ? 'td__ocupado' : 'libre';

            // Añadir la butaca al DOM
            fila.appendChild(butaca);

            // Añadir la butaca a la matriz
            butacaRow.push({
                id: idContador++,
                estado: false, // Estado inicial libre
                domElement: butaca // Referencia al elemento DOM
            });
        }

        // Añadir la fila a la tabla en el DOM
        butacasTable.appendChild(fila);
        butacas.push(butacaRow);
    }

    return butacas;
}

// Inicializar la matriz
let butacas = setup();


// Función para sugerir asientos
const suggest = (numSeats) => {
    console.log("Butacas iniciadas...");

    const numberOfSeats = new Set();
    if (numSeats <= N) {
        let consecutiveSeats = 0;
        const rows = butacas.slice().reverse();
        for (let i = 0; i < rows.length && numberOfSeats.size < numSeats; i++) {
            const row = rows[i];
            for (let j = 0; j < row.length && numberOfSeats.size < numSeats && j <= consecutiveSeats; j++) {
                const seat = row[j];
                if (!seat.estado) {
                    consecutiveSeats++;
                    numberOfSeats.add(seat.id);
                } else {
                    consecutiveSeats = 0;
                    numberOfSeats.clear();
                }
            }
        }
    }
    console.log(numberOfSeats);

    // Resetear todas las butacas
    butacas.flat().forEach(seat => {
        seat.domElement.className = seat.estado ? 'td__ocupado' : 'libre';
    });

    // Marcar las butacas sugeridas
    numberOfSeats.forEach(id => {
        document.getElementById(`butaca-${id}`).className = 'preseleccion';
    });

    return numberOfSeats;
};

// Añadir listener al input
document.getElementById('numero__reserva__butacas').addEventListener('input', (event) => {
    const numSeats = parseInt(event.target.value);
    if (!isNaN(numSeats)) {
        suggest(numSeats);
    }
});
