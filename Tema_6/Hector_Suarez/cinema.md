# API de un sistema de reserva de butacas de cine

**Recursos identificados:**
- Películas
- Salas
- Usuarios
- Reservas
- Registrar Pago


| Método HTTP | URI            | Query Params | Request Body | Response Body    | Códigos HTTP de respuesta |
|-------------|----------------|--------------|--------------|------------------|-------------------------|
| GET        | /api/peliculas | N/A          | N/A | ``{"pelicula_id": 1, "titulo": "Sala 1"}`` | 200, 400, 500 |
| POST        | /api/peliculas    | N/A          | ``{"titulo": "El Padrino", "descripcion": "El Padrino es una película estadounidense de 1972",  "genero": "Drama", "director": "Francis Ford Coppola", "duracion": 175, "actores": ["Marlon Brando", "Al Pacino", "James Caan"], "idioma": "Inglés"}`` | ``{"id": 123}`` | 201, 400, 500 |
| PUT        | /api/peliculas/{id}   | N/A          | ``{"titulo": "El Padrino", "descripcion": "El Padrino es una película estadounidense de 1972",  "genero": "Drama", "director": "Francis Ford Coppola", "duracion": 175, "actores": ["Marlon Brando", "Al Pacino", "James Caan"], "idioma": "Inglés"}`` | N/A | 200, 400, 404, 500 |
| DELETE        | /api/peliculas/{id}    | N/A          | N/A | N/A | 204, 404, 500 |
| GET        | /api/salas | N/A          | N/A | ``{"sala_id": 1, "nombre": "Sala 1", "pelicual_id": [1, 2], "horarios": [12, 15, 18]}`` | 200, 400, 500 |
| POST        | /api/salas    | N/A          | ``{"nombre": "Sala General","capacidad": 100, "tipo": "2D", "peliculas": [1, 2], "horarios": [12, 15, 18], "precio": 20}`` | ``{"id": 123}`` | 201, 400, 500 |
| PATCH        | /api/salas/{id}    | N/A          | ``{"capacidad": 90}`` | N/A | 200, 400, 404, 500 |
| DELETE        | /api/salas/{id}    | N/A          | N/A | N/A | 204, 404, 500 |
| POST        | /api/usuarios    | N/A          | ``{"nombre": "Juan", "apellido": "Pérez", "email": "juan@example.com"}`` | ``{"id": 123}`` | 201, 400, 500 |
| PATCH        | /api/usuarios/{id}    | N/A          | ``{"nombre": "Sebastian"}`` | N/A | 200, 400, 404, 500 |
| DELETE        | /api/usuarios/{id}    | N/A          | N/A | N/A | 204, 404, 500 |
| POST        | /api/reservas    | N/A          | ``{"butaca_id": 11, "sala_id": 1, "usuario_id": 123, "fecha": "2024-05-01", "horario": 15}`` | ``{"id": 123}`` | 201, 400, 500 |
| PATCH        | /api/reservas/{id}    | N/A | ``{"cancelar_reserva": true}`` | N/A | 200, 400, 500 |
| PUT        | /api/reservas/{id}   | N/A          | ``{"butaca_id": 11, "sala_id": 1, "usuario_id": 123, "fecha": "2024-05-01", "horario": 15}`` | N/A | 200, 400, 404, 500 |
| PATCH        | /api/reservas/{id}    | N/A          | ``{"pago": "10USD"}`` | N/A | 200, 400, 500 |