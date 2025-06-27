# API del Juego Hundir la Flota
## Recursos Identificados
1. **partidas**: Representa una partida entre dos jugadores.
2. **usuarios**: Representa un usuario registrado en el juego.
3. **barcos**: Representa un barco dentro de una partida.
4. **disparos**: Representa un disparo realizado por un jugador a otro en una partida.

## Detalle de los Endpoints

| Método HTTP | URI                                 | Query Params | Request Body                                                 | Response Body                                                     | Códigos HTTP de respuesta                                        |
|-------------|-------------------------------------|--------------|-------------------------------------------------------------|-------------------------------------------------------------------|------------------------------------------------------------------|
| POST        | /api/v1/usuarios                    | -            | `{"nombre": "jesus", "email": "jesus@example.com"}`          | `{"idUsuario": "123", "nombre": "jesus", "email": "jesus@example.com"}` | 201 Created, 400 Bad Request, 500 Internal Server Error          |
| GET         | /api/v1/usuarios/{idUsuario}        | -            | -                                                            | `{"idUsuario": "123", "nombre": "jesus", "email": "jesus@example.com"}` | 200 OK, 404 Not Found, 500 Internal Server Error                 |
| DELETE      | /api/v1/usuarios/{idUsuario}        | -            | -                                                            | `{"message": "Usuario eliminado"}`                                | 200 OK, 404 Not Found, 500 Internal Server Error                 |
| POST        | /api/v1/partidas                    | -            | `{"jugador1": "jesus", "jugador2": "invitado"}`              | `{"idPartida": "456", "jugador1": "jesus", "jugador2": "invitado"}` | 201 Created, 400 Bad Request, 500 Internal Server Error          |
| GET         | /api/v1/partidas/{idPartida}        | -            | -                                                            | `{"idPartida": "456", "jugador1": "jesus", "jugador2": "invitado", "estado": "en curso", "barcos": [...], "disparos": [...], "ganador": null}` | 200 OK, 404 Not Found, 500 Internal Server Error |
| PATCH       | /api/v1/partidas/{idPartida}        | -            | `{"estado": "finalizada", "ganador": "jesus"}`               | `{"idPartida": "456", "estado": "finalizada", "ganador": "jesus"}` | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
| DELETE      | /api/v1/partidas/{idPartida}        | -            | -                                                            | `{"message": "Partida eliminada"}`                                | 200 OK, 404 Not Found, 500 Internal Server Error                 |
| POST        | /api/v1/partidas/{idPartida}/barcos | -            | `{"jugador": "jesus", "tipo": "crucero", "posicion": {"x": 1, "y": 1}, "orientacion": "horizontal"}` | `{"idBarco": "789", "jugador": "jesus", "tipo": "crucero", "posicion": {"x": 1, "y": 1}, "orientacion": "horizontal"}` | 201 Created, 400 Bad Request, 500 Internal Server Error          |
| GET         | /api/v1/partidas/{idPartida}/barcos | `jugador`    | -                                                            | `{"barcos": [{"idBarco": "789", "jugador": "jesus", "tipo": "crucero", "posicion": {"x": 1, "y": 1}, "orientacion": "horizontal"}]}` | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
| DELETE      | /api/v1/partidas/{idPartida}/barcos/{idBarco} | - | -                                                            | `{"message": "Barco eliminado"}`                                  | 200 OK, 404 Not Found, 500 Internal Server Error                 |
| POST        | /api/v1/partidas/{idPartida}/disparos | -          | `{"jugador": "jesus", "posicion": {"x": 5, "y": 5}}`         | `{"idDisparo": "012", "jugador": "jesus", "posicion": {"x": 5, "y": 5}, "resultado": "agua"}` | 201 Created, 400 Bad Request, 500 Internal Server Error          |
| GET         | /api/v1/partidas/{idPartida}/disparos | `jugador`  | -                                                            | `{"disparos": [{"idDisparo": "012", "jugador": "jesus", "posicion": {"x": 5, "y": 5}, "resultado": "agua"}]}` | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
