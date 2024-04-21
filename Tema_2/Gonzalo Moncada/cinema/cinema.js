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
function suggest(butacas,butacasabuscar){
    let libresfila = [];
    if (butacasabuscar>N) {
        return libresfila; //devuelve array vacio si el numero ingresado es mayor que N
    }
    let reservados = new Set ();
    let flag=true
    console.log("Buscando ",butacasabuscar," butacas vacias seguidas ");
    for (let fila = N-1; fila >=0 && flag; fila--) {
        for (let numero = N-1; numero >=0 && flag; numero--) {
            console.log(butacas[fila][numero]);
            if (butacas[fila][numero].estado ===false) {
                libresfila.push(butacas[fila][numero]);
            }else {
                libresfila = [];
            }
            if (libresfila.length===butacasabuscar) {
                console.log("Hemos terminado")
                flag=false;
                libresfila.forEach(item=>{
                    reservados.add(item.id);
                    item.estado=true;
                })
            }
        }
    }
    return reservados;
}


// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log(butacas);

//butacas seguidas ocupadas 
//fila 10 ocupada 
butacas[9][2].estado = true;
butacas[9][8].estado = true;
butacas[9][9].estado = true;

//fila 9 ocupada 
butacas[8][6].estado = true;

let buscabutacas = suggest(butacas,8)
console.log('Butacas Reservadas:', buscabutacas);


