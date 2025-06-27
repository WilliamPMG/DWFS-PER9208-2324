const ROWS = 4; // Seat row quantity
const COLUMNS = 8; // Seat column quantity


function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < ROWS; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < COLUMNS; j++) {
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

// Inicializar la matriz
let seats = setup();
console.log("Asientos inicializados")

function suggest(qty){
    let suggested = suggestQty(qty);
    let suggestedIds = [];
    suggested.forEach(function(seat){
        suggestedIds.push(seat.id);
    })
    console.log("Asientos sugeridos: " + suggestedIds)
}

function suggestQty(qty){
    let seatSuggestion = [];
    for (let i = seats.length - 1; i >= 0 && seatSuggestion.length < qty; i--){
        for (let j = 0; j < seats[i].length && seatSuggestion.length < qty; j++){
            if (!seats[i][j].estado){
                seatSuggestion.push(seats[i][j])
            }
            else{
                seatSuggestion = []
            }
        }
    }
    return seatSuggestion.length === qty ? seatSuggestion : [] ;
}
