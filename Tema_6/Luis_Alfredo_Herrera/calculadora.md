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

Para la calculadora online, se denomina operaciones, el cual permitirá realizar las operaciones y almacenar en memoria sus resultados.

| Método HTTP | URI                           | Query Params | Request Body                                   | Response Body                                                                                          | Códigos HTTP de respuesta                                              |
|-------------|-------------------------------|--------------|------------------------------------------------|--------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| POST        | /api/operaciones              | N/A          | ``{"tipoOperacion":"sumar", "valores":[6,4]}`` | ``{"operacionId": 1, "tipoOperacion": "sumar", "valores": [6,4], "respuesta": 10}``                    | 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
| GET         | /api/operaciones              | N/A          | N/A                                            | ``{"operaciones": [{"operacionId": 1, "tipoOperacion": "sumar", "valores": [6,4], "respuesta": 10}]}`` | 200 OK, 404 Not Fount, 500 Internal Server Error                       |
| GET         | /api/operaciones/{oprecionid} | N/A          | N/A                                            | ``{"operacionId": 1, "tipoOperacion": "sumar", "valores": [6,4], "respuesta": 10}``                    | 200 OK, 404 Not Fount, 500 Internal Server Error                       |

