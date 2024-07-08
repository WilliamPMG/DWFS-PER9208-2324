# API de una calculadora online

## Recursos

- **additions:** Sumar N elementos
- **subtractions:** Restar N elementos
- **multiplications:** Multiplicar 2 elementos
- **divisions:** Dividir 2 elementos
- **roots:** Raiz N-ésima de un número
- **powers:** Potencia N-ésima de un número
- **operations:** Historial de operaciones

| Método HTTP | URI                                 | Query Params | Cuerpo de la Petición          | Cuerpo de la Respuesta                              | Códigos de Respuesta                                          |
|-------------|-------------------------------------|--------------|--------------------------------|-----------------------------------------------------|---------------------------------------------------------------|
| POST        | /additions                          | N/A          | `{"numbers": [2,2,2]}`         | `{"id": 1,"result": 6}`                             | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /additions/{additionId}             | N/A          | N/A                            | `{"id": 1,"result": 6, numbers": [2,2,2]}`          | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| POST        | /subtractions                       | N/A          | `{"numbers": [2,2,2]}`         | `{"id": 2,"result": -2}`                            | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /subtractions/{subtractionId}       | N/A          | N/A                            | `{"id": 2,"result": -2, numbers": [2,2,2]}`         | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| POST        | /multiplications                    | N/A          | `{"number1": 2,"number2": 2}`  | `{"id": 3,"result": 4}`                             | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /multiplications/{multiplicationId} | N/A          | N/A                            | `{"id": 3,"result": 4, "number1": 2,"number2": 2}`  | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| POST        | /divisions                          | N/A          | `{"dividend": 2,"divisor": 2}` | `{"id": 4,"result": 1}`                             | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /divisions/{divisionId}             | N/A          | N/A                            | `{"id": 4,"result": 1, "dividend": 2,"divisor": 2}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| POST        | /roots                              | N/A          | `{"radicand": 4,"index": 2}`   | `{"id": 5,"result": 2}`                             | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /roots/{rootId}                     | N/A          | N/A                            | `{"id": 5,"result": 2, "radicand": 4,"index": 2}`   | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| POST        | /powers                             | N/A          | `{"base": 2,"exponent": 3}`    | `{"id": 6,"result": 8}`                             | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /powers/{powerId}                   | N/A          | N/A                            | `{"id": 6,"result": 8, "base": 2,"exponent": 3}`    | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |

