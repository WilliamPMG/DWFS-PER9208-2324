// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas
const takenSeats = [
    1, 5, 9, 10, 
    12, 13, 15, 16, 17, 
    27, 28, 
    32, 38, 39, 
    43, 44, 
    56, 
    67, 68,
    71, 72, 73, 78, 
    81, 
    94, 95, 96]

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        const table = document.getElementsByClassName("seats__table")[0]
        const tableRowElement = document.createElement("tr");
        tableRowElement.className = "tableRowElement"
        table.appendChild(tableRowElement);
        let fila = [];
        for (let j = 0; j < (N + 1); j++) {
            // Cavecera
            if( j === 0 ){
                const seatElement = document.createElement("th");
                seatElement.className = "row__header"
                tableRowElement.appendChild(seatElement);
                const headTextRow = document.createTextNode(`Fila ${ i + 1 }`);
                seatElement.appendChild(headTextRow);
            } else {
                // Nuevo asiento
                const seatElement = document.createElement("td");
                const isSeatTaken = takenSeats.find((seat) => seat === idContador);
                if (isSeatTaken){
                    seatElement.className = "row__seat--reserved"
                    fila.push({
                        id: idContador++,
                        estado: true // Estado inicial libre
                    });
                } else {
                    seatElement.className = "row__seat"
                    fila.push({
                        id: idContador++,
                        estado: false // Estado inicial libre
                    });
                }
                tableRowElement.appendChild(seatElement);
            }
        }
        butacas.push(fila);
    }
    return butacas;
}

// Inicializar la matriz
let butacas = setup();
let most_consecutive_seats_available_per_line = []

// Imprimir la matriz
// console.log(butacas);

function suggest () {
    const seatsInputAmmount = document.getElementById('inputAmountOfSeats')
    const seats_to_reserve = seatsInputAmmount.value
    possibleReservedSeats = []

    if (seats_to_reserve > N){
        return []
    }

    //create an array with amount of the most consecutive seats available per line
    butacas.forEach(line => {
        let most_consecutive_seats = 0
        let consecutive_seats = 0

        line.forEach(seat => {

            if (seat.estado === false){
                consecutive_seats++
                if (most_consecutive_seats < consecutive_seats){
                    most_consecutive_seats = consecutive_seats
                }
            } else {
                consecutive_seats = 0
            } 
            
        })

        most_consecutive_seats_available_per_line.push(most_consecutive_seats)

        most_consecutive_seats = 0
    });

    let maxAmmountOfSeatsInALine = 0

    for(var i=0;i<most_consecutive_seats_available_per_line.length;i++){
        if(maxAmmountOfSeatsInALine < most_consecutive_seats_available_per_line[i]){
            maxAmmountOfSeatsInALine = most_consecutive_seats_available_per_line[i];
        }
    }

    if(seats_to_reserve > maxAmmountOfSeatsInALine){
        seatsInputAmmount.value = seats_to_reserve-1
        if (document.getElementsByClassName('errorAmmountOfSeats').length === 0){
            let seats = document.getElementsByClassName('seats')
            let errorAmmountOfSeats = document.createElement('p')
            errorAmmountOfSeats.className = 'errorAmmountOfSeats form-label'
            errorAmmountOfSeats.appendChild(document.createTextNode('*Alcanzaste el número máximo de asientos por fila de acuerdo a la disponibilidad'))
            seats[0].appendChild(errorAmmountOfSeats)
        } 
        //console.log(seats.ch);
        
    } else {
        if (document.getElementsByClassName('errorAmmountOfSeats').length === 1){
            document.getElementsByClassName('errorAmmountOfSeats')[0].remove()
        } 
    }
    

    //Checks if there are enough consecutive seats on any line
    let are_there_enough_consecutive_seats = false
    for (let i = 0; i < most_consecutive_seats_available_per_line.length && are_there_enough_consecutive_seats === false; i++) {
        if (most_consecutive_seats_available_per_line[i] >= seats_to_reserve){
            are_there_enough_consecutive_seats = true
        }
    }

    if (!are_there_enough_consecutive_seats){
        return []
    }

    //Assign the seats on an available line
    for (let i = N - 1 ; i >= 0 && possibleReservedSeats.length < seats_to_reserve ; i--){
        if (most_consecutive_seats_available_per_line[i] >= seats_to_reserve) {
            for(let j = 0; j < N && possibleReservedSeats.length < seats_to_reserve ; j++){
                if(butacas[i][j].estado === false){
                    possibleReservedSeats.push(butacas[i][j].id)
                } else {
                    possibleReservedSeats = []
                }
            }
        }
    }

    const seats = document.querySelectorAll('.seats__table td')

    const freeSeats = []

    for (let i = 0; i < seats.length; i++){
        if (seats[i].className === 'row__seat' || seats[i].className === 'row__seat--suggested'){
            freeSeats.push({seatData:seats[i], id:(i+1)})
        }
    }

    freeSeats.forEach((seat) => {
        const isSuggested = possibleReservedSeats.indexOf(seat.id)
        if (isSuggested !== -1){
            seat.seatData.className = 'row__seat--suggested'
        } else {
            seat.seatData.className = 'row__seat'
        }
    })

    return possibleReservedSeats

}