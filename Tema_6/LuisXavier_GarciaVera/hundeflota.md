## API del juego hunde la flota
1. **Usuario**: Crear un usuario, Obtener datos de un usuario, Eliminar un usuario.
2. **Partida**: Crear una partida, Eliminar una partida, Modificar datos de una partida.
3. **Estado Partida**: Iniciar una partida, Finalizar una partida.
4. **Barco**: Añadir un barco a la cuadrícula de un jugador en una partida, Eliminar un barco de la cuadrícula de un jugador en una partida, Consultar todos los barcos de un jugador de una partida.
5. **Ataques**: Registrar un disparo de un jugador a otro en una partida.
6. **Consulta**:  Consultar todos los datos (jugadores asociados, barcos de cada jugador, disparos realizados, ganador) de una partida.
## Detalle de los Endpoints

| Método HTTP | URI                           | Query Params | Request Body                      | Response Body                                 | Códigos HTTP de respuesta                   |
|-------------|-------------------------------|--------------|----------------------------------|-----------------------------------------------|---------------------------------------------|
| POST        | /api/v1/usuarios                    | -            | `{"nombre": "lxgv12", "email": "lxgv12@gmail.com"}`          | `{"idUsuario": "8B3AC27B-355B-404F-AD4E-12232257A3E0", {"nombre": "lxgv12", "email": "lxgv12@gmail.com"}}` | 201 Created, 400 Bad Request, 500 Internal Server Error          |
| GET         | /api/v1/usuarios/{id}        | -            | -                                                            | `{"idUsuario": "8B3AC27B-355B-404F-AD4E-12232257A3E0", {"nombre": "lxgv12", "email": "lxgv12@gmail.com"}}` | 200 OK, 404 Not Found, 500 Internal Server Error                 |
| DELETE      | /api/v1/usuarios/{id}        | -            | -                                                            | `{"message": "Usuario eliminado"}`                                | 200 OK, 404 Not Found, 500 Internal Server Error                 |
| POST| /api/v1/partidas | - | `{"player1": "lxgv12", "player2": "cvgv28"}`              | `{"idPartida": "FDE17720-0555-47FB-8AEE-D5DD54C26D11", "player1": "lxgv12", "player2": "cvgv28"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |
| DELETE| /api/v1/partidas/{id}| -| - | `{"message": "Partida eliminada"}`                                | 200 OK, 404 Not Found, 500 Internal Server Error |
| PATCH       | /api/partidas/{id}| -| `"player2": "cvgv29"` | `{"id": "FDE17720-0555-47FB-8AEE-D5DD54C26D11", "player1": "lxgv12", "player2": "cvgv29"}`| 200 OK, 404 Not Found, 500 Internal Server Error |
| PATCH       | /api/partidas/{id}| -          | `"estado": "finalizada/iniciada"` | `{"idPartida": "FDE17720-0555-47FB-8AEE-D5DD54C26D11", "player1": "lxgv12", "player2": "cvgv29"}`| 200 OK, 404 Not Found, 500 Internal Server Error |
| GET | /partidas| jugadores asociados, barcos de cada jugador, disparos realizados, ganador | -| `{"id": "FDE17720-0555-47FB-8AEE-D5DD54C26D11", "player1": "lxgv12", "player2": "cvgv28"}, "ganador": "lxgv12", "barcos": [...], "disparos": [...]`| 200 OK<br/>400 Bad Request<br/>500 Internal Server Error   |
| POST | /api/v1/disparos | -| `{"idUsuario": "8B3AC27B-355B-404F-AD4E-12232257A3E0", "posicion": [...]`| `{"idUsuario": "8B3AC27B-355B-404F-AD4E-12232257A3E0", "posicion": [...]` | 201 Created, 400 Bad Request, 500 Internal Server Error|
|POST | /api/v1/barcos | -| `{"id": "8B3AC27B-355B-404F-AD4E-12232257A3E0", "posicion": [...]`| `{"id": "8B3AC27B-355B-404F-AD4E-12232257A3E0", "posicion": [...]` | 201 Created, 400 Bad Request, 500 Internal Server Error |
| DELETE      | /api/v1/barcos/{id} | - | - | `{"message": "Barco eliminado"}`           | 200 OK, 404 Not Found, 500 Internal Server Error|
| GET         | /api/v1/barcos/{idUsuario} | -| `{"idUsuario": "8B3AC27B-355B-404F-AD4E-12232257A3E0",]`| ``{"barco":  [...], "posicion": [...], "disparos": [...]` | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error |

