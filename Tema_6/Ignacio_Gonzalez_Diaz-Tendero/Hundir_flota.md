### API del juego Hundir la Flota

En este ejercicio vamos a diseñar la API REST para la aplicación del juego "Hundir la Flota".

####Las operaciones que la API debe soportar son las siguientes:

- Crear una partida.
- Eliminar una partida.
- Modificar datos de una partida.
- Iniciar una partida.
- Finalizar una partida.
- Consultar todos los datos (jugadores asociados, barcos de cada jugador, disparos realizados, ganador...) de una
  partida.
- Añadir un barco a la cuadrícula de un jugador en una partida.
- Eliminar un barco de la cuadrícula de un jugador en una partida.
- Consultar todos los barcos de un jugador de una partida.
- Registrar un disparo de un jugador a otro en una partida.
- Crear un usuario.
- Obtener datos de un usuario.
- Eliminar un usuario.

#### Recursos identificados:

- Partida (games): Representa una partida entre dos jugadores.
- Barco (ships): Representa un barco en la cuadrícula de un jugador.
- Usuario (users): Representa un usuario registrado en la aplicación.

### API del juego Hundir la Flota

En este ejercicio vamos a diseñar la API REST para la aplicación del juego "Hundir la Flota".

####Las operaciones que la API debe soportar son las siguientes:

- Crear una partida.
- Eliminar una partida.
- Modificar datos de una partida.
- Iniciar una partida.
- Finalizar una partida.
- Consultar todos los datos (jugadores asociados, barcos de cada jugador, disparos realizados, ganador...) de una
  partida.
- Añadir un barco a la cuadrícula de un jugador en una partida.
- Eliminar un barco de la cuadrícula de un jugador en una partida.
- Consultar todos los barcos de un jugador de una partida.
- Registrar un disparo de un jugador a otro en una partida.
- Crear un usuario.
- Obtener datos de un usuario.
- Eliminar un usuario.

#### Recursos identificados:

- Partida (games): Representa una partida entre dos jugadores.
- Barco (ships): Representa un barco en la cuadrícula de un jugador.
- Usuario (users): Representa un usuario registrado en la aplicación.

| Método HTTP | URI                                | Cuerpo de la Petición                                                                          | Cuerpo de la Respuesta                                                                                                                  | Códigos de Respuesta                                                     |
|-------------|------------------------------------|------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| POST        | /games                             | {"player1_id": 123, "player2_id": 456}                                                         | {"game_id": 789, "player1_id": 123, "player2_id": 456}                                                                                  | 201 Created  400 Bad Request                                             |
| GET         | /games                             | N/A                                                                                            | {"games": [{"game_id": 789, "player1_id": 123, "player2_id": 456, "status": "In progress", "winner_id": null, "turn": "player1"}, ...]} | 200 OK                                                                   |
| DELETE      | /games/{game_id}                   | N/A                                                                                            | {"message": "Game deleted"}                                                                                                             | 200 OK  <br/>404 Not Found                                               |
| PATCH       | /games/{game_id}                   | {"status": "Pause"}                                                                            | {"game_id": 789, "status": "Pause"}                                                                                                     | 200 OK  <br/>400 Bad Request                                             |
| PATCH       | /games/{game_id}                   | {"status": "Finish", "winner_id": 123}                                                         | {"message": "Game finished", "winner_id": 123}                                                                                          | 200 OK  <br/>400 Bad Request <br/>404 Not Found   <br/> 500 Server Error |
| PATCH       | /games/{game_id}                   | {"status": "Start"}                                                                            | {"game_id": 789, "status": "In progress"}                                                                                               | 200 OK  <br/>400 Bad Request <br/>404 Not Found   <br/> 500 Server Error |
| GET         | /games/{game_id}                   | N/A                                                                                            | {"game_id": 789, "player1_id": 123, "player2_id": 456, "status": "In progress", "winner_id": null, "turn": "player1"}                   | 200 OK <br/> 404 Not Found                                               |
| GET         | /games/{game_id}/players           | N/A                                                                                            | {"players": [{"player_id": 123, "name": "Nacho"}, {"player_id": 456, "name": "Carlos"}]}                                                | 200 OK                                                                   |
| POST        | /games/{game_id}/ships             | {"player_id": 123, "ship_type": "carrier", "start": {"x": 1, "y": 1}, "end": {"x": 1, "y": 4}} | {"ship_id": 101, "player_id": 123, "ship_type": "carrier", "start": {"x": 1, "y": 1}, "end": {"x": 1, "y": 4}}                          | 201 Created 400 Bad Request                                              |
| DELETE      | /games/{game_id}/ships/{ship_id}   | N/A                                                                                            | {"message": "Ship deleted"}                                                                                                             | 200 OK  <br/>404 Not Found                                               |
| GET         | /games/{game_id}/ships/{player_id} | N/A                                                                                            | {"ships": [{"ship_id": 101, "player_id": 123, "ship_type": "carrier", "start": {"x": 1, "y": 1}, "end": {"x": 1, "y": 4}}, ...]}        | 200 OK                                                                   |
| POST        | /games/{game_id}/shoots            | {"player_id": 123, "target": {"x": 5, "y": 5}}                                                 | {"shoot_id": 201, "player_id": 123, "target": {"x": 5, "y": 5}, "result": "Hit"}                                                        | 201 Created  <br/>400 Bad Request                                        |
| POST        | /users                             | {"name": "Nacho", "email": "nacho@example.com"}                                                | {"user_id": 123, "name": "Nacho", "email": "nacho@example.com"}                                                                         | 201 Created <br/> 500 Server Error                                       |
| GET         | /users/{user_id}                   | N/A                                                                                            | {"user_id": 123, "name": "Nacho", "email": "nacho@example.com"}                                                                         | 200 OK <br/> 404 Not Found                                               |
| DELETE      | /users/{user_id}                   | N/A                                                                                            | {"message": "User deleted"}                                                                                                             | 200 OK  <br/>500 Server Error                                            |
