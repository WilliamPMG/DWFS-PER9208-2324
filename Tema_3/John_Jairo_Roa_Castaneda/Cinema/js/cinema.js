// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas
botonReservar = document.getElementById("btn-procesar-asientos");
sala = document.getElementById("pnlSala");

/**
 * Función que configura el tamaño inicial de los asientos de la sala de cine UNIR
 */
function setupAsientos() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let asientos = [];
    let letraAsiento = 97;
    let filasHTML = "";
    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        let asientoHTML = ""
        for (let j = 0; j < N; j++) {
            asientoHTML += "<div id='"+idContador + "' class= 'asiento'>" + (String.fromCharCode(letraAsiento).toUpperCase() + (j + 1)) + "</div>"
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: false // Estado inicial libre
            });
        }
        asientos.push(fila);
        filasHTML +=  "<div class ='fila'>" + asientoHTML + "</div>";
        letraAsiento++;
    }
    sala.innerHTML = filasHTML;
    return asientos;
}

/**
 * suggest - Función que devuelve un número de asientos según lo solicitado y dependiendo de
 * la disponibildad que se tiene
 * @param {set} AsientosReservados - Argumento que recibe la cantidad de asientos de la sala que ya están reservados
 * @param {number} numAsientosDeseados - Argumento que recibe la cantidad de asientos solicitados o deseados
 * @returns {set} Retorna un conjunto de sillas con sus números reservados.
 **/
function suggestAsientos(asientosReservados, numAsientosDeseados) {
    let setRtaAsientosReservados = new Set();
    //Si el número de asientos solicitados excede el tamaño máximo de la fila, la función debe devolver un set vacío.
    if (numAsientosDeseados > N)
        return setRtaAsientosReservados;

    //Seleccionamos las filas que tienen asientos disponibles aún
    let disponiblidadPorFila = asientosReservados.filter(fila => fila.some(asiento => asiento.estado === false));
    //console.log("==========================DisponiblidadPorFila=================");
    //console.log(disponiblidadPorFila);
    //Si en ninguna fila hay suficientes asientos disponibles **juntos**,  con lo que se desea reservar, la función debe devolver un set vacío.
    if(!disponiblidadPorFila.some(fila => fila.filter(asiento => asiento.estado === false).length >= numAsientosDeseados))
        return setRtaAsientosReservados;

    //Se aplica reverse para cumplir con : Se comenzará a buscar asientos **juntos** en la **fila más lejana** a la pantalla, por lo que si varias filas pudiesen albergar el número de asientos solicitado, se elegiría siempre la más lejana a la pantalla
    //El resultado debe ser un Set con los ids de los asientos pre-seleccionados.
    disponiblidadPorFila.reverse().forEach(fila => {
        //Se valida que ya la reserva no esté completa
        if(setRtaAsientosReservados.size  < numAsientosDeseados)
        {
            //Se recorren las sillas o asientos
            fila.forEach(asiento => {
                //El asiento debe estar disponible y se vuelve a validar que ya no haya llegado a la capicidad de reserva de nuevo, ya que pudo llenarse en este fase
                if(asiento.estado === false && setRtaAsientosReservados.size < numAsientosDeseados)
                    setRtaAsientosReservados.add(asiento.id);
            });
        }
    });
    
    //Actualizamos los puestos para que ya no estén disponibles para una nueva oprotunidad de reserva
    //Obtener la vista HTML de los asientos
    asientosReservados.forEach(fila => {
        fila.forEach(asiento => {
            if(setRtaAsientosReservados.has(asiento.id)){
                asiento.estado = true;
                //Actualizar la vista HTML para mostrar el asiento ocupado
                document.getElementById(asiento.id).classList.add("asiento-ocupado");
            }
        });
    });

    return setRtaAsientosReservados
}

// Agregar un event listener para cada botón
botonReservar.addEventListener("click", function() {
    let cantReservar = document.getElementById("txtCantReserve");
    let asientosReservados = suggestAsientos(asientos, cantReservar.value);
    console.log(asientosReservados);
    if(asientosReservados.size <= 0)
        alert("No fue posible reservar. Recuerde que solo pude reservar hasta 10 asientos o no hay cupos disponibles en el momento!");
    else
        alert("Asientos Reservados:\n" + Array.from(asientosReservados).join("\n"));
});

// Inicializar la matriz de Asientos
const asientos = setupAsientos();

