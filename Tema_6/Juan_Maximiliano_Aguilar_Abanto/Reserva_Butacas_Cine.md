# API de un sistema de reserva de butacas de cine



**Recursos identificados**:

- Película(films): Representa una Película
- Sala(movieTheaters): Representa una Sala
- Usuarios(users): Representa un usuario
- Reserva (reservations): Representa un Reserva
- Pago (payments): Pago de una reserva.

| Método HTTP | URI                             | Query Params  | Cuerpo de la Petición       | Cuerpo de la Respuesta                                               | Códigos de Respuesta                                    |
|-------------|---------------------------------|---------------|------------------------------------------|-----------------------------------------------------------------------|---------------------------------------------------------|
| POST        | /api/v1/films                | N/A           | `{"name": "Matrix","country": "USA","language": "English"}` | `{"id": 1,"name": "Matrix","country": "USA","language": "English"}`                                    | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE        | /api/v1/films/{filmId}                | N/A           | N/A                  | `{"id": 1,"name": "Matrix","country": "USA","language": "English"}`                                    | 200 Ok<br/>400 Bad Request<br/>500 Internal Server Error |
| PUT        | /api/v1/films/{filmId}                | N/A           | `{"name": "Matrix revolution","country": "Spain","language": "Spanish"}`                    | `{"id": 1,"name": "Matrix revolution","country": "Spain","language": "Spanish"}`                                    | 200 Ok<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /api/v1/movieTheaters                | N/A           | `{"name": "Andromeda","capacity": 100}`| `{"id": 1,"name": "Andromeda","capacity": 100}`                                    | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE        | /api/v1/movieTheaters/{movieTheaterId}                | N/A           | N/A                    | `{"id": 1,"name": "Andromeda","capacity": 100}`                                    | 200 Ok<br/>400 Bad Request<br/>500 Internal Server Error |
| PATCH        | /api/v1/movieTheaters/{movieTheaterId}                | N/A           | `{"capacity": 150}` | `{"id": 1, "name": "Andromeda","capacity": 150}`                                    | 200 Ok<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /api/v1/users                | N/A           | `{"name": "juan","lastname": "aguilar","userName": "neoaguil17"}`| `{"id" : 1,"name": "juan","lastname": "aguilar","userName": "neoaguil17"}`                                    | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE        | /api/v1/users/{userId}                | N/A           | N/A                    | `{"id" : 1,"name": "juan","lastname": "aguilar","userName": "neoaguil17"}`                                    | 200 Ok<br/>404 Not Found<br/>500 Internal Server Error |
| PATCH        | /api/v1/users/{userId}                | N/A           | `{"name": "alex"}`                    | `{"id" : 1,"name": "alex","lastname": "aguilar","userName": "neoaguil17"}`  | 200 Ok<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /api/v1/reservations                | N/A           | `{"userId": "1","movieTheaters":1,"day":"Monday","time":"15:00"}`| `{"id" : 1,"userId": "1","movieTheaters":1,"day":"Monday","time":"15:00"}`                                    | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE        | /api/v1/reservations/{reservationId}                | N/A           | N/A | `{"id" : 1,"userId": "1","movieTheaters":1,"day":"Monday","time":"15:00"}`                                    | 200 Ok<br/>404 Not Found<br/>500 Internal Server Error |
| PUT        | /api/v1/reservations/{reservationId}                 | N/A           | `{"movieTheaters":2,"day":"Sunday","time":"16:00"}`                    | `{"id" : 1,"userId": 1,"movieTheaters":2,"day": "Sunday","time":"16:00"}`                                    | 200 Ok<br/>400 Bad Request<br/>500 Internal
| POST        | /api/v1/payments                | N/A           | `{"reservationId": "1","cost": 2000,"currency": "dollars"}`                    | `{"id": "1","reservationId": "1","cost": 2000,"currency": "dollars"}`                                    | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |