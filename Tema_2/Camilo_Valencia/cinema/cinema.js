// Definir el tamaño de la matriz de butacas
const N = 4; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
  let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
  let butacas = [];

  for (let i = 0; i < N; i++) {
    // Nueva fila
    let fila = [];
    for (let j = 0; j < N; j++) {
      // Nuevo asiento
      fila.push({
        id: idContador++,
        estado: false, // Estado inicial libre
      });
    }
    butacas.push(fila);
  }
  return butacas;
}

const suggest = (numSeats) => {
  const numberofSeats = new Set();
  if (numSeats <= N) {
    let consecutiveSeats = 0;
    const rows = butacas.slice().reverse();
    for (let i = 0; i < rows.length && numberofSeats.size < numSeats; i++) {
      const row = rows[i];
      for (let j = 0;  j < row.length && numberofSeats.size < numSeats && j <= consecutiveSeats; j++) {
        const seat = row[j];
        if (!seat.estado) {
          consecutiveSeats++;
          numberofSeats.add(seat.id);
        } else {
          consecutiveSeats = 0;
          numberofSeats.clear();
        }
      }
    }
  }
  return numberofSeats;
};

// Inicializar la matriz
let butacas = setup();

butacas[3][0].estado = true;
butacas[3][1].estado = true;
butacas[3][2].estado = false;
butacas[3][3].estado = true;
// Imprimir la matriz
console.log(butacas);



console.log(suggest(3));
