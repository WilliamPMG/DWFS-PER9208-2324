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


function suggest(n) {
    if (n == 0 || n == NaN || n == null){
        return;
    }
    let butacas = setup();
    cont = 1;
    temp = 0;
    butacas.reverse();
    let reservas = []
    for (let i = 0; i < butacas.length && butacas.length >= n && cont <= n; i++) {
       for (let j = 0; j < butacas[i].length && cont <= n ; j++) {
        if (butacas[i][j].estado === false) {
            reservas.push(butacas[i][j].id)
            cont++;
        } else {
            reservas=[]
            cont =1
        }
       }
    }
    console.log(`Butacas disponibles: ${reservas}`)
    //return reservas
}