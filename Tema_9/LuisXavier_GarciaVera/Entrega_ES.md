### Parte I) Generar un alias
- 1) Genera un alias para el indice employees, que se llamará ``employees-alias``. A partir de ahora realizaremos las consultas siempre sobre este alias y no sobre el índice original.
curl --location --request POST 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/_aliases' \
--header 'Content-Type: application/json' \
--data-raw '{
    "actions": [
        {
            "add": {
                "index": "employees",
                "alias": "employees-alias"
            }
        }
    ]
}'

### Parte II) Inserción de elementos
- 1) Inserta un nuevo elemento en el índice utilizando tus datos (puedes inventartelos si lo consideras). Guarda el ID de documento que has obtenido tras la creacion del elemento.
curl --location --request POST 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/employees-alias/_doc' \
--header 'Content-Type: application/json' \
--data-raw '{
   "FirstName":"Luis Xavier",
   "LastName":"Garcia Vera",
   "Designation":"Software Developer",
   "Salary":"1000000",
   "DateOfJoining":"2019-08-05",
   "Address":"Francisco Segura 1320 entre Jose de Antepara y Machala",
   "Gender":"Male",
   "Age":35,
   "MaritalStatus":"Married",
   "Interests":"Sports,Animals/pets/cats"
}'

### Parte III) Obtención simple de elementos
- 1) Utilizando el ID del paso anterior, obtén los datos de tu registro. Deberías obtener lo mismo que anteriormente escribiste.
curl --location --request GET 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/employees-alias/_doc/M5vdipABFkhh3p7v8qIs'

### Parte IV) Eliminación de elementos
- 1) Elimina el elemento que has creado anteriormente.
curl --location --request DELETE 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/employees-alias/_doc/M5vdipABFkhh3p7v8qIs'

### Parte V) Consultas
- 1) Obtener empleados cuyo puesto sea ``Software Engineer``. [Revisa la documentación sobre term queries](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-term-query.html)
curl --location --request GET 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "query": {
        "term": {
            "Designation": {
                "value": "Software Engineer"
            }
        }
    }
}'

- 2) Obtener empleados cuyo puesto NO sea ``Software Engineer``. [Revisa la documentación sobre bool queries](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-bool-query.html)
curl --location --request GET 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
  "query": {
    "bool": {
      "must_not": {
        "match": {
          "Designation": "Software Engineer"
        }
      }
    }
  }
}'

- 3) Obtener la primera página de empleados cuya ``designation`` sea ``Software Engineer`` asumiendo un tamaño de página de 35 elementos. [Revisa la documentación sobre paginación](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/paginate-search-results.html)
curl --location --request GET 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
  "query": {
    "match": {
      "Designation": "Software Engineer"
    }
  },
  "from": 0,
  "size": 35
}
'

- 4) Obtener la tercera página de empleados cuya ``designation`` sea ``Software Engineer`` asumiendo un tamaño de página de 35 elementos.
curl --location --request GET 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
  "query": {
    "match": {
      "Designation": "Software Engineer"
    }
  },
  "from": 3,
  "size": 35
}
'
- 5) Obtener los primeros 13 empleados cuyo salario sea mayor a 67.000 dólares. [Revisa la documentación sobre range queries](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-range-query.html)
curl --location --request GET 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
  "query": {
    "range": {
      "Salary": {
        "gte": 67000
      }
    }
  },
  "size": 13
}
'

- 6) Obtener <b> el número total </b> que hayan entrado en la empresa en el mes de Mayo del año 2003. No se pide una consulta específica, solo saber el número total de hits.
curl --location --request GET 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
  "size": 0,
  "query": {
    "range": {
      "DateOfJoining": {
        "gte": "2003-05-01",
        "lt": "2003-06-01"
      }
    }
  }
}
'

- 7) Obtener empleados cuyo nombre sea ``NATALIE``. [Revisa la documentación sobre match queries](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-match-query.html)
curl --location --request GET 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "query": {
        "match": {
            "FirstName": "NATALIE"
        }
    }
}
'

- 8) Obtener empleados cuya dirección sea o contenga ``Street``. [Revisa la documentación sobre queries sobre campos search-as-you-type](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-as-you-type.html)
curl --location --request GET 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
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

