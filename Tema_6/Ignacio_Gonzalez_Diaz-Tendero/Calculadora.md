### API de una calculadora online

En este ejercicio vamos a diseñar la API REST de una calculadora.

Las operaciones que la API debe soportar son las siguientes:

- Sumar N elementos (2+2, 2+2+2).
- Restar N elementos (2-2, 2-2-2).
- Multiplicar 2 elementos (2x2).
- Dividir 2 elementos (2/2).
- Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
- Potencia N-ésima de un número (2^2, 3^3, 4^4).

#### Recursos identificados:

- Operación (operations): Representa una operación realizada en la calculadora.

| Método HTTP | URI                                       | Query Params | Cuerpo de la Petición         | Cuerpo de la Respuesta                                          | Códigos de Respuesta                                                   |
|-------------|-------------------------------------------|--------------|-------------------------------|-----------------------------------------------------------------|------------------------------------------------------------------------|
| POST        | /operations/sums                          | -            | {"numbers": [2, 2, 2]}        | {"operationId": 123, "result": 6}                               | 201 Created  <br/> 400 Bad Request  <br/>500 Internal Server Error     |
| GET         | /operations/sums/{operationId}            | -            | N/A                           | {"operation": {"id": 123, "expression": "2+2"}}                 | 200 OK  <br/>404 Not Found  <br/>500 Internal Server Error             |
| POST        | /operations/subtractions                  | -            | {"numbers": [5, 3]}           | {"operationId": 124, "result": 2}                               | 201 Created   <br/> 400 Bad Request  <br/>500 Internal Server Error    |
| GET         | /operations/subtractions/{operationId}    | -            | N/A                           | {"operation": {"id": 124, "expression": "5-3"}}                 | 200 OK  <br/>404 Not Found  <br/>500 Internal Server Error             |
| POST        | /operations/multiplications               | -            | {"numbers": [3, 4]}           | {"operationId": 125, "result": 12}                              | 201 Created    <br/> 400 Bad Request  <br/>500 Internal Server Error   |
| GET         | /operations/multiplications/{operationId} | -            | N/A                           | {"operation": {"id": 125, "expression": "3x4"}}                 | 200 OK  <br/>404 Not Found  <br/>500 Internal Server Error             |
| POST        | /operations/divisions                     | -            | {"dividend": 8, "divisor": 2} | {"operationId": 126, "result": 4}                               | 201 Created     <br/> 400 Bad Request  <br/>500 Internal Server Error  |
| GET         | /operations/divisions/{operationId}       | -            | N/A                           | {"operation": {"id": 126, "expression": "8/2"}}                 | 200 OK  <br/>404 Not Found  <br/>500 Internal Server Error             |
| POST        | /operations/square-roots                  | -            | {"number": 16}                | {"operationId": 127, "result": 4}                               | 201 Created   <br/> 400 Bad Request  <br/>500 Internal Server Error    |
| GET         | /operations/square-roots/{operationId}    | -            | N/A                           | {"operation": {"id": 127, "expression": "Raíz cuadrada de 16"}} | 200 OK  <br/>404 Not Found  <br/>500 Internal Server Error             |
| POST        | /operations/powers                        | -            | {"base": 2, "exponent": 3}    | {"operationId": 128, "result": 8}                               | 201 Created      <br/> 400 Bad Request  <br/>500 Internal Server Error |
| GET         | /operations/powers/{operationId}          | -            | N/A                           | {"operation": {"id": 128, "expression": "2^3"}}                 | 200 OK  <br/>404 Not Found  <br/>500 Internal Server Error             |
