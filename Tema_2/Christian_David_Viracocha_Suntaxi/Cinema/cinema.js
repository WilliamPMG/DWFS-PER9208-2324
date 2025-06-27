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

/**
 * Funcion para imprimir los asientos reservados
 */
function asientosReservados(butacas) {
    console.log("#############################################");
    let cont = 0;
    for (let i = 0; i < butacas.length; i++) {
        for (let j = 0; j < butacas[i].length; j++) {

            if (butacas[i][j].estado === true) {
                console.log("Fila:", i+1, "Columna:", j+1, "Estado:", butacas[i][j].estado, "ID:", butacas[i][j].id);
                cont++;
            }
        }
    }

    console.log("Puestos Reservados:", cont);
}

function suggest(butacas, cantPorReservar) {

    let sugeridos = [];
    let puestoSugerido = [];

    if (cantPorReservar > N) {
        return [];
    }

/*
    for (let i = N - 1; i >= 0; i--) {
        let cont = 0;
        puestoSugerido = [];
        for (let j = 0; j < butacas[i].length; j++) {
            if (!butacas[i][j].estado) {
                cont++;
                puestoSugerido.push({ fila: i, columna: j, id: butacas[i][j].id });
            } else {
                cont = 0;
                puestoSugerido = [];
            }
            if (cont === cantPorReservar) {
                sugeridos.push(...puestoSugerido); // Copia los datos de la matriz de sugerencia
                return sugeridos;
            }
        }
    }
*/

    let i = N - 1;
    let j = 0;
    let k = 0;

    while (i >= 0) {
        let cont = 0;
        puestoSugerido = [];
        while (j < butacas[i].length ) {

            if (!butacas[i][j].estado) {
                cont++;
                puestoSugerido.push({ fila: i, columna: j, id: butacas[i][j].id });
            } else {
                cont = 0;
                puestoSugerido = [];
            }
            if (cont === cantPorReservar) {
                sugeridos.push(...puestoSugerido); // Copia los datos de la matriz de sugerencia
                k=1;
            }
            j++;

            if(k===1)
            {
                j = butacas[i].length+1
                
            }
        }
        i--;
        j=0;
        if(k===1)
        {
            i=-1;
        }
    }

    return sugeridos;
}

function actualizarButacas(butacas, puestoSugerido) {
    puestoSugerido.forEach(item => {
        butacas[item.fila][item.columna].estado = true;
    });
}


// Inicializar la matriz
let butacas = setup();


//Asignacion de Puestos Usados
butacas[9][1].estado = true;
butacas[9][5].estado = true;
butacas[8][3].estado = true;
butacas[8][7].estado = true;
butacas[7][2].estado = true;
butacas[5][9].estado = true;

// Imprimir la matriz
console.log(butacas);

asientosReservados(butacas)

let butacasReservados = suggest(butacas, 5)

actualizarButacas(butacas, butacasReservados)

asientosReservados(butacas)