- 9) Obtener empleados cuya dirección sea o contenga ``wood``.
curl --location --request GET 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
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

- 10) Obtener empleados interesados en ``Wrestling``.
curl --location --request GET 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "query": {
        "match": {
            "Interests": "Wrestling"
        }
    }
}'

- 11) Obtener el número de hombres y mujeres interesad@s en ``Wrestling``.[Revisa la documentación sobre term aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations-bucket-terms-aggregation.html)
curl --location --request GET 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "size": 0,
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
    }
}'

- 12) En base a la consulta anterior, obtener la edad media de cada grupo (grupo hombres y grupo mujeres). [Revisa la documentación sobre sub-agregaciones](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations.html) y [sobre la agregación avg](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations-metrics-avg-aggregation.html)
curl --location --request GET 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "size": 0,
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
            "aggs":{
                "Edad media":{
                    "avg":{
                        "field":"Age"
                    }
                }
            }
        }
    }
}'

- 13) Obtener el número de empleados en función de los siguientes tramos de salario: menor de 60.000 dólares (``tramo 1``), entre 60.000 dólares y 67.000 dólares (``tramo 2``) y superior a 67.000 dólares (``tramo 3``). [Revisa la documentación sobre range aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations-bucket-range-aggregation.html)
curl --location --request GET 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "size": 0,
    "query": {
        "multi_match": {
            "query": "Stre",
            "type": "bool_prefix",
            "fields": [
                "Address",
                "Address._2gram",
                "Address._3gram"
            ]
        }
    },
    "aggs": {
        "Rangos de edad": {
            "range": {
                "field": "Salary",
                "ranges": [
                    {"key": "De 60.000 a 67.000", "from": 60000, "to":67000},
                    {"key": "A partir de 67.000", "from": 67000},
                    {"key": "Hasta 60.000", "to": 60000}
                ]
            }
        }
    }
}'

- 14) En base a la consulta anterior, para cada tramo, hallar el número de empleados que están casados y no casados.
curl --location --request GET 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "size": 0,
    "query": {
        "multi_match": {
            "query": "Stre",
            "type": "bool_prefix",
            "fields": [
                "Address",
                "Address._2gram",
                "Address._3gram"
            ]
        }
    },
    "aggs": {
        "Rangos de edad": {
            "range": {
                "field": "Salary",
                "ranges": [
                    {"key": "De 60.000 a 67.000", "from": 60000, "to":67000},
                    {"key": "A partir de 67.000", "from": 67000},
                    {"key": "Hasta 60.000", "to": 60000}
                ]
            }
        },
        "Estado Civil": {
            "terms": {
                "field": "MaritalStatus"
            }
        }
    }
}'

### Parte VI) Crear otro índice y modificar el alias
- 1) Crea un nuevo índice de la misma forma que hiciste al principio, pero ahora llámalo ``employees-v2`` y mete en él todos los datos del fichero de prueba. Modifica el alias ``employees-alias`` que creaste antes para que apunte tanto al índice ``employees`` original como al nuevo ``employees-v2``. Puedes comprobar que lo has hecho correctamente ejecutando la operación "Obtener todos los alias" de la colección de Postman.
curl --location --request PUT 'https://5yjretf4gd:qc3df61nrn@lxgv12-search-8274663454.us-east-1.bonsaisearch.net:443/employees-v2' \
--header 'Content-Type: application/json' \
--data-raw '{
   "mappings":{
      "properties":{
         "Address":{
            "type":"search_as_you_type"
         },
         "Age":{
            "type":"integer"
         },
         "DateOfJoining":{
            "type":"date",
            "format":"yyyy-MM-dd"
         },
         "Designation":{
            "type":"keyword"
         },
         "FirstName":{
            "type":"text"
         },
         "Gender":{
            "type":"keyword"
         },
         "Interests":{
            "type":"text"
         },
         "LastName":{
            "type":"text"
         },
         "MaritalStatus":{
            "type":"keyword"
         },
         "Salary":{
            "type":"double"
         }
      }
   }
}'

- 2) Realiza alguna de las consultas anteriores. ¿Qué observas?
- 3) Elimina ``employees`` del conjunto de índices a los que hace referencia el alias.
