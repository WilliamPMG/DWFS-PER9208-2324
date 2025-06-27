# API de Calculadora Online
## Recursos Identificados
1. **sumas**: Realiza la suma de N elementos.
2. **restas*: Realiza la resta de N elementos.
3. **multiplicaciones**: Realiza la multiplicación de 2 elementos.
4. **divisiones**: Realiza la división de 2 elementos.
5. **raices**: Calcula la raíz N-ésima de un número.
6. **potencias**: Calcula la potencia N-ésima de un número.
7. **operaciones**: Consulta el historial de operaciones realizadas mediante un ID de operación.

## Detalle de los Endpoints

| Método HTTP | URI                           | Query Params | Request Body                      | Response Body                                 | Códigos HTTP de respuesta                   |
|-------------|-------------------------------|--------------|----------------------------------|-----------------------------------------------|---------------------------------------------|
| POST        | /api/v1/sumas                 | -            | `{"numeros": [1, 2, 3]}`         | `{"resultado": 6, "idOperacion": "abc123"}`   | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET         | /api/v1/sumas/{id}            | -            | -                                | `{"idOperacion": "abc123", "operacion": "1 + 2 + 3", "resultado": 6}` | 200 OK, 404 Not Found, 500 Internal Server Error |
| POST        | /api/v1/restas                | -            | `{"numeros": [10, 2, 3]}`        | `{"resultado": 5, "idOperacion": "def456"}`   | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET         | /api/v1/restas/{id}           | -            | -                                | `{"idOperacion": "def456", "operacion": "10 - 2 - 3", "resultado": 5}` | 200 OK, 404 Not Found, 500 Internal Server Error |
| POST        | /api/v1/multiplicaciones      | -            | `{"numero1": 2, "numero2": 3}`   | `{"resultado": 6, "idOperacion": "ghi789"}`   | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET         | /api/v1/multiplicaciones/{id} | -            | -                                | `{"idOperacion": "ghi789", "operacion": "2 * 3", "resultado": 6}` | 200 OK, 404 Not Found, 500 Internal Server Error |
| POST        | /api/v1/divisiones            | -            | `{"numero1": 6, "numero2": 3}`   | `{"resultado": 2, "idOperacion": "jkl012"}`   | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET         | /api/v1/divisiones/{id}       | -            | -                                | `{"idOperacion": "jkl012", "operacion": "6 / 3", "resultado": 2}` | 200 OK, 404 Not Found, 500 Internal Server Error |
| POST        | /api/v1/raices                | -            | `{"numero": 16, "n": 2}`         | `{"resultado": 4, "idOperacion": "mno345"}`   | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET         | /api/v1/raices/{id}           | -            | -                                | `{"idOperacion": "mno345", "operacion": "√2(16)", "resultado": 4}` | 200 OK, 404 Not Found, 500 Internal Server Error |
| POST        | /api/v1/potencias             | -            | `{"numero": 2, "exponente": 3}`  | `{"resultado": 8, "idOperacion": "pqr678"}`   | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET         | /api/v1/potencias/{id}        | -            | -                                | `{"idOperacion": "pqr678", "operacion": "2^3", "resultado": 8}` | 200 OK, 404 Not Found, 500 Internal Server Error |
