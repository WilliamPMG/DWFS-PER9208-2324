# API de Calculadora



**Recursos identificados**:

- Suma (sumas) Permite sumar N de números
- Resta (restas) Permite restar N de números
- Multiplicación (multiplicaciones) Permite realizar la operacion de multiplicación
- División (divisiones) Permite realizar la operación de división
- Radicación (radicaciones) Permite realizar la operacion de radicación de dos números
- Potenciación (potenciaciones) Permite realizar la potenciación de dos números


| Método HTTP | URI                             | Query Params  | Cuerpo de la Petición                    | Cuerpo de la Respuesta                                               | Códigos de Respuesta                                    |
|-------------|---------------------------------|---------------|------------------------------------------|-----------------------------------------------------------------------|---------------------------------------------------------|
| POST        | /api/v1/sumas                | N/A           | `{"numbers":[2,2,2]}`                    | `{"idSuma": "1","total": 6}`                                    | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET        | /api/v1/sumas/{idSuma}                | N/A           |                | `{"idSuma": "1","total": 6}`                                    | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
| POST        | /api/v1/restas         | N/A           | `{"numbers":[2,2,2]}`                    | `{"idResta": 1,"total": -2}`                                     | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET        | /api/v1/restas/{idResta}        | N/A           |                   | `{"idResta": 1,"total": -2}`                                     | 200 Ok<br/>404 Not found<br/>500 Internal Server Error |
| POST        | /api/v1/multiplicaciones         | N/A           | `{"number1": 2,"number2": 2}`            | `{"idMultiplicacion": 1,"total": 4}`                                      | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET        | /api/v1/multiplicaciones/{idMultiplicacion}         | N/A           |             | `{"idMultiplicacion": 1,"total": 4}`                                      | 200 Ok<br/>404 Not Found<br/>500 Internal Server Error |
| POST        | /api/v1/divisiones            | N/A           | `{"number1": 2,"number2": 2}`            | `{"divisionId": 1,"total": 1}`                                      | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET        | /api/v1/divisiones/{divisionId}            | N/A           |   | `{"divisionId": 1,"total": 1}`                                      | 200 Ok<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /api/v1/radicaciones        | N/A           | `{"number": 4,"root": 2}`                | `{"idRaiz": 1,"total": 2}`                                      | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET        | /api/v1/radicaciones/{idRaiz}        | N/A           |                 | `{"idRaiz": 1,"total": 2}`                                      | 200 Ok<br/>404 Not Found<br/>500 Internal Server Error |
| POST        | /api/v1/potenciaciones             | N/A           | `{"numero":2, "power":3}`                | `{"idPotencia": 1, "total": 8}`                                      | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET        | /api/v1/potenciaciones/{idPotencia}             | N/A           |                 | `{"idPotencia": 1, "total": 8}`                                      | 200 Ok<br/>404 Not Found<br/>500 Internal Server Error |