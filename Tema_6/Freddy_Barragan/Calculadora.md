# API de una calculadora online

En este ejercicio vamos a diseñar la API REST de una calculadora.

Las operaciones que la API debe soportar son las siguientes:
- Sumar N elementos (2+2, 2+2+2).
- Restar N elementos (2-2, 2-2-2).
- Multiplicar 2 elementos (2x2).
- Dividir 2 elementos (2/2).
- Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
- Potencia N-ésima de un número (2^2, 3^3, 4^4).
- Detalle de operacion

Nuestra calculadora tendrá memoria y siempre se podrán consultar los datos de operaciones realizadas, a través de un ID de operación.

**Recursos identificados:**
- Operaciones: Representa cada operación que se haga en la calculadora.
- Detalles de Operaciones: Representa cada resultado y sus elementos.<br/><br/><br/>

| Método HTTP                            | URI                   | Query Params  | Cuerpo de la Petición                                              | Cuerpo de la Respuesta                                                                | Códigos de Respuesta                                    |
|----------------------------------------|-----------------------|---------------|--------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------|
| GET                                    | /operaciones/{operacionId}                 | N/A           | N/A          | `{"operacionId": 789, "operacion": "suma", "elementos": ["2","2"], "resultado": "4"}`           | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error   |
| POST                                   | /operaciones                | N/A           | `{"operacion": "suma", "elementos": ["2","2"], "resultado": "4"}`          | `{"operacionId": 789, "operacion": "suma", "resultado": "4"}`              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
