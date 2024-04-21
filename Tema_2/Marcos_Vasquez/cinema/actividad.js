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
            // Marco algunos asientos en true para efectos del ejemplo
            if ((i == 1 && j > 2) || (i == 3 &&  j % 2 == 0) || (i == 9) || (j==4))
            {
                fila.push({
                    id: idContador++,
                    estado: true // Estado inicial libre
                });
            }
            else
            {
                fila.push({
                    id: idContador++,
                    estado: false // Estado inicial libre
                });
            }
            
        }
        butacas.push(fila);
    }
    return butacas;
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log(butacas);

function suggest(numAsientos) {
    let asientos = new Set();
    let numAsientosD = 0; // Número de asientos disponibles en fila

    // Valido que el número de asientos ingresados no sea mayor que el número de filas
    if (numAsientos <= N)
    {
        // Reacorro las filas pero desde la última, esto hace que se tenga prioridad a las filas
        // mas lejanas del teatro.
        // De igual forma valido que el número de asientos seleccionado sea igual al que se agrega para culminar el for
        for (let index = N-1; index > -1 && numAsientosD != numAsientos; index--) {
            const element = butacas[index];
            console.log(element)
            numAsientosD == 0
            // Se recorren los asientos en la fila
            // Al igual que en el otro for se valida que el número de asientos seleccionados y los agregados en el set no sean iguales para continuar, si lo son termina el for
            for (let index2 = 0; index2 < element.length && numAsientosD != numAsientos; index2++) {
                const asiento = element[index2];
                // Valido si el asiento está ocupado para llenar el set y aumentar el contador de asientos 
                if (!asiento.estado)
                {
                    numAsientosD++
                    asientos.add(asiento.id)
                }
                else
                {
                    // Si alguno de los asientos no está disponible entonces se reinicia el set y la variable
                    numAsientosD = 0
                    asientos.clear()
                }
            }

            // Este punto solo valida si al final de una fila no quedaron elementos seleccionados de la anterior
            if (numAsientosD != numAsientos)
            {
                numAsientosD = 0
                asientos.clear()
            }
            
        }
    }

    return asientos
}

let resp = suggest(4)

console.log(resp)
