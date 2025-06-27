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
                estado: false, // Estado inicial libre
                row: i + 1
            });
        }
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

function suggest(butacas, seating) {

    // Obtiene las filas disponibles
    const rows = getAvailableRows(butacas, seating)

    // Obtiene los puestos de las butacas
    const listSeating = getSeating(rows, seating)

    reserve(listSeating)

    return getIds(listSeating)

}


// Inicializar la matriz
let butacas = setup();

//Butacas ocupadas
// Row 1
butacas[0][0].estado = true;
// Row 2
butacas[1][3].estado = true;
butacas[1][4].estado = true;
butacas[1][0].estado = true;
butacas[1][8].estado = true;
// Row 3
butacas[2][1].estado = true;
// Row 4
butacas[3][0].estado = true;
butacas[3][2].estado = true;
butacas[3][3].estado = true;
// Row 5
butacas[4][1].estado = true;
// Row 6
butacas[5][1].estado = true;
// Row 7
butacas[6][1].estado = true;
// Row 8
butacas[7][1].estado = true;
// Row 9
butacas[8][1].estado = true;
// Row 10
butacas[9][1].estado = true;

// Imprimir la matriz
// console.log(butacas);


//console.log(suggest(butacas, 2))
console.log(suggest(butacas, 10))
//console.log(suggest(butacas, 9))
