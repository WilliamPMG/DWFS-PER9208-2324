// Definir el tamaño de la matriz de butacas
const N = 7; // Número de filas y columnas
let butacas = [];

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    butacas = [];

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

    console.log("Butacas inicializadas");
    console.log(butacas);
    return butacas;
}

function asignarIDs() {
    let idContador = 1;
    let divs = document.querySelectorAll('.asientoDisponible, .asientoOcupado');
    
    divs.forEach(div => {
        div.id = 'asiento' + idContador++;
    });
}


window.onload = function()
{
    setup();
    asignarIDs();
    loadAsientosReservados();
    let txtAsientos = document.getElementById('txtAsientos');

    txtAsientos.addEventListener("input",() =>
    {
        suggest(txtAsientos.value);
    })
}


function suggest(asientos) {

    let asientoSugeridos = [];
    let sugeridosTemp = [];

    if (asientos > N) {
        return asientoSugeridos;
    }

    for (let i = N - 1; i >= 0; i--) {
        for (let j = 0; j <= N - asientos; j++) {
            let sugerido = [];

            let todosDisponibles = true;
            for (let k = 0; k < asientos; k++) {
                if (butacas[i][j + k].estado) {
                    todosDisponibles = false;
                }
                sugerido.push(butacas[i][j + k].id);
            }

            if (todosDisponibles) {
                sugeridosTemp.push(sugerido.slice());
            }
        }
    }

    if (sugeridosTemp.length > 0) {
        asientoSugeridos = sugeridosTemp[0];
    }

    console.log(asientoSugeridos);
    actualizarAsientos(asientoSugeridos);

    return asientoSugeridos;
}

function loadAsientosReservados()
{
    let id = document.getElementById('asiento49');
    id.classList.add('asientoReservado');
    id.classList.remove('asientoDisponible');

    butacas[6][6].estado = true;

    let asientosReservados = ['asiento49'];

    return asientosReservados;
}

function actualizarAsientos(asientosSugeridos)
{
   let divsAsientos = document.querySelectorAll('.asientoDisponible, .asientoOcupado');

   divsAsientos.forEach(function(divAsiento)
   {
        let id = parseInt(divAsiento.id.replace('asiento',''));

        if (asientosSugeridos.includes(id))
        {
            if (!divAsiento.classList.contains('asientoOcupado'))
            {
                divAsiento.classList.add('asientoOcupado');
            }

            divAsiento.classList.remove('asientoDisponible');
        }
        else
        {
            if (divAsiento.classList.contains('asientoOcupado'))
            {
                divAsiento.classList.remove('asientoOcupado');
            }

            divAsiento.classList.add('asientoDisponible');
        }
   });

}

