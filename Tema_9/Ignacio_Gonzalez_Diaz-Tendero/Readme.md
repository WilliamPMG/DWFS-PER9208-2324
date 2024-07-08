# Consultas con Elasticsearch

Con este ejercicio trataremos de asimilar los conceptos estudiados en clase sobre los tipos de datos y operaciones en Elasticsearch.
Deberás crear un clúster de prueba tal como se indica en [estas instrucciones](https://github.com/UnirCs/elasticsearch-operations-postman) e insertar los datos de prueba que se presentan. Encontrarás también una colección de Postman que puede ser de gran ayuda a la hora de realizar el ejercicio y trabajar con Elasticsearch en general.
Recuerda hacer uso de la [documentación](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl.html).

## 1. Ejercicio

<b> Para cada operación solicitada, incluye el comando cURL que se obtiene de Postman </b> en un archivo Entrega_ES.md

### Parte I) Generar un alias
- 1) Genera un alias para el indice employees, que se llamará ``employees-alias``. A partir de ahora realizaremos las consultas siempre sobre este alias y no sobre el índice original.
    ```
   curl --location 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/_aliases' \
     --header 'Content-Type: application/json' \
     --data '{
     "actions": [
     {
     "add": {
     "index": "employees",
     "alias": "employees-alias"
     }
     }
     ]
     }'
  ```
### Parte II) Inserción de elementos
- 1) Inserta un nuevo elemento en el índice utilizando tus datos (puedes inventartelos si lo consideras). Guarda el ID de documento que has obtenido tras la creacion del elemento.
   ```  
  curl --location 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/employees/_doc' \
     --header 'Content-Type: application/json' \
     --data '{
     "FirstName":"Ignacio",
     "LastName":"Gonzalez",
     "Designation":"Software Architect",
     "Salary":"1000000",
     "DateOfJoining":"2024-03-18",
     "Address":"Calle Madrid, Getafe 28905",
     "Gender":"Male",
     "Age":26,
     "MaritalStatus":"Single",
     "Interests":"Gym, Eating, Sleeping, Programming, Music"
     }'
  ```
### Parte III) Obtención simple de elementos
- 1) Utilizando el ID del paso anterior, obtén los datos de tu registro. Deberías obtener lo mismo que anteriormente escribiste.
   ```  curl --location 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/employees/_doc/xHcXj5ABhbHMfDY1TaDj' ```
 
### Parte IV) Eliminación de elementos
- 1) Elimina el elemento que has creado anteriormente.
   ```  curl --location --request DELETE 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/employees/_doc/xHcXj5ABhbHMfDY1TaDj' ```

### Parte V) Consultas
- 1) Obtener empleados cuyo puesto sea ``Software Engineer``. [Revisa la documentación sobre term queries](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-term-query.html)
   ```  
  curl --location --request GET 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/employees/_search' \
     --header 'Content-Type: application/json' \
     --data '{
     "query": {
     "term": {
     "Designation": "Software Engineer"
     }
     }
     }
     ' 
     ```
- 2) Obtener empleados cuyo puesto NO sea ``Software Engineer``. [Revisa la documentación sobre bool queries](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-bool-query.html)
   ```  
  curl --location --request GET 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/employees/_search' \
     --header 'Content-Type: application/json' \
     --data '{
     "query": {
     "bool": {
     "must_not": {
     "match": {
     "Designation": "Software Engineer"
     }
     }
     }
     }
     }
     '
     ```
- 3) Obtener la primera página de empleados cuya ``designation`` sea ``Software Engineer`` asumiendo un tamaño de página de 35 elementos. [Revisa la documentación sobre paginación](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/paginate-search-results.html)
     ```  
     curl --location --request GET 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/employees/_search' \
     --header 'Content-Type: application/json' \
     --data '{
     "query": {
     "match": {
     "Designation": "Software Engineer"
     }
     },
     "size": 35
     }
     '
     ```
- 4) Obtener la tercera página de empleados cuya ``designation`` sea ``Software Engineer`` asumiendo un tamaño de página de 35 elementos.
    ```
   curl --location --request GET 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/employees/_search' \
     --header 'Content-Type: application/json' \
     --data '{
     "query": {
     "match": {
     "Designation": "Software Engineer"
     }
     },
     "size": 35,
     "from": 70
     }
     '
     ```
- 5) Obtener los primeros 13 empleados cuyo salario sea mayor a 67.000 dólares. [Revisa la documentación sobre range queries](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-range-query.html)
    ```
   curl --location --request GET 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/employees/_search' \
     --header 'Content-Type: application/json' \
     --data '{
     "query": {
     "range": {
     "Salary": {
     "gt": 67000
     }
     }
     },
     "size": 13
     }
     '
  ```
- 6) Obtener <b> el número total </b> que hayan entrado en la empresa en el mes de Mayo del año 2003. No se pide una consulta específica, solo saber el número total de hits.
    ```
   curl --location --request GET 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/employees/_search' \
     --header 'Content-Type: application/json' \
     --data '{
     "query": {
     "range": {
     "DateOfJoining": {
     "gte": "2003-05-01",
     "lte": "2003-06-01"
     }
     }
     }
     }
     '
  ```
- 7) Obtener empleados cuyo nombre sea ``NATALIE``. [Revisa la documentación sobre match queries](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-match-query.html)
     ```
     curl --location --request GET 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/employees/_search' \
     --header 'Content-Type: application/json' \
     --data '{
     "query": {
     "match": {
     "FirstName": "NATALIE"
     }
     }
     }'
     ```
