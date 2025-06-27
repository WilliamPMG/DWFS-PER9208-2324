// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];

        let rowElement = document.createElement('div');
        rowElement.classList.add('row-container');

        for (let j = 0; j < N; j++) {

            let id = idContador++

            // Nuevo asiento
            fila.push({
                id: id,
                estado: false, // Estado inicial libre
                row: i + 1
            });

            let colElement = document.createElement('div');
            colElement.classList.add('col-item');
            colElement.setAttribute('id', id.toString())
            colElement.textContent = id.toString();
            rowElement.appendChild(colElement);
        }

        document.getElementById('cinema').appendChild(rowElement);

        butacas.push(fila);
    }
    return butacas;
}

// Función para obtener las filas disponibles
function getAvailableRows(butacas, seating) {

    const rows = butacas.slice().reverse();

    const availableRows = []

    if (seating > N) {
        return [];
    }

    for (let i = 0; i < N; i++) {

        let count = 0
        for (let j = 0; j < rows[i].length; j++) {
            if (!rows[i][j].estado) {
                count += 1
            } else {
                count = 0
            }
        }

        if (count >= seating) {
            availableRows.push(rows[i])
        }

    }

    return availableRows
}

// Función para obtener los asientos disponibles
function getSeating(rows, seating) {

    if (rows.length > 0) {

        const row = rows[0];

        let count = 0
        let startPosition = -1
        let endPosition = -1

        seating++

        for (let i = 0; i < row.length; i++) {
            if (count <= seating) {
                if (row[i].estado === false) {

                    if (count === 0) {
                        startPosition = i
                    }

                    count++
                    endPosition = i

                } else {
                    count = 0
                    startPosition = -1
                }
            }
        }
        console.log(startPosition)
        return row.slice(startPosition, seating)

    } else {
        return []
    }

}

// Función para obtener los IDs de las butacas
function getIds(listSeating) {
    const ids = []
    for (let i = 0; i < listSeating.length; i++) {
        ids.push(listSeating[i].id)
    }
    return ids
}

function reserve(listSeating) {

    for (let i = 0; i < listSeating.length; i++) {

        for (let j = 0; j < N; j++) {

            for (let k = 0; k < butacas[j].length; k++) {
                if (listSeating[i].id === butacas[j][k].id) {
                    butacas[j][k].estado = true
                }

            }

        }

    }
}

function suggest(seating) {

    // Obtiene las filas disponibles
    const rows = getAvailableRows(butacas, seating)

    // Obtiene los puestos de las butacas
    const listSeating = getSeating(rows, seating)

    console.log(listSeating)
    // reserve(listSeating)

    return getIds(listSeating)

}

function selectSeats(ids) {
    for (let i = 0; i < ids.length; i++) {
        // console.log(ids[i])
        document.getElementById(ids[i]).classList.add('selecting')
    }
}

function cleanSelectedSeats() {
    const selectedSeats = document.querySelectorAll('.selecting');
    selectedSeats.forEach(seat => {
        seat.classList.remove('selecting');
    });
}

// Inicializar la matriz
let butacas = setup();

//Butacas ocupadas
// Row 1
// butacas[9][0].estado = true;

const inputSeat = document.getElementById('inputSeat');
inputSeat.addEventListener('input', function (evento) {

    // Limpiar los asientos seleccionados
    cleanSelectedSeats()

    // Obtener el valor actual del campo de entrada
    const valueInputSeat = evento.target.value;
    let ids = suggest(valueInputSeat)

    // Seleccionar los asientos sugeridos
    selectSeats(ids)
    console.log(ids)
});
