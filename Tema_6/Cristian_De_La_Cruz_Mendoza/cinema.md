# API del Sistema de Reserva de Butacas de Cine
## Recursos Identificados
1. **peliculas**: Representa las películas que se proyectan en el cine.
2. **salas**: Representa las salas de cine donde se proyectan las películas.
3. **usuarios**: Representa los usuarios que reservan butacas.
4. **reservas**: Representa las reservas de butacas para una película en una sala.
5. **pagos**: Representa los pagos realizados para las reservas.

## Detalle de los Endpoints

| Método HTTP | URI                            | Query Params | Request Body                             | Response Body                              | Códigos HTTP de respuesta                   |
|-------------|--------------------------------|--------------|------------------------------------------|--------------------------------------------|---------------------------------------------|
| POST        | /api/v1/peliculas              | -            | `{"titulo": "Movie Title", "duracion": 120, "genero": "Action"}` | `{"id": 1, "titulo": "Movie Title", "duracion": 120, "genero": "Action"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |
| DELETE      | /api/v1/peliculas/{id}         | -            | -                                        | `{"mensaje": "Película eliminada"}`        | 200 OK, 404 Not Found, 500 Internal Server Error |
| PATCH       | /api/v1/peliculas/{id}         | -            | `{"titulo": "New Title"}`                | `{"id": 1, "titulo": "New Title", "duracion": 120, "genero": "Action"}` | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
| POST        | /api/v1/salas                  | -            | `{"nombre": "Sala 1", "capacidad": 100}` | `{"id": 1, "nombre": "Sala 1", "capacidad": 100}` | 201 Created, 400 Bad Request, 500 Internal Server Error |
| DELETE      | /api/v1/salas/{id}             | -            | -                                        | `{"mensaje": "Sala eliminada"}`            | 200 OK, 404 Not Found, 500 Internal Server Error |
| PATCH       | /api/v1/salas/{id}             | -            | `{"capacidad": 150}`                     | `{"id": 1, "nombre": "Sala 1", "capacidad": 150}` | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
| POST        | /api/v1/usuarios               | -            | `{"nombre": "John Doe", "email": "john@example.com"}` | `{"id": 1, "nombre": "John Doe", "email": "john@example.com"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |
| DELETE      | /api/v1/usuarios/{id}          | -            | -                                        | `{"mensaje": "Usuario eliminado"}`         | 200 OK, 404 Not Found, 500 Internal Server Error |
| PATCH       | /api/v1/usuarios/{id}          | -            | `{"email": "newemail@example.com"}`      | `{"id": 1, "nombre": "John Doe", "email": "newemail@example.com"}` | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
| POST        | /api/v1/reservas               | -            | `{"usuarioId": 1, "salaId": 1, "asiento": "A1", "peliculaId": 1, "horario": "2023-06-01T18:00:00Z"}` | `{"id": 1, "usuarioId": 1, "salaId": 1, "asiento": "A1", "peliculaId": 1, "horario": "2023-06-01T18:00:00Z"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |
| DELETE      | /api/v1/reservas/{id}          | -            | -                                        | `{"mensaje": "Reserva cancelada"}`         | 200 OK, 404 Not Found, 500 Internal Server Error |
| PATCH       | /api/v1/reservas/{id}          | -            | `{"asiento": "B2"}`                      | `{"id": 1, "usuarioId": 1, "salaId": 1, "asiento": "B2", "peliculaId": 1, "horario": "2023-06-01T18:00:00Z"}` | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
| POST        | /api/v1/pagos                  | -            | `{"reservaId": 1, "monto": 15.0, "metodoPago": "Tarjeta"}` | `{"id": 1, "reservaId": 1, "monto": 15.0, "metodoPago": "Tarjeta"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |
