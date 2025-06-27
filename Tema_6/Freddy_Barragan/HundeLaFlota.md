# API del juego hunde la flota

En este ejercicio vamos a diseñar la API REST que podría usar la App del juego 'Hundir la flota' o 'Juego de los barcos'.
Si no conoces este juego puedes echar un vistazo al PDF de instrucciones que se encuentra en esta misma ruta, o descarga una App existente para jugar una partida. La aplicación gestionará principalmente partidas entre usuarios registrados o invitados (es decir, sin registro, anónimos). Cada partida tiene asociadas dos cuadrículas de 10x10 cuadrados, una por cada jugador, y estos jugadores deben poner sobre dicha cuadrícula las localizaciones de sus barcos. Tal como se indica en las instrucciones, deberá haber:
- 1 barco de 4 cuadrados.
- 2 barcos de 3 cuadrados.
- 3 barcos de 2 cuadrados.
- 4 barcos de 1 cuadrado.

También es necesario que, como dicen las instrucciones, se respeten dos reglas:
- Los barcos se colocan enteramente en horizontal o enteramente en vertical, es decir, no puede haber un barco en forma de L.
- Siempre debe haber un cuadrado de distancia entre cualquier punto de cualquier barco, y se pueden pegar al borde de la cuadrícula.

El objetivo del ejercicio es diseñar una API REST que será implementada (en otros ejercicios) por un microservicio o aplicación que se encargará de tratar todos los datos de las diferentes partidas. En este ejercicio nos centraremos únicamente en el diseño de la API y no trataremos ningún detalle de la implementación.

Las operaciones que la API debe soportar son las siguientes:
- Crear una partida.
- Eliminar una partida.
- Modificar datos de una partida.
- Iniciar una partida.
- Finalizar una partida.
- Consultar todos los datos (jugadores asociados, barcos de cada jugador, disparos realizados, ganador...) de una partida.
- Añadir un barco a la cuadrícula de un jugador en una partida.
- Eliminar un barco de la cuadrícula de un jugador en una partida.
- Consultar todos los barcos de un jugador de una partida.
- Registrar un disparo de un jugador a otro en una partida.
- Crear un usuario.
- Obtener datos de un usuario.
- Eliminar un usuario.

Ten en cuenta que podría no ser necesario definir un endpoint por cada una de las operaciones que se han listado. No obstante, dichas operaciones deben ser satisfechas por la API diseñada. Las primeras preguntas que deberás hacerte son:
- ¿Qué recursos tiene que manejar la API?
- ¿Cómo se relacionan entre sí?
- ¿Qué información (atributos) guarda cada recurso?

**Recursos identificados:**
- Partida: Representa cada juego.
- Barco: Representa cada nave que se debe undir por el jugador contrario.
- Disparo: Representa cada impacto en la cuadrícula del jugador contrario.
- Usuarios: Rpresentan los jugadores de las partidas.<br/><br/><br/>



| Método HTTP                            | URI                   | Query Params  | Cuerpo de la Petición                                              | Cuerpo de la Respuesta                                                                | Códigos de Respuesta                                    |
|----------------------------------------|-----------------------|---------------|--------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------|
| POST                                   | /partidas                | N/A           | `{"jugador1Id": 789, "jugador2Id": 790, "estado": "Iniciada", "idGanador": 789}`          | `{"partidaId": 789, "jugador1Id": 789, "jugador2Id": 790, "estado": "Iniciada", "idGanador": 789}`              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE                                 | /partidas/{partidaId}    | N/A           | N/A                                                                | `{"jugador1Id": 789, "jugador2Id": 790, "estado": "Iniciada", "idGanador": 789}`                                                        | 200 OK<br/>404 Not Found<br/>500 Internal Server Error      |
| PATCH                                  | /partidas/{partidaId}    | N/A           | `{"estado": "Finalizada"}` | `{"partidaId": 789, "jugador1Id": 789, "jugador2Id": 790, "estado": "Finalizada", "idGanador": 789}`          | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error   |
| GET                                    | /partidas/{partidaId}/disparos   | N/A          | N/A         | `{"disparos":[{"disparoId": 789, "jugadorId": 789, "partidaId": 789, "x": 4, "y": "D", "barcoGolpeadoId"(Si golpea un barco, de lo contrario en null): 789}]}`           | 200 OK<br/>404 Not Found<br/>500 Internal Server Error   |
| GET                                    | /partidas/{partidaId}/jugadores/{jugadorId}/barcos   | N/A          | N/A         | `{"barcos":[{"barcoId": 789, "cantidadCuadros": 4, "partidaId": 789, "x1": 2, "y1": "A", "x2": 5, "y2": "A"}]}`           | 200 OK<br/>404 Not Found<br/>500 Internal Server Error   |
|
| POST                                   | /barcos                  | N/A           | `{"cantidadCuadros": 4, "jugadorId": 789, "partidaId": 789, "x1": 2, "y1": "A", "x2": 5, "y2": "A"}`          | `{"barcoId": 789, "cantidadCuadros": 4, "jugadorId": 789, "partidaId": 789, "x1": 2, "y1": "A", "x2": 5, "y2": "A"}`              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE                                 | /barcos/{barcoId}        | N/A           | N/A         | `{"cantidadCuadros": 4, "jugadorId": 789, "partidaId": 789, "x1": 2, "y1": "A", "x2": 5, "y2": "A"}`                | 200 OK<br/>404 Not Found<br/>500 Internal Server Error      |
|
| POST                                   | /jugadores                | N/A           | `{"apellido": "Barragán", "nombre": "Freddy", "identificacion": "123456789", "edad": 33}`          | `{"jugadorId": 789, "apellido": "Barragán", "nombre": "Freddy", "identificacion": "123456789", "edad": 33}`              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE                                 | /jugadores/{jugadorId}   | N/A           | N/A         | `{"apellido": "Barragán", "nombre": "Freddy", "identificacion": "123456789", "edad": 33}`                                                        | 200 OK<br/>404 Not Found<br/>500 Internal Server Error      |
| GET                                    | /jugadores/{jugadorId}   | N/A          | N/A         | `{"jugadorId": 789, "apellido": "Barragán", "nombre": "Freddy", "identificacion": "123456789", "edad": 33}`           | 200 OK<br/>404 Not Found<br/>500 Internal Server Error   |
|
| POST                                   | /disparos                | N/A           | `{"jugadorId": 789, "partidaId": 789, "x": 4, "y": "D", "barcoGolpeadoId"(Si golpea un barco, de lo contrario en null): 789}`          | `{"disparoId": 789, "jugadorId": 789, "partidaId": 789, "x": 4, "y": "D", "barcoGolpeadoId"(Si golpea un barco, de lo contrario en null): 789}`              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
|