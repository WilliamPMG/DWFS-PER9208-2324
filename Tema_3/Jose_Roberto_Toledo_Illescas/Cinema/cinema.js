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

function printButacas(data){
    console.log(data);
}

function updateButacas(){
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            butacas[i][j].estado = Math.random() < 0.5;
        }
    }
}

function suggest(solicitud){

    let temp = [];
    let varVal = false;
    
    if (solicitud > N) {
        return temp;
    } 

    for(let i = N-1; i > 0; i--){
        let contador = 0;
        for(let j = 0; j < N; j++){
            if(butacas[i][j].estado == false && contador < solicitud && !varVal){
                contador++;
                temp.push(butacas[i][j].id);
                if(contador == solicitud){
                    varVal = true;
                }
            } else if(!varVal){
                contador = 0;
                temp = [];
            }
            if(j == N -1 && contador > 0 && !varVal){
                contador = 0;
                temp = [];
            }
        }
    }

    return temp;

}


function resSugerir(valorButaca){
    updateButacas();
    const reserva = suggest(valorButaca);
    printButacas(reserva);
}

const N = 10; 
let butacas = setup();
