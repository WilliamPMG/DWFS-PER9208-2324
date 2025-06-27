const N = 10; // Número de filas y columnas

function setup() {
    let idContador = 1;
    let butacas = [];

    for (let i = 0; i < N; i++) {
        let fila = [];
        for (let j = 0; j < N; j++) {
            fila.push({
                id: idContador++,
                estado: false
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

function suggest(numAsientos) {
    if (numAsientos == 0 || isNaN(numAsientos) || numAsientos == null){
        return [];
    }
    let butacas = setup();
    let sugeridos = [];
    butacas.reverse();
    contadorAsientosLibres = 1;
    temp = 0;
    for (let i = 0; i < butacas.length && butacas.length >= numAsientos && contadorAsientosLibres <= numAsientos; i++) {
       for (let j = 0; j < butacas[i].length && contadorAsientosLibres <= numAsientos ; j++) {
        if (butacas[i][j].estado === false) {
            sugeridos.push(butacas[i][j].id)
            contadorAsientosLibres++;
        } else {
            sugeridos=[]
            contadorAsientosLibres =1
        }
       }
    }
    console.log(`Asientos sugeridos: ${sugeridos}`);
    return sugeridos;
}