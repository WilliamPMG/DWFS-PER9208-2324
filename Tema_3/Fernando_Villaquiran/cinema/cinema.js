//Siguiendo mi diseño de sala
const rows = 5
const columns = 16

function setup() {
    let idContador = 1; 
    let butacas = [];

    for (let i = 0; i < rows; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < columns; j++) {
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

function suggest(numberPositions) {
  
  if (numberPositions > rows) {
    return []
  }
  
  let positions = new Set()
  let consecutiveCount = 0;

  for (let x = rows - 1; x >= 0; x--) {
    for (let y = columns - 1; y >= 0; y--) {
      if (!butacas[x][y].estado) {
        consecutiveCount++;
        positions.add(butacas[x][y].id);
        if (consecutiveCount === numberPositions) {
          console.log(positions)
          return positions;
        }
      } else {
        consecutiveCount = 0;
        positions.clear();
      }
    }
  }
  
  return []
  
}

// Inicializar la matriz
let butacas = setup();

//datos de prueba
butacas[4][2].estado = true
butacas[4][9].estado = true
butacas[4][12].estado = true
butacas[3][15].estado = true
butacas[3][10].estado = true

// Imprimir la matriz
//console.log(butacas);

//let assigned = suggest(7)
// Imprimir Asientos seleccionados
//console.log(assigned)