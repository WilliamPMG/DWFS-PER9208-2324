

function initializeFilledSeats(seats,coords){
    /* rellena algunos asientos segun las cordenadas definidas*/
    
    [x1,y1] = coords[0];
    [x2,y2] = coords[1];
    let auxSeat = seats[0].row.length;
    
    for (let i = x1-1; i <= x2-1; i++) {
        let auxSeat = 0;
        for (let j = y1-1; j <= y2-1; j++) {
            seats[i].row[j].state = true;
        }
        seats[i].maxContinuosSeats -= y2-y1+1;  
    }

    return seats
}

// Función para inicializar la matriz de seats
function setup() {

    const N = 10; // Número de filas
    const M = 12; // Número de columnas

    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let seats = [];
    let maxContinuosSeats = M;

    /* puesto llenos inicialmente x1 y1  x2 y2*/
    const fillInit1 = [[1,1],[1,3]];
    const fillInit2 = [[3,3],[3,8]];
    const fillInit3 = [[9,2],[9,6]];
    const fillInit4 = [[10,8],[10,12]];
    const fillInit5 = [[10,1],[10,2]];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let row = [];
        for (let j = 0; j < M; j++) {

            seat = {
                id: idContador++,
                state: false // state inicial libre
            }
            // Nuevo asiento
            row.push(
                seat
            );
        }
        seats.push({
            maxContinuosSeats,
            row
        });
    }

    seats = initializeFilledSeats(seats,fillInit1);
    seats = initializeFilledSeats(seats,fillInit2);
    seats = initializeFilledSeats(seats,fillInit3);
    seats = initializeFilledSeats(seats,fillInit4);
    seats = initializeFilledSeats(seats,fillInit5);

    return seats;
}

function validSelection(subSeats){
    //devuleve si todos los elementos state del array son true
    let valid = true;
    for (let i = 0; i < subSeats.length && valid; i++) {
        const state = subSeats[i].state
        if (state) {
            valid = false;
        }
    }

    return valid;

}

function suggest(nseats){
    // definir los asientos
    let seats = setup();
    let suggest = [];
    const rows = seats.length - 1;
    const columns = seats[0].row.length - 1;
    
    let assigned = false;
    //primer y ultimo asiento
    let x1_suggest = 0;
    let x2_suggest = 0;
    let row_suggested = 0;

    for(let row = rows; row >=0 && !assigned; row--) {
        if (nseats <= seats[row].maxContinuosSeats){
            for (let j = 0; j <= columns - nseats + 1 && !assigned; j++) {
                //propuestas iterativas segun sillas pedidas
                let subSeats = seats[row].row.slice(j, j + nseats);
                assigned = validSelection(subSeats);
                if (assigned) {
                    x1_suggest = j;
                    x2_suggest = j + nseats;
                    row_suggested = row;
                }
            }
        }
        
    }

    if(assigned){
        for (let i = x1_suggest; i < x2_suggest; i++) {
            const seat_id = seats[row_suggested].row[i].id;
            suggest.push(seat_id); 
        }
    }

    return suggest
}

function print_seats(seats) {
    // print butacas
    for (let i = 0; i < seats.length; i++) {
    process.stdout.write((i+1).toString());
    process.stdout.write(' ');
        for (let j = 0; j < seats[i].row.length; j++) {
            if (seats[i].row[j].state) {
                process.stdout.write(seats[i].row[j].id.toString());
            }else{
                process.stdout.write('X');
            }
            process.stdout.write(' ')
        }
    console.log('\n') 
    } 
}


const seats = suggest(3);
console.log(seats)


