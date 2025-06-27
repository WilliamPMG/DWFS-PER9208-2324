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
//butacas[7][9].estado = true;
//butacas[8][9].estado = true;
//butacas[9][0].estado = true;
//butacas[9][1].estado = true;
//butacas[9][2].estado = true;
//butacas[9][3].estado = true;
//butacas[9][4].estado = true;
//butacas[9][5].estado = true;
//butacas[9][6].estado = true;
//butacas[9][7].estado = true;
//butacas[9][8].estado = true;
butacas[9][9].estado = true;


// Imprimir la matriz
//console.log(butacas);
//console.log('Butacas inicializadas');

//Algoritmo
function suggest(num_asientos) {
    let asientos_seleccionados = [];
    const selectorAll = document.querySelectorAll('.td-color-activo');
    selectorAll.forEach((element) => {
        element.classList.remove("td-color-activo");
        element.classList.add("td-color-inactivo");
    });
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
                    console.log('El número de asientos solicitados excede el tamaño máximo de la fila');
                    const selectorAll = document.querySelectorAll('.td-color-activo');
                    selectorAll.forEach((element) => {
                        element.classList.remove("td-color-activo");
                        element.classList.add("td-color-inactivo");
                    });
                }
            }
        }

    } else {
        //console.log('El número de asientos solicitados excede el tamaño máximo de la fila');
        asientos_seleccionados = [];

    }
    //return asientos_seleccionados;
    console.log(asientos_seleccionados)
    // asientos seleccionados
    asientos_seleccionados.forEach(seatId => {
        const seatElement = document.getElementById(`id_${seatId}`);
        //console.log(seatElement);
        if (seatElement) {
            seatElement.classList.remove("td-color-inactivo");
            seatElement.classList.add("td-color-activo");
        }
    });
}

window.onload = function () {
    //asignar
    const asignar = document.querySelectorAll('.td-color-inactivo');
    asignar.forEach((element, index) => {
        element.id = `id_${index + 1}`;
    });

    //asientos no disponibles
    const noDisponibles = new Set();
    for (let i = 0; i < butacas.length; i++) {
        for (let j = 0; j < butacas[i].length; j++) {
            if (butacas[i][j].estado) {
                noDisponibles.add(butacas[i][j].id);
            }
        }
    }

    // asientos no disponibles
    noDisponibles.forEach(seatId => {
        const seatElement = document.getElementById(`id_${seatId}`);
        if (seatElement) {
            seatElement.classList.toggle("td-color");
        }
    });

    let num_asientos = document.getElementById('num_asientos');
    num_asientos.addEventListener("change", () => {
        let asientos_id = suggest(Number(num_asientos.value));
    })
};
//Imprime
//console.log(suggest());


