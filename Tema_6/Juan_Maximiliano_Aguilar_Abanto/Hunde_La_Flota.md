# API del juego hunde la flota



**Recursos identificados**:

- Partida(games): Representa una partida
- Tablero(board): Tablero donde se juega la partida
- Jugador(players): Representa a un jugador
- Barco(ships): Representa un barco
- Flota(fleets): Conjunto de barcos
- Disparo(shots): Representa un disparo


**Relaciones**:

- En una partida hay varios jugadores
- Una partida se realiza en un tablero
- Un jugador tiene una flota
- Una flota tiene varios barcos
- Un disparo es realizado por un jugador en una partida


**Atributos de los recursos**:

- **Partida**
  - Id: Un identificador único para la partida.
  - Jugadores: Una lista de jugadores que participan en la partida.
  - Estado: El estado actual de la partida (por ejemplo, en curso, finalizada, etc.).
  - Tablero: El tablero de juego.

- **Tablero** 
  - Id : Un identificador único para tablero.
  - Dimensiones (Dimensions): El tamaño del tablero, representado por el número de filas y columnas.


- **Jugador**
  - Id : Un identificador único de un jugador.
  - Nombre: El nombre del jugador.
  - Flota: La flota de barcos que el jugador tiene en la partida.
  - Puntuación: La puntuación acumulada del jugador en la partida.


- **Barco**
  - Id : Un identificador único de un barco.
  - Tipo: El tipo de barco (por ejemplo, portaaviones, acorazado, submarino, etc.).
  - Posición: La posición en el tablero donde se encuentra el barco.
  - Orientación: La orientación del barco en el tablero (horizontal o vertical).
  - Estado: Indica si el barco está intacto, tocado o hundido.
  - Jugador: Jugardor al que esta relacionado
  - Partida: Partida asociada

- **Flota**
  - Id : Un identificador único de flota.
  - Barcos: Una lista de barcos que componen la flota.
  - Estado: Indica el estado general de la flota ("Ejemplo: devastada, activa").
  - Número de Barcos: La cantidad total de barcos en la flota.

- **Disparo**

  - Id : Un identificador único de disparo.
  - Coordenadas: Las coordenadas en el tablero donde se realizó el disparo.
  - Resultado: El resultado del disparo (por ejemplo, tocado, hundido, agua).
  - JugadorAtacante: El jugador que realizó el disparo.
  - JugadorVictima: El jugador que recibe el disparo.
  - Hora: La hora en la que se realizó el disparo.
  - Partida: Partida asociada



| Método HTTP | URI                             | Query Params  | Cuerpo de la Petición                    | Cuerpo de la Respuesta                                               | Códigos de Respuesta                                    |
|-------------|---------------------------------|---------------|------------------------------------------|-----------------------------------------------------------------------|---------------------------------------------------------|
| POST        | /api/v1/games                | N/A           | `{"jugadores": [1,2], "estado": "iniciado","tablero": 1}`                    | `{"id": 1,"jugadores": [1,2], "estado": "iniciado","tablero": 1}`                                    | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE        | /api/v1/games/{gameId}                | N/A           | N/A                    | `{"id": 1,"jugadores": [1,2], "estado": "iniciado","tablero": 1}`                                    | 200 Created<br/>404 Not found<br/>500 Internal Server Error |
| PUT        | /api/v1/games/{gameId}                | N/A           | `{"jugadores": [1,2,3], "estado": "en curso","tablero": 1}`                    | `{"id": 1,"jugadores": [1,2,3], "estado": "en curso","tablero": 1}`                                    | 200 Ok<br/>400 Bad Request<br/>500 Internal Server Error |
| PATCH        | /api/v1/games/{gameId}                | N/A           | `{"estado": "iniciada"}`                    | `{"id": 1,"jugadores": [1,2,3], "estado": "iniciada","tablero": 1}`                                    | 200 Ok<br/>400 Bad Request<br/>500 Internal Server Error |
| GET        | /api/v1/games/{gameId}                | N/A           | N/A                    | `{"jugadores": [1,2,3],"ganador":3, "barcos": [ { "jugador": 1,"barcos": [1,2,3 ]},{"jugador": 2,"barcos": [ 3,4]},{"jugador": 3,"barcos": [5,6 ]}], "disparos": [1,2,3,4]}`                                    | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
| POST        | /api/v1/ships                | N/A           | `{"partida": 1, "jugador": 1,"flota": 2, "posicion": "A7,A8,A9,A10"}`                   | `{"barcoId": 1,"partida": 1, "jugador": 1, "flota": 2, "posicion": "A7,A8,A9,A10"}`                                    | 201 OK<br/>404 Not Found<br/>500 Internal Server Error |
| DELETE      | /api/v1/games/{gameId}/ships/{shipId}                | N/A           | N/A                   | `{"barcoId": 1,"jugador": 1,"partida": 1, "flota": 2, "posicion": "A7,A8,A9,A10"}`                                    | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
| GET        | /api/v1/players/{playerId}/ships                | N/A           | N/A                    | `{"barcos": [1,2,3]}`                                    | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
| POST        | /api/v1/shots                | N/A           | `{ "gameId": 1,"coordenadas": "A1", "resultado": "tocado","jugadorAtacante": 1, "jugadorVictima" : 2, "hora": "10:10:20"}`                    | `{"id": 1,"gameId": 1,"coordenadas": "A1", "resultado": "tocado","jugadorAtacante": 1, "jugadorVictima": 2, "hora": "10:10:20"}`                                    | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /api/v1/players                | N/A           | `{"nombre": "Peter", "flota": 1}`                    | `{"id": 1, "nombre": "Peter","flota": 1, "Puntuacion": 0}`                                    | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET        | /api/v1/players/{playerId}                | N/A           | N/A                    | `{"id": 1, "nombre": "Peter","flota": 1, "Puntuacion": 0}`                                    | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
| DELETE        | /api/v1/players/{playerId}                | N/A           | N/A                    | `{"id": 1, "nombre": "Peter","flota": 1, "Puntuacion": 0}`                                    | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |