// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

/**
 * Función que configura el tamaño inicial de los asientos de la sala de cine UNIR
 */
function setupAsientos() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let asientos = [];

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
        asientos.push(fila);
    }
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
    asientosReservados.forEach(fila => {
        fila.forEach(asiento => {
            if(setRtaAsientosReservados.has(asiento.id))
                asiento.estado = true;
        });
    });
    //console.log(setRtaAsientosReservados);
    
    return setRtaAsientosReservados
}

// Inicializar la matriz de Asientos
const asientos = setupAsientos();
// Imprimir la matriz Asientos inicial
//console.log(asientos);

//Datos de prueba
// Obtiene los asientos disponibles segun los asientos solicitados
let primerReserva = suggestAsientos(asientos, 10);
// console.log("La matriz inicial");
// console.log(asientos);
let segundaReserva = suggestAsientos(asientos, 2);
let terceraReserva = suggestAsientos(asientos, 8);
// Imprimir las butacas encontradas disponibles y contiguas
console.log('Asientos Primera Reserva', primerReserva);
console.log('Asientos Segunda Reserva', segundaReserva);
console.log('Asientos Tercera Reserva', terceraReserva);