## Sistema de Reserva de Butacas de Cine
1. **peliculas**: Crear, eliminar y modificar películas.
2. **salas**: Crear, eliminar y modificar (parcialmente).
3. **usuarios**: Crear, eliminar y modificar (parcialmente).
4. **sala**: Crear una reserva para un usuario.
5. **sala**: Cancelar una reserva para un usuario.
6. **sala**: Modificar una reserva para un usuario.
7. **sala**: Registrar un pago de una reserva.

## Detalle de los Endpoints

| Método HTTP | URI                           | Query Params | Request Body                      | Response Body                                 | Códigos HTTP de respuesta                   |
|-------------|-------------------------------|--------------|----------------------------------|-----------------------------------------------|---------------------------------------------|
| POST        | /api/v1/movies              | -            | `{"Título original": "The Matrix", "Año": 1999, "Duracion": "131min", "País": "Estados Unidos", "Direccion": "Lilly Wachowski, Lana Wachowski, Hermanas Wachowski", "Guion": "Lilly Wachowski, Lana Wachowski", "Reparto": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss"}` | `{"id": 1, "Título original": "The Matrix", "Año": 1999, "Duracion": "131min", "País": "Estados Unidos", "Direccion": "Lilly Wachowski, Lana Wachowski, Hermanas Wachowski", "Guion": "Lilly Wachowski, Lana Wachowski", "Reparto": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss"}}` | 201 Created, 400 Bad Request, 500 Internal Server Error |
| DELETE      | /api/v1/movies/{id}         | -            | `{"id": "1"`                                      | `{"mensaje": "Película eliminada"}`        | 200 OK, 404 Not Found, 500 Internal Server Error |
| PUT       | /api/v1/movies/{id}         | - | `{"Título original": "The Matrix", "Año": 1999, "Duracion": "131min", "País": "Estados Unidos", "Direccion": "Lilly Wachowski, Lana Wachowski, Hermanas Wachowski", "Guion": "Lilly Wachowski, Lana Wachowski", "Reparto": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss"}` | `{"id": 1, "Título original": "The Matrix", "Año": 1999, "Duracion": "131min", "País": "Estados Unidos", "Direccion": "Lilly Wachowski, Lana Wachowski, Hermanas Wachowski", "Guion": "Lilly Wachowski, Lana Wachowski", "Reparto": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss"}}` |200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error
| POST        | /api/v1/users               | -            | `{"nombre": "Hugo Weaving", "email": "hugo.weaving@yahoo.com"}` | `{"id": 1, ""nombre": "Hugo Weaving", "email": "hugo.weaving@yahoo.com"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |
| DELETE      | /api/v1/users/{id}          | -            | `{"id": "1"`                                     | `{"mensaje": "Usuario eliminado"}`         | 200 OK, 404 Not Found, 500 Internal Server Error |
| PATCH       | /api/v1/users/{id}          | -            | `{"email": "hugo.weaving@msn.com"}`      | `{"id": 1, ""nombre": "Hugo Weaving", "email": "hugo.weaving@msn.com"}` | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
| POST        | /api/v1/seats               | -            | `{"usuarioId": 1, "salaId": 1, "asiento": "A1", "peliculaId": 1, "horario": "2024-06-08"}` | `{"id": 1, "usuarioId": 1, "salaId": 1, "asiento": "A1", "peliculaId": 1, "horario": "2024-06-08"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |
| PATCH       | /api/v1/seats/{id}          | -            | `{"asiento": "B2"}`                      | `{"id": 1, "usuarioId": 1, "salaId": 1, "asiento": "B2", "peliculaId": 1, "horario": "2024-06-08"}` | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
| DELETE      | /api/v1/seats/{id}          | -            | -                                        | `{"mensaje": "Reserva cancelada"}`         | 200 OK, 404 Not Found, 500 Internal Server Error |
| POST        | /api/v1/payments                  | -            | `{"reservaId": 1, "monto": 7.50, "metodoPago": "Cash"}` | `{"reservaId": 1, "monto": 7.50, "metodoPago": "Cash"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |