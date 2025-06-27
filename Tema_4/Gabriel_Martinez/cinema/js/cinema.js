const ROWS = 5; // Seat row quantity
const COLUMNS = 12; // Seat column quantity


function Seat(id, state, selectCallback, unselectCallback){

    this.id = id;
    this.state = state;
    this.selected = false
    this.selectCallback = selectCallback
    this.unselectCallback = unselectCallback

    this.select = function(){
        if (this.selectCallback(this)) {
            this.selected = true
            this.div.className = 'row__seat--selected'
        }
    }

    this.unselect = function(){
        this.unselectCallback(this);
        this.selected = false
        this.div.className = 'row__seat'
    }

    this.onClick = function(){
        if (!this.selected){
            this.select()
        }
        else{
            this.unselect()
        }
    }

    this.createSeatDiv = function(){
        let divSeat = document.createElement('div')
        divSeat.id = this.id
        divSeat.className = !this.state ? 'row__seat' : 'row__seat--occupied'
        let divSeatFront = document.createElement('div')
        divSeatFront.className = 'seat__front'
        let divSeatLeft = document.createElement('div')
        divSeatLeft.className = 'seat__left-side'
        let divSeatCenter = document.createElement('div')
        divSeatCenter.className = 'seat__center'
        let divSeatRight = document.createElement('div')
        divSeatRight.className = 'seat__right-side'
        divSeatFront.appendChild(divSeatLeft)
        divSeatFront.appendChild(divSeatCenter)
        divSeatFront.appendChild(divSeatRight)
        let divSeatBack = document.createElement('div')
        divSeatBack.className = 'seat__back'
        divSeat.appendChild(divSeatFront)
        divSeat.appendChild(divSeatBack)
        divSeat.onclick = () => this.onClick()
        return divSeat
    }

    this.div = this.createSeatDiv();

}

let SeatManager = {

    containerSelector: '.cinema__seats',
    seatQuantityInputSelector: '#seat-qty',
    seats: [],
    selectedSeats: [],
    requiredQuantity: 0,

    initialize: function(){
        this.initializeSeats()
        let qtyInput = document.querySelector(this.seatQuantityInputSelector);
        // Add input event listener
        qtyInput.addEventListener('input', (event) => this.onRequiredChange(event.target.value))
        this.addSeatsToDOM();
    },

    onRequiredChange: function(qty){
        this.requiredQuantity = Number(qty);
        this.unselectAllSeats()
        let suggestedSeats = this.suggest(this.requiredQuantity)
        suggestedSeats.forEach(seat => seat.select())
    },

    initializeSeats: function(){
        let idCounter = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)

        for (let i = 0; i < ROWS; i++) {
            // Nueva fila
            let row = [];
            for (let j = 0; j < COLUMNS; j++) {
                // Nuevo asiento
                row.push( new Seat(
                    idCounter++,
                    Math.random() > 0.60,
                    (seat) => this.onSelect(seat),
                    (seat) => this.onUnselect(seat))
                );
            }
            this.seats.push(row);
        }
    },

    onSelect: function(seat){
        if (this.selectedSeats.length < this.requiredQuantity){
            this.selectedSeats.push(seat);
            return true;
        }
        return false;
    },

    onUnselect: function(seat){
        this.selectedSeats = this.selectedSeats.filter(item => item !== seat);
    },

    addSeatsToDOM: function(){
        let divSeats = document.querySelector(this.containerSelector);
        this.seats.forEach((seatRow, i) => {
            let divRow = document.createElement('div')
            divRow.className = 'seats__row'
            let divRowId = document.createElement('div')
            divRowId.className = 'row__id'
            divRowId.innerHTML = String.fromCharCode(65 + i)
            divRow.appendChild(divRowId)
            seatRow.forEach( (seat) => {
                divRow.appendChild(seat.div)
            })
            divRow.appendChild(divRowId)
            divSeats.appendChild(divRow)
        })
    },

    unselectAllSeats: function(){
        this.selectedSeats.forEach(seat => seat.unselect())
    },

    suggest: function(qty){
        let seatSuggestion = [];
        for (let i = this.seats.length - 1; i >= 0 && seatSuggestion.length < qty; i--){
            seatSuggestion = []
            for (let j = 0; j < this.seats[i].length && seatSuggestion.length < qty; j++){
                if (!this.seats[i][j].state){
                    seatSuggestion.push(this.seats[i][j])
                }
                else{
                    seatSuggestion = []
                }
            }
        }
        return seatSuggestion.length === qty ? seatSuggestion : [] ;
    }
}


window.onload = function(){
    SeatManager.initialize();
}
