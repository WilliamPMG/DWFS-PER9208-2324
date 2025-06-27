# API del juego hunde la flota

**Recursos identificados:**
- Usuarios (usuarios)
- Partidas (partidas)
- Barcos (barcos)
- Disparos (disparos)

| Método HTTP | URI            | Query Params | Request Body | Response Body    | Códigos HTTP de respuesta |
|-------------|----------------|--------------|--------------|------------------|-------------------------|
| POST         | /api/users | N/A | ``{"nombre": "usuario_1", "email": "usuario@mail.com"}`` | ``{"usuario_id": 1}`` | 201, 400 |
| GET         | /api/users/{usuario_id} | N/A | N/A | ``{"usuario_id": 1, "nombre": "usuario_1", "email": "usuario@mail.com"}`` | 200, 404 |
| DELETE         | /api/users/{usuario_id} | N/A | N/A | N/A | 204, 404 |
| POST         | /api/partidas | N/A | ``{"usuario_id_1": 1, "usuario_id_2": 2, "estado": "sin estado"}`` | ``{"partida_id": 1}`` | 201, 400 |
| DELETE         | /api/partidas/{partida_id} | N/A | N/A | N/A | 204, 404 |
| PUT         | /api/partidas/{partida_id} | N/A | ``{"jugador_1": 1, "jugador_2": 2}`` | N/A | 200, 400, 404 |
| PATCH         | /api/partidas/{partida_id} | N/A | ``{"estado": "iniciar"}`` | N/A | 200, 400, 404 |
| PATCH         | /api/partidas/{partida_id} | N/A | ``{"estado": "finalizar"}`` | N/A | 200, 400, 404 |
| GET         | /api/partidas/{partida_id} | N/A | N/A | ``{"jugador_1": 1, "jugador_2": 2, "ganador_id": 1, "estado": "finalizar", "barcos": [], "tiros": []}`` | 200, 404 |
| POST         | /api/partidas/{partida_id}/barcos | N/A | ``{"jugador_id": 1, "tipo_barco": "barco_4_cuadros", "posicion": []}`` | ``{"barco_id": 1}`` | 200, 400, 404 |
| DELETE         | /api/partidas/{partida_id}/barcos/{barco_id} | N/A | N/A | N/A | 204, 404 |
| GET         | /api/partidas/{partida_id}/jugadores/{jugador_id}/barcos | N/A | N/A | ``{"barcos": []}`` | 200, 404 |
| POST         | /api/partidas/{partida_id}/disparos | N/A | ``{"posicion": []}`` | N/A | 201, 400, 404 |
