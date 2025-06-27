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

function getSeating(rows, seating) {

    if (rows.length > 0) {

        const row = rows[0];

        let count = 0
        let position = 0

        for (let i = 0; i < row.length; i++) {
            if (count <= seating) {
                if (row[i].estado === false) {
                    count += 1
                    position = i
                } else {
                    count = 0
                    position = -1
                }
            }
        }

        return row.slice(position - seating, position)
    } else {
        return []
    }

}

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

    // reserve(listSeating)

    return getIds(listSeating)

}


// Inicializar la matriz
let butacas = setup();

const inputSeat = document.getElementById('inputSeat');
inputSeat.addEventListener('input', function(evento) {
    // Obtener el valor actual del campo de entrada
    const valueInputSeat = evento.target.value;
    let ids = suggest(valueInputSeat)
    console.log(ids)
});
