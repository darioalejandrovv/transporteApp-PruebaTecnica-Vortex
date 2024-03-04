# DESCRIPCION DEL RESTFULL API
Aplicación backend desarrollada en nodejs con loopback de IBM como framework, uso de arquitectura hexagonal y Domain Drive Design.
Capas de abstracción:

- Datasource (ORM Postgres)
- Modelo
- Repositorio
- Controller

Se sigue el formato de respuesta de los endpoints según Swagger/OPENAPI.
Gestor de manejo de error integrado.
Uso de SOLID y Arquitecturas limpias.
Se incluye archivo de migración de DB en Postgres para subida (UP) y baja de DB (down), con nombre "migrationSQL-up.sql" en carpeta raiz.




# PASOS PARA EJECUTAR EL BACKEND
- Teniendo instalado postgres crear una database llamada "transport"
- verificar que las credenciales del motor de base de datos correspondan con los del JSON de config, presente en el archivo src/datasources/db.datasource.ts
const config = {
  name: 'db',
  connector: 'postgresql',
  url: '',
  host: 'localhost',
  port: 5433,
  user: 'postgres',
  password: 'postgres',
  schema: 'public',
  database: 'transport'
};

- En la database correr el script de migración "migrationSQL-up"
- Para correr el backend en consola el comando "npm run start".

Descripción de los endpoints y tipos de respuesta en la siguiente sección.


# EJEMPLO BODY DE ENDPOINTS (campos mínimos)

transportador = {
  "identificacion": "1090456789",
  "apellido": "Vasquez",
  "nombre": "Dario",
  "telefono": "3114664536",
  "direccion": "Evergreen 123"
}
vehiculo = {
  "modelo": "2011",
  "placa": "SWE-34B",
  "capacidad": "12"
}


