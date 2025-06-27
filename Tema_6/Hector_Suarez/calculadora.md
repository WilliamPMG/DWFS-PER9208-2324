# API de una calculadora online

**Recursos identificados:**
- Suma (sumas) Permite sumar N de números
- Resta (restas) Permite restar N de números
- Multiplicación (multiplicar) Permite realizar la operacion de multiplicación de dos numeros
- División (dividir) Permite realizar la operacion de división de dos numeros
- Radicación (raiz) Permite realizar la operacion de radicación de dos numeros
- Potenciación (potencia) Permite realizar la potenciación de dos numeros
- Detalle de operacion (detalle) Representa los datos de entrada y resultado de la operacion identificada por su ID


| Método HTTP | URI            | Query Params | Request Body | Response Body    | Códigos HTTP de respuesta |
|-------------|----------------|--------------|--------------|------------------|-------------------------|
| POST        | /api/sumas    | N/A          | ``{"n": [2, 2, 2, 2]}`` | ``{"operacion_id": 123}`` | 200, 400 |
| GET         | /api/sumas/{operacion_id}    | N/A          | N/A    | ``{"resultado": 123}`` | 200, 400 |
| POST        | /api/restas    | N/A          | ``{"n": [2, 2, 2]}`` | ``{"operacion_id": 123}`` | 200, 400 |
| GET        | /api/restas/{operacion_id}    | N/A  | N/A  | ``{"resultado": 123}`` | 200, 400 |
| POST        | /api/multiplicaciones    | N/A          | ``{"multiplicando": 2, "multiplicador": 2}`` | ``{"operacion_id": 123}`` | 200, 400 |
| GET        | /api/multiplicaciones/{operacion_id} | N/A  | N/A | ``{"resultado": 123}`` | 200, 400 |
| POST        | /api/divisiones    | N/A          | ``{"dividendo": 2, "divisor": 2}`` | ``{"operacion_id": 123}`` | 200, 400 |
| GET        | /api/divisiones/{operacion_id}    | N/A  | N/A | ``{"resultado": 123}`` | 200, 400 |
| POST        | /api/radicaciones    | N/A          | ``{"radicando": 2, "indice": 2}`` | ``{"operacion_id": 123}`` | 200, 400 |
| GET        | /api/radicaciones/{operacion_id}    | N/A | N/A | ``{"resultado": 123}`` | 200, 400 |
| POST        | /api/potenciaciones    | N/A          | ``{"exponente": 2, "base": 2}`` | ``{"operacion_id": 123}`` | 200, 400 |
| GET        | /api/potenciaciones/{operacion_id} | N/A | N/A | ``{"resultado": 123}`` | 200, 400 |
