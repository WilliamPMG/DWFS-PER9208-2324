const input = document.getElementById('txtInput');

const btnReservation = document.querySelector('#btnReservation');

btnReservation.addEventListener('click', () => {
    let [fila, columna] = input.value.split(',');

    fila = fila.trim();
    columna = columna.trim().toUpperCase();

    const seats = document.getElementsByClassName('seats__seat');

    for (let i = 0; i < seats.length; i++) {
        const seat = seats[i];
        const row = seat.getAttribute('data-row');
        const column = seat.getAttribute('data-column');

        if (row == fila && column == columna) {
            if (seat.classList.contains('--occupied')) {
                alert(`El asiento ${row}, ${column} ya está ocupado`);
            } else if (confirm(`¿Reservar asiento: ${row}, ${column}?`)) {
                seat.classList.add('--occupied');
            }
            input.value = '';
        }
    }
});