- 8) Obtener empleados cuya dirección sea o contenga ``Street``. [Revisa la documentación sobre queries sobre campos search-as-you-type](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-as-you-type.html)
    ```
   curl --location --request GET 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/employees/_search' \
     --header 'Content-Type: application/json' \
     --data '{
     "query": {
     "multi_match": {
     "query": "Street",
     "type": "bool_prefix",
     "fields": [
     "Address",
     "Address._2gram",
     "Address._3gram"
     ]
     }
     }
     }'
  ```
- 9) Obtener empleados cuya dirección sea o contenga ``wood``.
    ```
   curl --location --request GET 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/employees/_search' \
     --header 'Content-Type: application/json' \
     --data '{
     "query": {
     "multi_match": {
     "query": "wood",
     "type": "bool_prefix",
     "fields": [
     "Address",
     "Address._2gram",
     "Address._3gram"
     ]
     }
     }
     }'
  ```
- 10) Obtener empleados interesados en ``Wrestling``.
     ```
   curl --location --request GET 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/employees/_search' \
      --header 'Content-Type: application/json' \
      --data '{
      "query": {
      "match": {
      "Interests": "Wrestling"
      }
      }
      }
      '
  ```
- 11) Obtener el número de hombres y mujeres interesad@s en ``Wrestling``.[Revisa la documentación sobre term aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations-bucket-terms-aggregation.html)
      ```
      curl --location --request GET 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/employees/_search' \
      --header 'Content-Type: application/json' \
      --data '{
      "query": {
      "match": {
      "Interests": "Wrestling"
      }
      },
      "aggs": {
      "Generos": {
      "terms": {
      "field": "Gender"
      }
      }
      },
      "size": 0
      }
      '
      ```
- 12) En base a la consulta anterior, obtener la edad media de cada grupo (grupo hombres y grupo mujeres). [Revisa la documentación sobre sub-agregaciones](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations.html) y [sobre la agregación avg](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations-metrics-avg-aggregation.html)
     ```
   curl --location --request GET 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/employees/_search' \
      --header 'Content-Type: application/json' \
      --data '{
      "query": {
      "match": {
      "Interests": "Wrestling"
      }
      },
      "aggs": {
      "Generos": {
      "terms": {
      "field": "Gender"
      },
      "aggs": {
      "media_edad": {
      "avg": {
      "field": "Age"
      }
      }
      }
      }
      },
      "size": 0
      }
      '
  ```
- 13) Obtener el número de empleados en función de los siguientes tramos de salario: menor de 60.000 dólares (``tramo 1``), entre 60.000 dólares y 67.000 dólares (``tramo 2``) y superior a 67.000 dólares (``tramo 3``). [Revisa la documentación sobre range aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations-bucket-range-aggregation.html)
      ```
      curl --location --request GET 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/employees/_search' \
      --header 'Content-Type: application/json' \
      --data '{
      "aggs": {
      "salary_ranges": {
      "range": {
      "field": "Salary",
      "ranges": [
      { "key": "tramo 1", "to": 59999 },
      { "key": "tramo 2", "from": 60000, "to": 67000 },
      { "key": "tramo 3", "from": 67001 }
      ]
      }
      }
      },
      "size": 0
      }
      '
      ```
- 14) En base a la consulta anterior, para cada tramo, hallar el número de empleados que están casados y no casados.
     ```
   curl --location --request GET 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/employees/_search' \
      --header 'Content-Type: application/json' \
      --data '{
      "aggs": {
      "salary_ranges": {
      "range": {
      "field": "Salary",
      "ranges": [
      { "key": "tramo 1", "to": 59999 },
      { "key": "tramo 2", "from": 60000, "to": 67000 },
      { "key": "tramo 3", "from": 67001 }
      ]
      },
      "aggs": {
      "marital_status": {
      "terms": {
      "field": "MaritalStatus"
      }
      }
      }
      }
      },
      "size": 0
      }
      '
  ```
### Parte VI) Crear otro índice y modificar el alias
- 1) Crea un nuevo índice de la misma forma que hiciste al principio, pero ahora llámalo ``employees-v2`` y mete en él todos los datos del fichero de prueba. Modifica el alias ``employees-alias`` que creaste antes para que apunte tanto al índice ``employees`` original como al nuevo ``employees-v2``. Puedes comprobar que lo has hecho correctamente ejecutando la operación "Obtener todos los alias" de la colección de Postman.
   ```
    {
     "employees": {
     "aliases": {
     "employees-alias": {}
     }
     },
     "employees-v2": {
     "aliases": {
     "employees-alias": {}
     }
     }
     }
  ```
- 2) Realiza alguna de las consultas anteriores. ¿Qué observas?
Se obtienen los mismos resultados que antes, pero el número de hits se ha duplicado.
 Antes
    ```
   {
     "hits": {
     "total": {
     "value": 4264
     }
     }
     }
  ```
    Después
    ```
   {
     "hits": {
     "total": {
     "value": 8528
     }
     }
     }
  ```
- 3) Elimina ``employees`` del conjunto de índices a los que hace referencia el alias.
    ```
   curl --location 'https://{{elasticsearch-host}}@employees-search-5133596887.us-east-1.bonsaisearch.net:443/_aliases' \
     --header 'Content-Type: application/json' \
     --data '{
     "actions": [
     {
     "remove": {
     "index": "employees",
     "alias": "employees-alias"
     }
     }
     ]
     }'
  ```
## 2. Entrega

Crea una carpeta con tu nombre y apellidos dentro de ``Tema_9``. Deberás incluir :

- Un archivo ``Entrega_ES.md`` con los comandos cURL obtenidos a través de Postman.