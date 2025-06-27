const N = 10;
const takenSeats = [];
const minReservedSeats = 25;
const maxReservedSeats = 30;
const totalSeats = 100;

const reservedSeatsCount = Math.floor(Math.random() * (maxReservedSeats - minReservedSeats + 1)) + minReservedSeats;

for (let i = 0; i < reservedSeatsCount; i++) {
    let randomSeat = Math.floor(Math.random() * totalSeats) + 1;
    if (!takenSeats.includes(randomSeat)) {
        takenSeats.push(randomSeat);
    } else {
        i--;
    }
}

takenSeats.sort((a, b) => a - b);

function setup() {
    let idCounter = 1;
    let seatsArray = [];

    for (let i = 0; i < N; i++) {
        const table = document.getElementsByClassName("seats__table")[0];
        const tableRowElement = document.createElement("tr");
        tableRowElement.className = "tableRowElement";
        table.appendChild(tableRowElement);
        let row = [];
        for (let j = 0; j < (N + 1); j++) {
            if (j === 0) {
                const seatElement = document.createElement("th");
                seatElement.className = "row__header";
                tableRowElement.appendChild(seatElement);
                const headTextRow = document.createTextNode(`Fila ${i + 1}`);
                seatElement.appendChild(headTextRow);
            } else {
                const seatElement = document.createElement("td");
                const isSeatTaken = takenSeats.find((seat) => seat === idCounter);
                if (isSeatTaken){
                    seatElement.className = "row__seat--reserved";
                    row.push({
                        id: idCounter++,
                        status: true // Initial status: occupied
                    });
                } else {
                    seatElement.className = "row__seat";
                    row.push({
                        id: idCounter++,
                        status: false // Initial status: available
                    });
                }
                tableRowElement.appendChild(seatElement);
            }
        }
        seatsArray.push(row);
    }
    return seatsArray;
}

let seatsArray = setup();
let mostConsecutiveSeatsAvailablePerLine = [];

function suggest () {
    const seatsInputAmount = document.getElementById('inputAmountOfSeats');
    const seatsToReserve = seatsInputAmount.value;
    let possibleReservedSeats = [];

    if (seatsToReserve > N) {
        return [];
    }

    seatsArray.forEach(line => {
        let mostConsecutiveSeats = 0;
        let consecutiveSeats = 0;

        line.forEach(seat => {
            if (seat.status === false) {
                consecutiveSeats++;
                if (mostConsecutiveSeats < consecutiveSeats) {
                    mostConsecutiveSeats = consecutiveSeats;
                }
            } else {
                consecutiveSeats = 0;
            } 
        });

        mostConsecutiveSeatsAvailablePerLine.push(mostConsecutiveSeats);

        mostConsecutiveSeats = 0;
    });

    let maxAmountOfSeatsInALine = 0;

    for(let i = 0; i < mostConsecutiveSeatsAvailablePerLine.length; i++) {
        if(maxAmountOfSeatsInALine < mostConsecutiveSeatsAvailablePerLine[i]) {
            maxAmountOfSeatsInALine = mostConsecutiveSeatsAvailablePerLine[i];
        }
    }

    if(seatsToReserve > maxAmountOfSeatsInALine) {
        seatsInputAmount.value = seatsToReserve - 1;
        if (document.getElementsByClassName('errorAmmountOfSeats').length === 0) {
            let seats = document.getElementsByClassName('seats');
            let errorAmmountOfSeats = document.createElement('p');
            errorAmmountOfSeats.className = 'errorAmmountOfSeats form-label';
            errorAmmountOfSeats.appendChild(document.createTextNode('*Ha alcanzado el número máximo de asientos por fila según disponibilidad'));
            seats[0].appendChild(errorAmmountOfSeats);
        } 
    } else {
        if (document.getElementsByClassName('errorAmmountOfSeats').length === 1) {
            document.getElementsByClassName('errorAmmountOfSeats')[0].remove();
        } 
    }

    let areThereEnoughConsecutiveSeats = false;
    for (let i = 0; i < mostConsecutiveSeatsAvailablePerLine.length && areThereEnoughConsecutiveSeats === false; i++) {
        if (mostConsecutiveSeatsAvailablePerLine[i] >= seatsToReserve) {
            areThereEnoughConsecutiveSeats = true;
        }
    }

    if (!areThereEnoughConsecutiveSeats) {
        return [];
    }

    for (let i = N - 1 ; i >= 0 && possibleReservedSeats.length < seatsToReserve ; i--) {
        if (mostConsecutiveSeatsAvailablePerLine[i] >= seatsToReserve) {
            for (let j = 0; j < N && possibleReservedSeats.length < seatsToReserve ; j++) {
                if(seatsArray[i][j].status === false) {
                    possibleReservedSeats.push(seatsArray[i][j].id);
                } else {
                    possibleReservedSeats = [];
                }
            }
        }
    }

    const seats = document.querySelectorAll('.seats__table td');
    const freeSeats = [];

    for (let i = 0; i < seats.length; i++) {
        if (seats[i].className === 'row__seat' || seats[i].className === 'row__seat--suggested') {
            freeSeats.push({seatData: seats[i], id: (i + 1)});
        }
    }

    freeSeats.forEach((seat) => {
        const isSuggested = possibleReservedSeats.indexOf(seat.id);
        if (isSuggested !== -1) {
            seat.seatData.className = 'row__seat--suggested';
        } else {
            seat.seatData.className = 'row__seat';
        }
    });

    return possibleReservedSeats;
}