# DESCRIPCION DE ENDPOINT DEL RESTFULLAPI SEGUN OPENAPI
{
    "openapi": "3.0.0",
    "info": {
        "title": "transporte",
        "version": "0.0.1",
        "description": "transporte",
        "contact": {
            "name": "Dario Alejandro",
            "email": "darioalejandrovv@gmail.com"
        }
    },
    "paths": {
        "/conductores/{idConductor}/asociar-vehiculo/{idVehiculo}": {
            "patch": {
                "x-controller-name": "AsociacionController",
                "x-operation-name": "asociarVehiculo",
                "tags": [
                    "AsociacionController"
                ],
                "responses": {
                    "200": {
                        "description": "Return value of AsociacionController.asociarVehiculo"
                    }
                },
                "parameters": [
                    {
                        "name": "idConductor",
                        "in": "path",
                        "schema": {
                            "type": "number"
                        },
                        "required": true
                    },
                    {
                        "name": "idVehiculo",
                        "in": "path",
                        "schema": {
                            "type": "number"
                        },
                        "required": true
                    }
                ],
                "operationId": "AsociacionController.asociarVehiculo"
            }
        },
        "/conductores/{idConductor}/desasociar-vehiculo/{idVehiculo}": {
            "patch": {
                "x-controller-name": "AsociacionController",
                "x-operation-name": "desasociarVehiculo",
                "tags": [
                    "AsociacionController"
                ],
                "responses": {
                    "200": {
                        "description": "Return value of AsociacionController.desasociarVehiculo"
                    }
                },
                "parameters": [
                    {
                        "name": "idConductor",
                        "in": "path",
                        "schema": {
                            "type": "number"
                        },
                        "required": true
                    },
                    {
                        "name": "idVehiculo",
                        "in": "path",
                        "schema": {
                            "type": "number"
                        },
                        "required": true
                    }
                ],
                "operationId": "AsociacionController.desasociarVehiculo"
            }
        },
        "/conductores/{id}/vehiculos-disponibles": {
            "get": {
                "x-controller-name": "AsociacionController",
                "x-operation-name": "vehiculosDisponibles",
                "tags": [
                    "AsociacionController"
                ],
                "responses": {
                    "200": {
                        "description": "Return value of AsociacionController.vehiculosDisponibles"
                    }
                },
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "schema": {
                            "type": "number"
                        },
                        "required": true
                    }
                ],
                "operationId": "AsociacionController.vehiculosDisponibles"
            }
        },
        "/conductores/{id}": {
            "patch": {
                "x-controller-name": "ConductorController",
                "x-operation-name": "updateById",
                "tags": [
                    "ConductorController"
                ],
                "responses": {
                    "200": {
                        "description": "Return value of ConductorController.updateById"
                    }
                },
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "schema": {
                            "type": "number"
                        },
                        "required": true
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Conductor"
                            }
                        }
                    },
                    "x-parameter-index": 1
                },
                "operationId": "ConductorController.updateById"
            },
            "get": {
                "x-controller-name": "ConductorController",
                "x-operation-name": "findById",
                "tags": [
                    "ConductorController"
                ],
                "responses": {
                    "200": {
                        "description": "Return value of ConductorController.findById"
                    }
                },
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "schema": {
                            "type": "number"
                        },
                        "required": true
                    }
                ],
                "operationId": "ConductorController.findById"
            },
            "delete": {
                "x-controller-name": "ConductorController",
                "x-operation-name": "deleteById",
                "tags": [
                    "ConductorController"
                ],
                "responses": {
                    "200": {
                        "description": "Return value of ConductorController.deleteById"
                    }
                },
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "schema": {
                            "type": "number"
                        },
                        "required": true
                    }
                ],
                "operationId": "ConductorController.deleteById"
            }
        },
        "/conductores": {
            "post": {
                "x-controller-name": "ConductorController",
                "x-operation-name": "create",
                "tags": [
                    "ConductorController"
                ],
                "responses": {
                    "200": {
                        "description": "Return value of ConductorController.create"
                    }
                },
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Conductor"
                            }
                        }
                    }
                },
                "operationId": "ConductorController.create"
            },
            "get": {
                "x-controller-name": "ConductorController",
                "x-operation-name": "find",
                "tags": [
                    "ConductorController"
                ],
                "responses": {
                    "200": {
                        "description": "Return value of ConductorController.find"
                    }
                },
                "operationId": "ConductorController.find"
            }
        },
        "/ping": {
            "get": {
                "x-controller-name": "PingController",
                "x-operation-name": "ping",
                "tags": [
                    "PingController"
                ],
                "responses": {
                    "200": {
                        "description": "Ping Response",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/PingResponse"
                                }
                            }
                        }
                    }
                },
                "operationId": "PingController.ping"
            }
        },
        "/vehiculos/{id}": {
            "patch": {
                "x-controller-name": "VehiculoController",
                "x-operation-name": "updateById",
                "tags": [
                    "VehiculoController"
                ],
                "responses": {
                    "200": {
                        "description": "Return value of VehiculoController.updateById"
                    }
                },
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "schema": {
                            "type": "number"
                        },
                        "required": true
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Vehiculo"
                            }
                        }
                    },
                    "x-parameter-index": 1
                },
                "operationId": "VehiculoController.updateById"
            },
            "get": {
                "x-controller-name": "VehiculoController",
                "x-operation-name": "findById",
                "tags": [
                    "VehiculoController"
                ],
                "responses": {
                    "200": {
                        "description": "Return value of VehiculoController.findById"
                    }
                },
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "schema": {
                            "type": "number"
                        },
                        "required": true
                    }
                ],
                "operationId": "VehiculoController.findById"
            },
            "delete": {
                "x-controller-name": "VehiculoController",
                "x-operation-name": "deleteById",
                "tags": [
                    "VehiculoController"
                ],
                "responses": {
                    "200": {
                        "description": "Return value of VehiculoController.deleteById"
                    }
                },
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "schema": {
                            "type": "number"
                        },
                        "required": true
                    }
                ],
                "operationId": "VehiculoController.deleteById"
            }
        },
        "/vehiculos": {
            "post": {
                "x-controller-name": "VehiculoController",
                "x-operation-name": "create",
                "tags": [
                    "VehiculoController"
                ],
                "responses": {
                    "200": {
                        "description": "Return value of VehiculoController.create"
                    }
                },
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Vehiculo"
                            }
                        }
                    }
                },
                "operationId": "VehiculoController.create"
            },
            "get": {
                "x-controller-name": "VehiculoController",
                "x-operation-name": "find",
                "tags": [
                    "VehiculoController"
                ],
                "responses": {
                    "200": {
                        "description": "Return value of VehiculoController.find"
                    }
                },
                "operationId": "VehiculoController.find"
            }
        }
    },
    "servers": [
        {
            "url": "http://[::1]:3000"
        }
    ],
    "components": {
        "schemas": {
            "Vehiculo": {
                "title": "Vehiculo",
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number"
                    },
                    "modelo": {
                        "type": "string"
                    },
                    "placa": {
                        "type": "string"
                    },
                    "capacidad": {
                        "type": "string"
                    },
                    "conductorId": {
                        "type": "number"
                    },
                    "createdAt": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "updatedAt": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "createdBy": {
                        "type": "string"
                    },
                    "updatedBy": {
                        "type": "string"
                    }
                },
                "required": [
                    "modelo",
                    "placa"
                ],
                "additionalProperties": false
            },
            "Conductor": {
                "title": "Conductor",
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number"
                    },
                    "identificacion": {
                        "type": "string"
                    },
                    "apellido": {
                        "type": "string"
                    },
                    "nombre": {
                        "type": "string"
                    },
                    "telefono": {
                        "type": "string"
                    },
                    "direccion": {
                        "type": "string"
                    },
                    "createdAt": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "updatedAt": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "createdBy": {
                        "type": "string"
                    },
                    "updatedBy": {
                        "type": "string"
                    }
                },
                "required": [
                    "identificacion",
                    "nombre",
                    "telefono"
                ],
                "additionalProperties": false
            },
            "PingResponse": {
                "type": "object",
                "title": "PingResponse",
                "properties": {
                    "greeting": {
                        "type": "string"
                    },
                    "date": {
                        "type": "string"
                    },
                    "url": {
                        "type": "string"
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true
                    }
                }
            }
        }
    }
}
