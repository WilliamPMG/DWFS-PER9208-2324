# API REST de una calculadora.
## Las operaciones que la API debe soportar son las siguientes:
1. **Sumar**: N elementos (2+2, 2+2+2).
2. **Restar**: N elementos (2-2, 2-2-2).
3. **Multiplicar**: 2 elementos (2x2).
4. **Dividir**: 2 elementos (2/2).
5. **Raiz**: N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
6. **Potencia**: N-ésima de un número (2^2, 3^3, 4^4).
7. **Detalle de operacion**: Nuestra calculadora tendrá memoria y siempre se podrán consultar los datos de operaciones realizadas, a través de un ID de operación.

## Endpoints

| Método HTTP | URI            | Query Params | Request Body | Response Body    | Códigos HTTP de respuesta |
|-------------|----------------|--------------|--------------|------------------|-------------------------|
| POST        | /api/sums    | N/A          | ``{"numbers": [2, 2]}`` | ``{"operacion_id": 1}`` | 200, 400 |
| GET         | /api/sums/{operation_id}    | N/A          | N/A    | ``{"result": 1}`` | 200, 400 |
| POST        | /api/subtractions    | N/A          | ``{"numbers": [2, 2]}`` | ``{"operation_id": 1}`` | 200, 400 |
| GET        | /api/subtractions/{operation_id}    | N/A  | N/A  | ``{"result": 0}`` | 200, 400 |
| POST        | /api/multiplications    | N/A          | ``{"multiplying": 2, "multiplier": 2}`` | ``{"operacion_id": 1}`` | 200, 400 |
| GET        | /api/multiplications/{operation_id} | N/A  | N/A | ``{"result": 4}`` | 200, 400 |
| POST        | /api/divisions    | N/A          | ``{"dividend": 2, "divider": 2}`` | ``{"operation_id": 1}`` | 200, 400 |
| GET        | /api/divisions/{operation_id}    | N/A  | N/A | ``{"result": 1}`` | 200, 400 |
| POST        | /api/filings    | N/A          | ``{"filing": 2, "index": 2}`` | ``{"operation_id": 1}`` | 200, 400 |
| GET        | /api/filings/{operation_id}    | N/A | N/A | ``{"result": 1.41421}`` | 200, 400 |
| POST        | /api/empowerments    | N/A          | ``{"exponent": 2, "base": 2}`` | ``{"operation_id": 1}`` | 200, 400 |
| GET        | /api/empowerments/{operation_id} | N/A | N/A | ``{"result": 4}`` | 200, 400 |