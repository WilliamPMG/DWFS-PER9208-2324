# API de un sistema de reserva de butacas de cine

En este ejercicio vamos a diseñar la API REST para el cine en el que venimos trabajando en los ejercicios de los anteriores temas.

Las operaciones que la API debe soportar son las siguientes:
- Crear, eliminar y modificar películas.
- Crear, eliminar y modificar (parcialmente) salas.
- Crear, eliminar y modificar (parcialmente) usuarios.
- Crear una reserva para un usuario en una sala.
- Cancelar una reserva para un usuario en una sala.
- Modificar una reserva para un usuario en una sala.
- Registrar un pago de una reserva.

**Recursos identificados:**
- Películas: Representa cada película disponible en el cine.
- Salas: Representa cada sala disponible en el cine.
- Usuarios: Representa cada usuario registrado en el cine.
- Reservas: Representa cada reserva creada por o para un usuario.
- Pagos: Representa cada pago de una reserva.<br/><br/><br/>

| Método HTTP                            | URI                   | Query Params  | Cuerpo de la Petición                                              | Cuerpo de la Respuesta                                                                | Códigos de Respuesta                                    |
|----------------------------------------|-----------------------|---------------|--------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------|
| POST                                   | /peliculas                | N/A           | `{"titulo": "Tenet", "año": "2020", "director": "Christopher Nolan", "calificacion": "3.9"}`          | `{"peliculaId": 789, "titulo": "Tenet", "año": "2020", "director": "Christopher Nolan", "calificacion": "3.9"}`              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE                                 | /peliculas/{peliculaId}   | N/A           | N/A                                                                | `{"titulo": "Tenet", "año": "2020", "director": "Christopher Nolan", "calificacion": "3.9"}`                                                        | 200 OK<br/>404 Not Found<br/>500 Internal Server Error      |
| PUT                                    | /peliculas/{peliculaId}   | N/A           | `{"titulo": "Tenet", "año": "2020", "director": "Christopher Nolan", "calificacion": "3.9"}` | `{"peliculaId": 789, "titulo": "Tenet", "año": "2020", "director": "Christopher Nolan", "calificacion": "3.9"}`          | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error   |
|
| POST                                   | /salas                | N/A           | `{"salaNum": "8", "asientos": 300}`          | `{"salaId": 8, "salaNum": "8"}`              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE                                 | /salas/{salaId}   | N/A           | N/A         | `{"salaNum": "8"}`                | 200 OK<br/>404 Not Found<br/>500 Internal Server Error      |
| PATCH                                  | /salas/{salaId}   | N/A           | `{"asientos": 350}` | `{"salaId": 8, "salaNum": "8", "asientos": 350}`| 200 OK<br/>400 Bad Request<br/>500 Internal Server Error   |
|
| POST                                   | /usuarios                | N/A           | `{"apellido": "Barragán", "nombre": "Freddy", "identificacion": "123456789", "edad": 33}`          | `{"usuarioId": 789, "apellido": "Barragán", "nombre": "Freddy", "identificacion": "123456789", "edad": 33}`              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE                                 | /usuarios/{usuarioId}   | N/A           | N/A                                                                | `{"apellido": "Barragán", "nombre": "Freddy", "identificacion": "123456789", "edad": 33}`                                                        | 200 OK<br/>404 Not Found<br/>500 Internal Server Error      |
| PATCH                                  | /usuarios/{usuarioId}   | N/A           | `{"apellido": "Rico"}` | `{"usuarioId": 789, "apellido": "Rico", "nombre": "Freddy", "identificacion": "123456789", "edad": 33}`          | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error   | 
|
| POST                                   | /reservas                | N/A           | `{"usuarioId": 789, "peliculaId": 789, "salaId": 8, "cantidadTickets": 3, "fecha": "25/05/2024", "hora": "15:00", "estado": "Pendiente pago"}`          | `{"reservaId": 789, "usuarioId": 789, "peliculaId": 789, "salaId": 8, "cantidadTickets": 3, "fecha": "25/05/2024", "hora": "15:00", "estado": "Pendiente pago"}`              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| PATCH                                  | /reservas/{reservaId}   | N/A           | `{"salaId": 10, "estado": "Cancelada"}` | `{"reservaId": 789, "usuarioId": 789, "peliculaId": 789, "salaId": 10, "cantidadTickets": 3, "fecha": "25/05/2024", "hora": "15:00", "estado": "Cancelada"}`          | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error   | 
|
| POST                                   | /pagos                | N/A           | `{"reservaId": 789, "precio": 25}`          | `{"pagoId": 789, "reservaId": 789, , "precio": 25}`              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
|