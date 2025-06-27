window.addEventListener("load", (event) => {
    butacas = setup();
    butacas.reverse();
});

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
            //Crear filas 
            let divElementFila = document.createElement("div");
            divElementFila.classList.add("vacant");
            divElementFila.classList.add("seat");
            divElementFila.classList.add("seat");
            divElementFila.setAttribute("id",`butaca${idContador-1}`);
            document.getElementById(`fila${i+1}`).appendChild(divElementFila)
        }
        butacas.push(fila);
    }
    butacas[9][1].estado = true;
    butacas[9][3].estado = true;
    butacas[9][4].estado = true;
    document.getElementById('butaca92').classList.add("reserv");
    document.getElementById('butaca94').classList.add("reserv");
    document.getElementById('butaca95').classList.add("reserv");
    return butacas;
}

let reservar = document.getElementById("cantAsientos");

reservar.addEventListener('input', function() {
    suggest(reservar.value);
})

function suggest(n) {
    //Vacia butacas
    let reiniciar = document.querySelectorAll("div");
    reiniciar.forEach((element) => {
        element.classList.remove("reserv");
    })
    //Butacas ocupadas
    butacas[9][1].estado = true;
    butacas[9][3].estado = true;
    butacas[9][4].estado = true;
    document.getElementById('butaca92').classList.add("reserv");
    document.getElementById('butaca94').classList.add("reserv");
    document.getElementById('butaca95').classList.add("reserv");
    if (n == 0 || n == NaN || n == null){
        return;
    }
    cont = 1;
    temp = 0;
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
    reservas.forEach(element => {
        let butaca = document.getElementById(`butaca${element}`);
        butaca.classList.add("reserv");
    });
    console.log(`Butacas disponibles: ${reservas}`)
    //return reservas
}