## Recursos Identificados Calculadora

1.  **sumas**: Realiza la suma de N elementos.

2.  **restas**: Realiza la resta de N elementos.

3.  **multiplicaciones**: Realiza la multiplicación de 2 elementos.

4.  **divisiones**: Realiza la división de 2 elementos.

5.  **raices**: Calcula la raíz N-ésima de un número.

6.  **potencias**: Calcula la potencia N-ésima de un número.

7.  **operaciones**: Consulta el historial de operaciones realizadas mediante un ID de operación.

  

## Detalle de los Endpoints

  

| Método HTTP | URI | Query Params | Request Body | Response Body | Códigos HTTP de respuesta |

|-------------|-------------------------------|--------------|----------------------------------|-----------------------------------------------|---------------------------------------------|

| POST | /api/v1/calculadora/sumas | - | `{"numeros": [2, 4, 6]}` | `{"resultado": 12, "idOperacion": "48C09394-CA28-43C8-907B-6713C622282C"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |

| POST | /api/v1/calculadora/restas | - | `{"numeros": [20, 2, 3]}` | `{"resultado": 15, "idOperacion": "5ADF8737-E83F-4C66-9B1B-6B46814CCA97"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |

| POST | /api/v1/calculadora/multiplicaciones | - | `{"numero1": 3, "numero2": 3}` | `{"resultado": 9, "idOperacion": "86915C55-3EE9-4875-B738-CAB93B3A0BF4"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |

| POST | /api/v1/calculadora/divisiones | - | `{"numero1": 9, "numero2": 3}` | `{"resultado": 3, "idOperacion": "879CFCAC-1D70-4BED-B819-B79E9DF7830C"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |

| POST | /api/v1/calculadora/raices | - | `{"numero": 16, "n": 2}` | `{"resultado": 4, "idOperacion": "59D694BE-4F48-4A64-8CC1-249782B226C1"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |

| POST | /api/v1/calculadora/potencias | - | `{"numero": 3, "exponente": 3}` | `{"resultado": 27, "idOperacion": "AD590442-1C32-40AE-911B-A5E8F2710BBD"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |

| GET | /api/v1/calculadora/sumas/{id} | - | - | `{"idOperacion": "AD590442-1C32-40AE-911B-A5E8F2710BBD", "operacion": "1 + 2 + 3", "resultado": 6}` | 200 OK, 404 Not Found, 500 Internal Server Error |

| GET | /api/v1/calculadora/restas/{id} | - | - | `{"idOperacion": "AD590442-1C32-40AE-911B-A5E8F2710BBD", "operacion": "10 - 2 - 3", "resultado": 5}` | 200 OK, 404 Not Found, 500 Internal Server Error |

| GET | /api/v1/calculadora/multiplicaciones/{id} | - | - | `{"idOperacion": "AD590442-1C32-40AE-911B-A5E8F2710BBD", "operacion": "4 * 4", "resultado": 16}` | 200 OK, 404 Not Found, 500 Internal Server Error |

| GET | /api/v1/calculadora/divisiones/{id} | - | - | `{"idOperacion": "AD590442-1C32-40AE-911B-A5E8F2710BBD", "operacion": "10 / 2", "resultado": 5}` | 200 OK, 404 Not Found, 500 Internal Server Error |

| GET | /api/v1/calculadora/potencias/{id} | - | - | `{"idOperacion": "AD590442-1C32-40AE-911B-A5E8F2710BBD", "operacion": "2^3", "resultado": 8}` | 200 OK, 404 Not Found, 500 Internal Server Error |

| GET | /api/v1/calculadora/raices/{id} | - | - | `{"idOperacion": "AD590442-1C32-40AE-911B-A5E8F2710BBD", "operacion": "√2(25)", "resultado": 5}` | 200 OK, 404 Not Found, 500 Internal Server Error |