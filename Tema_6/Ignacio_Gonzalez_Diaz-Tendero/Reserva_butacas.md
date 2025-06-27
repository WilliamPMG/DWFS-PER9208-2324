# API de un sistema de reserva de butacas de cine

En este ejercicio vamos a diseñar la API REST para el cine en el que venimos trabajando en los ejercicios de los
anteriores temas.

## Operaciones soportadas

- Crear, eliminar y modificar películas.
- Crear, eliminar y modificar (parcialmente) salas.
- Crear, eliminar y modificar (parcialmente) usuarios.
- Crear una reserva para un usuario en una sala.
- Cancelar una reserva para un usuario en una sala.
- Modificar una reserva para un usuario en una sala.
- Registrar un pago de una reserva.

## Recursos identificados

| Método HTTP | URI                            | Query Params | Cuerpo de la Petición                                                          | Cuerpo de la Respuesta                                                                           | Códigos de Respuesta                                                                 |
|-------------|--------------------------------|--------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| POST        | /movies                        | -            | {"title": "Star Wars: Episode I", "duration": 180, "genre": "Science fiction"} | {"movieId": 123, "title": "StStar Wars: Episode I", "duration": 180, "genre": "Science fiction"} | 201 Created  <br/> 400 Bad Request  <br/> 500 Internal Server Error                  |
| DELETE      | /movies/{movieId}              | -            | N/A                                                                            | {"message": "Movie deleted"}                                                                     | 200 OK  <br/> 404 Not Found   <br/> 500 Internal Server Error                        |
| PATCH       | /movies/{movieId}              | -            | {"title": "StStar Wars: Episode I", "duration": 190}                           | {"movieId": 123, "title": "StStar Wars: Episode I", "duration": 190, "genre": "Science fiction"} | 200 OK   <br/> 400 Bad Request  <br/> 404 Not Found  <br/> 500 Internal Server Error |
| POST        | /rooms                         | -            | {"name": "Room 1", "capacity": 100}                                            | {"roomId": 456, "name": "Room 1", "capacity": 100}                                               | 201 Created   <br/> 400 Bad Request  <br/> 500 Internal Server Error                 |
| DELETE      | /rooms/{roomId}                | -            | N/A                                                                            | {"message": "Room deleted"}                                                                      | 200 OK  <br/> 404 Not Found  <br/> 500 Internal Server Error                         |
| PATCH       | /rooms/{roomId}                | -            | {"name": "Room A"}                                                             | {"roomId": 456, "name": "Room A", "capacity": 100}                                               | 200 OK   <br/> 400 Bad Request <br/> 404 Not Found   <br/> 500 Internal Server Error |
| POST        | /users                         | -            | {"name": "George Lucas", "email": "john@example.com"}                          | {"userId": 789, "name": "George Lucas", "email": "john@example.com"}                             | 201 Created  <br/> 400 Bad Request  <br/> 500 Internal Server Error                  |
| DELETE      | /users/{userId}                | -            | N/A                                                                            | {"message": "User deleted"}                                                                      | 200 OK   <br/> 404 Not Found   <br/> 500 Internal Server Error                       |
| PATCH       | /users/{userId}                | -            | {"name": "Jane Doe"}                                                           | {"userId": 789, "name": "Jane Doe", "email": "john@example.com"}                                 | 200 OK   <br/> 400 Bad Request <br/> 404 Not Found   <br/> 500 Internal Server Error |
| POST        | /bookings                      | -            | {"userId": 789, "roomId": 456, "seats": 2}                                     | {"bookingId": 101, "userId": 789, "roomId": 456, "seats": 2}                                     | 201 Created    <br/> 400 Bad Request  <br/> 500 Internal Server Error                |
| DELETE      | /bookings/{bookingId}          | -            | N/A                                                                            | {"message": "Booking cancelled"}                                                                 | 200 OK  <br/> 404 Not Found   <br/> 500 Internal Server Error                        |
|             |                                |              |                                                                                |                                                                                                  | 500 Internal Server Error                                                            |
| PATCH       | /bookings/{bookingId}          | -            | {"seats": 3}                                                                   | {"bookingId": 101, "userId": 789, "roomId": 456, "seats": 3}                                     | 200 OK  <br/> 400 Bad Request <br/> 404 Not Found   <br/> 500 Internal Server Error  |
| POST        | /bookings/{bookingId}/payments | -            | {"amount": 20}                                                                 | {"bookingId": 101, "userId": 789, "roomId": 456, "seats": 2, "amount": 20, "status": "Paid"}     | 200 OK <br/> 400 Bad Request <br/> 404 Not Found   <br/> 500 Internal Server Error   |

