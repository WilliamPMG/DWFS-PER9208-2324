# API de un sistema de reserva de butacas de cine

**Recursos identificados:**
- Películas
- Salas
- Usuarios
- Reservas
- Registrar Pago


| Método HTTP | URI            | Query Params | Request Body | Response Body    | Códigos HTTP de respuesta |
|-------------|----------------|--------------|--------------|------------------|-------------------------|
| POST        | /api/movies    | N/A          | ``{"title": "El código enigma", "description": "Durante la Segunda Guerra Mundial, un matemático lidera un equipo de criptógrafos que intenta descifrar el inquebrantable código enigma de Alemania.",  "gender": "Drama", "film director": "Morten Tyldum", "duration": 113, "actors": ["Benedict Cumberbatch", "Keira Knightley", "Matthew Goode"], "idioma": "Inglés"}`` | ``{"movieId": 1}`` | 201, 400, 500 |
| PUT        | /api/movies/{movieId}   | N/A          | ``{"title": "El código enigma", "description": "Durante la Segunda Guerra Mundial, un matemático lidera un equipo de criptógrafos que intenta descifrar el inquebrantable código enigma de Alemania.",  "gender": "Drama", "film director": "Morten Tyldum", "duration": 113, "actors": ["Benedict Cumberbatch", "Keira Knightley", "Matthew Goode"], "idioma": "Inglés"}`` | N/A | 200, 400, 404, 500 |
| DELETE        | /api/movies/{movieId}    | N/A          | N/A | N/A | 204, 404, 500 |
| POST        | /api/rooms    | N/A          | ``{"name": "Sala General","capacity": 100, "type": "2D", "films": [1, 2], "schedules": [1, 3, 4], "price": 20}`` | ``{"movieId": 123}`` | 201, 400, 500 |
| PATCH        | /api/rooms/{roomId}    | N/A          | ``{"capacity": 90}`` | N/A | 200, 400, 404, 500 |
| DELETE        | /api/rooms/{roomId}    | N/A          | N/A | N/A | 204, 404, 500 |
| POST        | /api/users    | N/A          | ``{"name": "Juan", "last name": "Pérez", "email": "xxxx@xxxx.com"}`` | ``{"userId": 1}`` | 201, 400, 500 |
| PATCH        | /api/users/{userId}    | N/A          | ``{"name": "Sebastian"}`` | N/A | 200, 400, 404, 500 |
| DELETE        | /api/users/{userId}    | N/A          | N/A | N/A | 204, 404, 500 |
| POST        | /api/reservations    | N/A          | ``{"seatId": 11, "roomId": 1, "userId": 1, "date": "2024-05-01", "schedule": 4}`` | ``{"reservationId": 123}`` | 201, 400, 500 |
| PATCH        | /api/reservations/{reservationId}    | N/A | ``{"cancelReservation": true}`` | N/A | 200, 400, 500 |
| PUT        | /api/reservations/{reservationId}   | N/A          | ``{"seatId": 11, "roomId": 1, "userId": 1, "date": "2024-05-01", "schedule": 4}`` | N/A | 200, 400, 404, 500 |
| POST       | /api/reservations/{reservationId}/payments    | N/A          | ``{"pay": "10EUR"}`` | N/A | 200, 400, 500 |