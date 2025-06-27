const N_FILAS = 5;
const N_COLUMNAS = 10;
function setup() {
  let idContador = 1;
  let butacas = [];

  for (let i = 0; i < N_FILAS; i++) {
    let fila = [];
    for (let j = 0; j < N_COLUMNAS; j++) {
      fila.push({
        id: idContador++,
        estado: false
      });
    }
    butacas.push(fila);
  }
  let resultSetup = loadOccupied(butacas);
  return resultSetup;
}

function suggest(numAsientos) {
  let sugeridos = [];
  let butacas = setup();
  if (numAsientos == 0 || isNaN(numAsientos) || numAsientos == null) {
    butacas = resetButacas(butacas);
    return [];
  }
  sugeridos = findSuggestedSeats(butacas, numAsientos);
  resetButacas(butacas);
  sugeridos.slice(0, numAsientos).forEach((item) => {
    document.getElementById(parseInt(item)).setAttribute('type', 'occupied');
  });
  return sugeridos.slice(0, numAsientos);
}

function findSuggestedSeats(butacas, numAsientos) {
  let sugeridos = [];
  for (const fila of butacas) {
    let contadorAsientosLibres = 0;
    let inicioSugeridos = null;
    for (let i = 0; i < fila.length; i++) {
      const asiento = fila[i];
      if (!asiento.estado) {
        contadorAsientosLibres++;
        if (contadorAsientosLibres === parseInt(numAsientos)) {
          inicioSugeridos = i - parseInt(numAsientos) + 1;
          for (let j = inicioSugeridos; j < inicioSugeridos + parseInt(numAsientos); j++) {
            sugeridos.push(fila[j].id);
          }
        }
      } else {
        contadorAsientosLibres = 0;
        inicioSugeridos = null;
      }
    }
  }
  return sugeridos;
}
 
function resetButacas(arrayButacas) {
  for (let i = 0; i < arrayButacas.length; i++) {
    for (let j = 0; j < arrayButacas[i].length; j++) {
      arrayButacas[i][j].estado = false;
      if (document.getElementById(arrayButacas[i][j].id).getAttribute('type') !== 'notAvailable') {
        document.getElementById(arrayButacas[i][j].id).setAttribute('type', 'available');
      }
    }
  }
  return arrayButacas
}

function loadOccupied(arrayButacas) {
  arrayButacas.forEach(element => {
    element.forEach(seat => {
      const seatElement = document.getElementById(seat.id);
      if (seatElement && seatElement.hasAttribute('type')) {
        const seatType = seatElement.getAttribute('type');
        if (seatType === 'notAvailable') {
          seat.estado = true;
        }
      }
    });
  });
  return arrayButacas;
}

document.addEventListener("DOMContentLoaded", function () {
  var volverCartelera = document.getElementById("registro");
  volverCartelera.addEventListener("click", function (event) {
    event.preventDefault();

    window.location.replace('registro.html');
  });
});