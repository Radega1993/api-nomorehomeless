define({ "api": [
  {
    "type": "delete",
    "url": "/categoria/:id",
    "title": "Delete Category",
    "name": "DeleteCategoria",
    "group": "Categoria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Category unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Result of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "homeless",
            "description": "<p>State of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isLogged",
            "description": "<p>Loging state of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellido",
            "description": "<p>Surname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ok\": true,\n  \"categoria\": {\n     \"_id\": \"5e8324fdd3ac3e44293342ac\",\n     \"nombre\": \"comer\",\n     \"descripcion\": \"lugares para comer\",\n     \"__v\": 0\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CategoryNotDeleted",
            "description": "<p>The Category was not created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n    \"ok\": false,\n    \"err\": {\n        \"message\": \"categoria no encontrada\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/categoria.js",
    "groupTitle": "Categoria"
  },
  {
    "type": "get",
    "url": "/categoria",
    "title": "Request all categories information",
    "name": "GetCategoria",
    "group": "Categoria",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Result of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "categorias",
            "description": "<p>Caregories of the system.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ok\": true,\n  \"categorias\":[\n  {\n    \"_id\": \"5e77a97e662f4d75dcc174d9\",\n    \"nombre\": \"consigna\",\n    \"descripcion\": \"lugares para guardar tus objetos\",\n    \"__v\": 0\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n    \"ok\": false,\n    \"err\": {\n        \"message\": \"Caregorias no encontradas\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/categoria.js",
    "groupTitle": "Categoria"
  },
  {
    "type": "post",
    "url": "/categoria",
    "title": "Create Category",
    "name": "PostCategoria",
    "group": "Categoria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Description of the Category.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Result of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Description of the Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ok\": true,\n  \"categoria\": {\n     \"_id\": \"5e8324fdd3ac3e44293342ac\",\n     \"nombre\": \"comer\",\n     \"descripcion\": \"lugares para comer\",\n     \"__v\": 0\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotCreated",
            "description": "<p>The User was not created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n    \"ok\": false,\n    \"err\": {\n        \"message\": \"usuario no guardado\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/categoria.js",
    "groupTitle": "Categoria"
  },
  {
    "type": "put",
    "url": "/categoria/:id",
    "title": "Modify Category",
    "name": "PutCategoria",
    "group": "Categoria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Category unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nombre",
            "description": "<p>Name of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "descripcion",
            "description": "<p>Description of the Category.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Result of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Description of the Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ok\": true,\n  \"categoria\": {\n     \"_id\": \"5e8324fdd3ac3e44293342ac\",\n     \"nombre\": \"comer\",\n     \"descripcion\": \"lugares para comer\",\n     \"__v\": 0\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CategoryNotModify",
            "description": "<p>The Category was not modify.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n    \"ok\": false,\n    \"err\": {\n        \"message\": \"La categoria no existe\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/categoria.js",
    "groupTitle": "Categoria"
  },
  {
    "type": "get",
    "url": "/imagen/:tipo/:img",
    "title": "Request image",
    "name": "GetImage",
    "group": "Imagenes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>User ID Unique.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Tipe od upload usuarios o productos.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "archivo",
            "description": "<p>File to upload.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "imagen",
            "description": "<p>Show the image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The image was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"swow default image\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/imagenes.js",
    "groupTitle": "Imagenes"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login User",
    "name": "PostLogin",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Result of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "homeless",
            "description": "<p>State of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isLogged",
            "description": "<p>Loging state of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellido",
            "description": "<p>Surname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ok\": true,\n  \"usuario\": {\n    \"role\": \"USER_ROLE\",\n    \"homeless\": false,\n    \"isLogged\": true,\n    \"_id\": \"5e831411e2c1d331f82c244d\",\n    \"nombre\": \"testdoc\",\n    \"apellido\": \"elmio\",\n    \"email\": \"testdoc@emlio.com\",\n    \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotLogin",
            "description": "<p>The User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n    \"ok\": false,\n    \"err\": {\n        \"message\": \"Usuario o contraseña incorrectos\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/login.js",
    "groupTitle": "Login"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Logout User",
    "name": "PostLogout",
    "group": "Logout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Result of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "homeless",
            "description": "<p>State of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isLogged",
            "description": "<p>Loging state of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellido",
            "description": "<p>Surname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ok\": true,\n  \"usuario\": {\n    \"role\": \"USER_ROLE\",\n    \"homeless\": false,\n    \"isLogged\": false,\n    \"_id\": \"5e831411e2c1d331f82c244d\",\n    \"nombre\": \"testdoc\",\n    \"apellido\": \"elmio\",\n    \"email\": \"testdoc@emlio.com\",\n    \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotLogout",
            "description": "<p>The email was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n    \"ok\": false,\n    \"err\": {\n        \"message\": \"Email no enviado\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/login.js",
    "groupTitle": "Logout"
  },
  {
    "type": "delete",
    "url": "/producto/:id",
    "title": "Delete Product",
    "name": "DeleteProducto",
    "group": "Producto",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Category unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Result of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "producto",
            "description": "<p>Products of the system.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "img",
            "description": "<p>image of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of products of the system.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of products.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Address of products.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "horario",
            "description": "<p>Times of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telephone of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Info from category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Info of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ok\": true,\n  \"producto\": {\n        \"img\": true,\n        \"_id\": \"5e78e2e9291a19689a93e9e8\",\n        \"nombre\": \"hostal de javier\",\n        \"descripcion\": \"gran hostal\",\n        \"direccion\": \"C/ test 25\",\n        \"horario\": \"de 8 a 18\",\n        \"telefono\": \"6123456778\",\n        \"categoria\": {\n            \"_id\": \"5e77a95b662f4d75dcc174d6\",\n            \"nombre\": \"dormir\"\n        },\n        \"usuario\": null,\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotCreated",
            "description": "<p>The Product was not deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n    \"ok\": false,\n    \"err\": {\n        \"message\": \"producto no encontrado\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/producto.js",
    "groupTitle": "Producto"
  },
  {
    "type": "get",
    "url": "/producto",
    "title": "Request all products information",
    "name": "GetProducto",
    "group": "Producto",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Result of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "productos",
            "description": "<p>Products of the system.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ok\": true,\n  \"productos\": [\n    {\n        \"img\": true,\n        \"_id\": \"5e78e2e9291a19689a93e9e8\",\n        \"nombre\": \"hostal de javier\",\n        \"descripcion\": \"gran hostal\",\n        \"direccion\": \"C/ test 25\",\n        \"horario\": \"de 8 a 18\",\n        \"telefono\": \"6123456778\",\n        \"categoria\": {\n            \"_id\": \"5e77a95b662f4d75dcc174d6\",\n            \"nombre\": \"dormir\"\n        },\n        \"usuario\": null,\n        \"__v\": 0\n    },\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>The products was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n    \"ok\": false,\n    \"err\": {\n        \"message\": \"productos no encontradas\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/producto.js",
    "groupTitle": "Producto"
  },
  {
    "type": "get",
    "url": "/producto/buscar/:id",
    "title": "Request products information by name",
    "name": "GetProductoId",
    "group": "Producto",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Product.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Result of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "producto",
            "description": "<p>Products of the system.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "img",
            "description": "<p>image of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of products of the system.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of products.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Address of products.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "horario",
            "description": "<p>Times of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telephone of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Info from category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Info of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ok\": true,\n  \"producto\": {\n        \"img\": true,\n        \"_id\": \"5e78e2e9291a19689a93e9e8\",\n        \"nombre\": \"hostal de javier\",\n        \"descripcion\": \"gran hostal\",\n        \"direccion\": \"C/ test 25\",\n        \"horario\": \"de 8 a 18\",\n        \"telefono\": \"6123456778\",\n        \"categoria\": {\n            \"_id\": \"5e77a95b662f4d75dcc174d6\",\n            \"nombre\": \"dormir\"\n        },\n        \"usuario\": null,\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>The products was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n    \"ok\": false,\n    \"err\": {\n        \"message\": \"producto no encontrado\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/producto.js",
    "groupTitle": "Producto"
  },
  {
    "type": "get",
    "url": "/producto/buscar/:nombre",
    "title": "Request products information by name",
    "name": "GetProductoNombre",
    "group": "Producto",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the Product.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Result of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "producto",
            "description": "<p>Products of the system.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "img",
            "description": "<p>image of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of products of the system.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of products.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Address of products.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "horario",
            "description": "<p>Times of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Info from category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Info of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ok\": true,\n  \"producto\": {\n        \"img\": true,\n        \"_id\": \"5e78e2e9291a19689a93e9e8\",\n        \"nombre\": \"hostal de javier\",\n        \"descripcion\": \"gran hostal\",\n        \"direccion\": \"C/ test 25\",\n        \"horario\": \"de 8 a 18\",\n        \"telefono\": \"6123456778\",\n        \"categoria\": {\n            \"_id\": \"5e77a95b662f4d75dcc174d6\",\n            \"nombre\": \"dormir\"\n        },\n        \"usuario\": null,\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>The products was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n    \"ok\": false,\n    \"err\": {\n        \"message\": \"producto no encontrado\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/producto.js",
    "groupTitle": "Producto"
  },
  {
    "type": "post",
    "url": "/producto",
    "title": "Create Product",
    "name": "PostProducto",
    "group": "Producto",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "img",
            "description": "<p>image of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of products.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Description of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Address of products.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "horario",
            "description": "<p>Times of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>ID from category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Id of the user post.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "telefono",
            "description": "<p>Telephone of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Result of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "producto",
            "description": "<p>Products of the system.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "img",
            "description": "<p>image of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of products of the system.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of products.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Address of products.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "horario",
            "description": "<p>Times of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Info from category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Info of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ok\": true,\n  \"producto\": {\n        \"img\": true,\n        \"_id\": \"5e78e2e9291a19689a93e9e8\",\n        \"nombre\": \"hostal de javier\",\n        \"descripcion\": \"gran hostal\",\n        \"direccion\": \"C/ test 25\",\n        \"horario\": \"de 8 a 18\",\n        \"telefono\": \"6123456778\",\n        \"categoria\": {\n            \"_id\": \"5e77a95b662f4d75dcc174d6\",\n            \"nombre\": \"dormir\"\n        },\n        \"usuario\": null,\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotCreated",
            "description": "<p>The Product was not created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n    \"ok\": false,\n    \"err\": {\n        \"message\": \"producto no guardado\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/producto.js",
    "groupTitle": "Producto"
  },
  {
    "type": "put",
    "url": "/producto/:id",
    "title": "Update Product",
    "name": "PutProducto",
    "group": "Producto",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Category unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "img",
            "description": "<p>image of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nombre",
            "description": "<p>Name of products.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "descripcion",
            "description": "<p>Description of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "direccion",
            "description": "<p>Address of products.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "horario",
            "description": "<p>Times of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "categoria",
            "description": "<p>ID from category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "usuario",
            "description": "<p>Id of the user post.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "telefono",
            "description": "<p>Telephone of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Result of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "producto",
            "description": "<p>Products of the system.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "img",
            "description": "<p>image of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of products of the system.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of products.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Address of products.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "horario",
            "description": "<p>Times of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Info from category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Info of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ok\": true,\n  \"producto\": {\n        \"img\": true,\n        \"_id\": \"5e78e2e9291a19689a93e9e8\",\n        \"nombre\": \"hostal de javier\",\n        \"descripcion\": \"gran hostal\",\n        \"direccion\": \"C/ test 25\",\n        \"horario\": \"de 8 a 18\",\n        \"telefono\": \"6123456778\",\n        \"categoria\": {\n            \"_id\": \"5e77a95b662f4d75dcc174d6\",\n            \"nombre\": \"dormir\"\n        },\n        \"usuario\": null,\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotCreated",
            "description": "<p>The Product was not updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n    \"ok\": false,\n    \"err\": {\n        \"message\": \"producto no guardado\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/producto.js",
    "groupTitle": "Producto"
  },
  {
    "type": "get",
    "url": "/ping",
    "title": "Request server conectivity",
    "name": "ping",
    "group": "Server",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pong",
            "description": "<p>Recive pong from server!.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/server.js",
    "groupTitle": "Server"
  },
  {
    "type": "get",
    "url": "/status",
    "title": "Request server Status",
    "name": "status",
    "group": "Server",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Ok",
            "description": "<p>Recive ok from server!.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/server.js",
    "groupTitle": "Server"
  },
  {
    "type": "put",
    "url": "/upload",
    "title": "Upload Image",
    "name": "PutUpload",
    "group": "Upload",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>User ID Unique.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Tipe od upload usuarios o productos.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "archivo",
            "description": "<p>File to upload.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Result of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>Image upload.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ok\": true,\n  \"img\": \"5e78e2e9291a19689a93e9e8-909.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ImageNotUpload",
            "description": "<p>The image was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n    \"ok\": false,\n    \"err\": {\n        \"message\": \"Los tipos permitida son: productos, usuarios\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/upload.js",
    "groupTitle": "Upload"
  },
  {
    "type": "delete",
    "url": "/usuario/:id",
    "title": "Delete User",
    "name": "DeleteUsuario",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Result of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "homeless",
            "description": "<p>State of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isLogged",
            "description": "<p>Loging state of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellido",
            "description": "<p>Surname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ok\": true,\n  \"usuario\": {\n    \"role\": \"USER_ROLE\",\n    \"homeless\": false,\n    \"isLogged\": false,\n    \"_id\": \"5e831411e2c1d331f82c244d\",\n    \"nombre\": \"testmod\",\n    \"apellido\": \"elmio\",\n    \"email\": \"testdoc@emlio.com\",\n    \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotDeleted",
            "description": "<p>The User was not created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n    \"ok\": false,\n    \"err\": {\n        \"message\": \"usuario no encontrado\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/usuario.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/usuario",
    "title": "Request all User information",
    "name": "GetAllUsuario",
    "group": "Usuario",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Result of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "usuarios",
            "description": "<p>Users of the system.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ok\": true,\n  \"usuarios\":[\n  {\n     \"role\": \"USER_ROLE\",\n     \"homeless\": false,\n     \"_id\": \"5e7bb2a5e2f78255fbdeccb5\",\n     \"nombre\": \"test\",\n     \"apellido\": \"elmio\",\n     \"email\": \"testvalidacion@emlio.com\"\n    }\n  ],\n  \"total\": 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n    \"ok\": false,\n    \"err\": {\n        \"message\": \"usuario no encontrado\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/usuario.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/usuario/:id",
    "title": "Request User information",
    "name": "GetUsuario",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Result of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "homeless",
            "description": "<p>State of the user of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellido",
            "description": "<p>Surname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"ok\": true,\n\"usuario\": {\n   \"role\": \"USER_ROLE\",\n   \"homeless\": false,\n   \"_id\": \"5e7bb2a5e2f78255fbdeccb5\",\n   \"nombre\": \"test\",\n   \"apellido\": \"elmio\",\n   \"email\": \"testvalidacion@emlio.com\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n    \"ok\": false,\n    \"err\": {\n        \"message\": \"usuario no encontrado\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/usuario.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "post",
    "url": "/usuario",
    "title": "Create User",
    "name": "PostUsuario",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellido",
            "description": "<p>Surname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwordVerification",
            "description": "<p>Repeat password of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Result of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "homeless",
            "description": "<p>State of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isLogged",
            "description": "<p>Loging state of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellido",
            "description": "<p>Surname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ok\": true,\n  \"usuario\": {\n    \"role\": \"USER_ROLE\",\n    \"homeless\": false,\n    \"isLogged\": false,\n    \"_id\": \"5e831411e2c1d331f82c244d\",\n    \"nombre\": \"testdoc\",\n    \"apellido\": \"elmio\",\n    \"email\": \"testdoc@emlio.com\",\n    \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotCreated",
            "description": "<p>The User was not created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n    \"ok\": false,\n    \"err\": {\n        \"message\": \"usuario no guardado\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/usuario.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "put",
    "url": "/usuario/:id",
    "title": "Modify User",
    "name": "PutUsuario",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nombre",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "apellido",
            "description": "<p>Surname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Result of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "homeless",
            "description": "<p>State of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isLogged",
            "description": "<p>Loging state of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellido",
            "description": "<p>Surname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ok\": true,\n  \"usuario\": {\n    \"role\": \"USER_ROLE\",\n    \"homeless\": false,\n    \"isLogged\": false,\n    \"_id\": \"5e831411e2c1d331f82c244d\",\n    \"nombre\": \"testmod\",\n    \"apellido\": \"elmio\",\n    \"email\": \"testdoc@emlio.com\",\n    \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotModify",
            "description": "<p>The User was not created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n    \"ok\": false,\n    \"err\": {\n        \"message\": \"usuario no guardado\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/usuario.js",
    "groupTitle": "Usuario"
  }
] });