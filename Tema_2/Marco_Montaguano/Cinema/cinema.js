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
    butacas[9][1].estado=true;
    butacas[9][5].estado=true;
    butacas[8][4].estado=true;
    butacas[8][5].estado=true;
    butacas[7][7].estado=true;
    butacas[7][8].estado=true;
    butacas[7][9].estado=true;
    butacas[6][9].estado=true;
    butacas[5][9].estado=true;
    butacas[4][9].estado=true;
    butacas[3][9].estado=true;
    butacas[2][9].estado=true;
    butacas[1][9].estado=true;
    butacas[0][9].estado=true;
    return butacas;
}


function suggest(numAsientos){
    let set = new Set();
    if(numAsientos <= N){
        let bloqueo = false;
        let encontrado = false;
        butacas.reverse().forEach(fila=>{
            let indiceFinal = -1;
            if (!bloqueo) {
                let contador = 0;
                fila.forEach(asiento=>{
                    if (!bloqueo) {
                        if (!asiento.estado) {
                            contador++;
                        } else {
                            contador = 0;
                        }
                        if (contador === numAsientos) {
                            bloqueo = true;
                            indiceFinal = asiento.id;
                            //console.log("---> Caso encontrado")
                        }
                    }
                });
                //console.log("--> Fila validada");
            }
            if(bloqueo && !encontrado && indiceFinal > -1){
                for(let butaca=(indiceFinal-numAsientos); butaca<indiceFinal;butaca++){
                    set.add(butaca+1);
                }
                encontrado = true;
            }
            //console.log("Pasa fila: "+indice);
        });
    }
    return set;
}

// Inicializar la matriz
let butacas = setup();
// Imprimir la matriz
//console.log(butacas);
console.log(suggest(4));