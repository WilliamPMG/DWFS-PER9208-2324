function setup() {

    let idContador; 
    let butacas = [];

    for (let i = 0; i < fil; i++) {

        let fila = [];
        for (let j = 0; j < col; j++) {

            fila.push({
                id: i.toString() + '-' + j.toString(),
                estado: Math.random() < 0.5
            });

            if(fila[j].estado){
                const asientoOcupado = document.getElementById(i.toString() + '-' + j.toString());
                asientoOcupado.classList.add('ocupado');
            }
        }
        butacas.push(fila);
    }
    return butacas;
}

function printButacas(data){
    console.log(data);
}

function suggest(solicitud){

    let temp = [];
    let varVal = false;

    if (solicitud > col) {
        return temp;
    } 

    for(let i = fil-1; i > 0; i--){
        let contador = 0;
        for(let j = 0; j < col; j++){
            if(butacas[i][j].estado == false && contador < solicitud && !varVal){
                contador++;
                temp.push(butacas[i][j].id);
                if(contador==solicitud){
                    colorReserva(temp);
                    varVal = true;
                } else{
                    colorNormal(temp);
                }
            } else if(!varVal){
                contador = 0;
                temp = [];
            }
            if(j == col -1 && contador > 0 && !varVal){
                contador = 0;
                temp = [];
            }
        }
    }
}

function colorReserva(reserva){

    let posReserva = reserva.length;

    if(posReserva > 0){
        for(let i = 0; i < posReserva; i++){
            const asientoReservado = document.getElementById(reserva[i]);
            asientoReservado.classList.add('reserva');
        }
    }

}

function colorNormal(reserva){

    let posReserva = reserva.length;

    if(posReserva > 0){
        for(let i = 0; i < posReserva; i++){
            const asientoReservado = document.getElementById(reserva[i]);
            asientoReservado.classList.remove('reserva');
        }
    }

}

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('valorSugerido').addEventListener('input', () =>{

        const reserva = suggest(document.getElementById('valorSugerido').value);

    });

});

const  fil = 5;
const col = 12;
const valSug = document.getElementById('valorSugerido');
let butacas = setup();