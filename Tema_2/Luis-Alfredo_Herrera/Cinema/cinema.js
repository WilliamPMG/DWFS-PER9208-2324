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

// Inicializar la matriz

let butacas = setup();
//butacas[9][0].estado = true;
//butacas[9][1].estado = true;
//butacas[9][2].estado = true;
butacas[9][3].estado = true;
butacas[9][4].estado = true;
//butacas[9][5].estado = true;
butacas[9][6].estado = true;
//butacas[9][7].estado = true;
butacas[9][8].estado = true;
//butacas[9][9].estado = true;


// Imprimir la matriz
console.log(butacas);

//Algoritmo
function suggest(num_asientos, butacas) {
    let asientos_seleccionados = [];
    if (num_asientos <= butacas.length) {

        //console.log(asientos_seleccionados.length);
        for (let fila = butacas.length - 1; fila >= 0 && asientos_seleccionados.length < num_asientos; fila--) {
            //console.log(butacas[fila]);
            for (let asientos = 0; asientos < butacas[fila].length && asientos_seleccionados.length < num_asientos; asientos++) {
                if (!butacas[fila][asientos].estado) {
                    //console.log(butacas[fila][asientos].id);
                    asientos_seleccionados.push(butacas[fila][asientos].id);
                } else {
                    //console.log('Ninguna fila hay suficientes asientos disponibles juntos');
                    asientos_seleccionados = [];
                }
            }
        }

    } else {
        //console.log('El número de asientos solicitados excede el tamaño máximo de la fila');
        asientos_seleccionados = [];
    }
    return asientos_seleccionados;
}

//Imprime
console.log(suggest(4, butacas));


