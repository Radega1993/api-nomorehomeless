const express = require('express');

const Producto = require('../models/producto');

const { verificaIsLogged } = require('../middlewares/autenticacion');

const app = express();



/**
 * @api {get} /producto Request all products information
 * @apiName GetProducto
 * @apiGroup Producto
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String[]} productos Products of the system.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": true,
 *       "productos": [
 *         {
 *             "img": true,
 *             "_id": "5e78e2e9291a19689a93e9e8",
 *             "nombre": "hostal de javier",
 *             "descripcion": "gran hostal",
 *             "direccion": "C/ test 25",
 *             "horario": "de 8 a 18",
 *             "telefono": "6123456778",
 *             "categoria": {
 *                 "_id": "5e77a95b662f4d75dcc174d6",
 *                 "nombre": "dormir"
 *             },
 *             "usuario": null,
 *             "__v": 0
 *         },
 *       ]
 *     }
 *
 * @apiError ProductNotFound The products was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "productos no encontradas"
 *     }
 * }
 */
app.get('/producto', (req, res) => {

  let desde = req.query.desde || 0;
  desde = Number(desde);

  Producto.find({})
    .sort('nombre')
    .skip(desde)
    .limit(5)
    .populate('usuario', 'nombre apellido email')
    .populate('categoria', 'nombre')
    .exec((err, productos) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }

      res.json({
        ok: true,
        productos
      });
    });
});


/**
 * @api {get} /producto/buscar/:nombre Request products information by name
 * @apiName GetProductoNombre
 * @apiGroup Producto
 *
 * @apiParam {String} nombre Name of the Product.
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String} producto Products of the system.
 * @apiSuccess {Boolean} img image of the product.
 * @apiSuccess {String} id ID of products of the system.
 * @apiSuccess {String} nombre Name of products.
 * @apiSuccess {String} descripcion Description of the product.
 * @apiSuccess {String} direccion Address of products.
 * @apiSuccess {String} horario Times of the product.
 * @apiSuccess {String} categoria Info from category.
 * @apiSuccess {String} usuario Info of the user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": true,
 *       "producto": {
 *             "img": true,
 *             "_id": "5e78e2e9291a19689a93e9e8",
 *             "nombre": "hostal de javier",
 *             "descripcion": "gran hostal",
 *             "direccion": "C/ test 25",
 *             "horario": "de 8 a 18",
 *             "telefono": "6123456778",
 *             "categoria": {
 *                 "_id": "5e77a95b662f4d75dcc174d6",
 *                 "nombre": "dormir"
 *             },
 *             "usuario": null,
 *             "__v": 0
 *         }
 *     }
 *
 * @apiError ProductNotFound The products was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "producto no encontrado"
 *     }
 * }
 */
app.get('/producto/buscar/:nombre', (req, res) => {

  let nombre = req.params.nombre;
  let regex = new RegExp(nombre, 'i');

  Producto.find({
      nombre: regex
    })
    .populate('usuario', 'nombre apellido email')
    .populate('categoria', 'nombre')
    .exec((err, productos) => {

      if (err) {
        return res.status(500).json({
          ok: false,
          err
        });
      }
      if (!productos) {
        return res.status(400).json({
          ok: false,
          err: {
            message: "El producto no existe. "
          }
        });
      }
      res.json({
        ok: true,
        productos
      });
    });
});

/**
 * @api {get} /producto/:id Request products information by id
 * @apiName GetProductoId
 * @apiGroup Producto
 *
 * @apiParam {String} id ID of the Product.
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String} producto Products of the system.
 * @apiSuccess {Boolean} img image of the product.
 * @apiSuccess {String} id ID of products of the system.
 * @apiSuccess {String} nombre Name of products.
 * @apiSuccess {String} descripcion Description of the product.
 * @apiSuccess {String} direccion Address of products.
 * @apiSuccess {String} horario Times of the product.
 * @apiSuccess {String} telefono Telephone of the product.
 * @apiSuccess {String} categoria Info from category.
 * @apiSuccess {String} usuario Info of the user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": true,
 *       "producto": {
 *             "img": true,
 *             "_id": "5e78e2e9291a19689a93e9e8",
 *             "nombre": "hostal de javier",
 *             "descripcion": "gran hostal",
 *             "direccion": "C/ test 25",
 *             "horario": "de 8 a 18",
 *             "telefono": "6123456778",
 *             "categoria": {
 *                 "_id": "5e77a95b662f4d75dcc174d6",
 *                 "nombre": "dormir"
 *             },
 *             "usuario": null,
 *             "__v": 0
 *         }
 *     }
 *
 * @apiError ProductNotFound The products was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "producto no encontrado"
 *     }
 * }
 */
app.get('/producto/:id', (req, res) => {

  let id = req.params.id;

  Producto.findById(id)
    .populate('usuario', 'nombre apellido email')
    .populate('categoria', 'nombre')
    .exec((err, productoDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        });
      }

      if (!productoDB) {
        return res.status(400).json({
          ok: false,
          err: {
            message: "El producto no existe. "
          }
        });
      }

      res.json({
        ok: true,
        producto: productoDB
      });
    });
});

/**
 * @api {post} /producto Create Product
 * @apiName PostProducto
 * @apiGroup Producto
 *
 * @apiParam {Boolean} img image of the product.
 * @apiParam {String} nombre Name of products.
 * @apiParam {String} descripcion Description of the product.
 * @apiParam {String} direccion Address of products.
 * @apiParam {String} [horario] Times of the product.
 * @apiSuccess {String} [telefono] Telephone of the product.
 * @apiParam {String} categoria ID from category.
 * @apiParam {String} usuario Id of the user post.
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String} producto Products of the system.
 * @apiSuccess {Boolean} img image of the product.
 * @apiSuccess {String} id ID of products of the system.
 * @apiSuccess {String} nombre Name of products.
 * @apiSuccess {String} descripcion Description of the product.
 * @apiSuccess {String} direccion Address of products.
 * @apiSuccess {String} horario Times of the product.
 * @apiSuccess {String} telefono Telephone of the product.
 * @apiSuccess {String} categoria Info from category.
 * @apiSuccess {String} usuario Info of the user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": true,
 *       "producto": {
 *             "img": true,
 *             "_id": "5e78e2e9291a19689a93e9e8",
 *             "nombre": "hostal de javier",
 *             "descripcion": "gran hostal",
 *             "direccion": "C/ test 25",
 *             "horario": "de 8 a 18",
 *             "telefono": "6123456778",
 *             "categoria": {
 *                 "_id": "5e77a95b662f4d75dcc174d6",
 *                 "nombre": "dormir"
 *             },
 *             "usuario": null,
 *             "__v": 0
 *         }
 *     }
 *
 * @apiError ProductNotCreated The Product was not created.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "producto no guardado"
 *     }
 * }
 */
app.post('/producto',  (req, res) => {

  let body = req.body;

  let producto = new Producto({
    nombre: body.nombre,
    descripcion: body.descripcion,
    direccion: body.direccion,
    horario: body.horario,
    telefono: body.telefono,
    coord: body.coord,
    observaciones: body.observaciones,
    img: body.img,
    categoria: body.categoria,
    usuario: body.usuario
  });

  producto.save((err, productoDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'producto no guardado'
        }
      });
    }

    res.json({
      ok: true,
      producto: productoDB
    });
  });

});

/**
 * @api {put} /producto/:id Update Product
 * @apiName PutProducto
 * @apiGroup Producto
 *
 * @apiParam {Number} id  Category unique ID.
 * @apiParam {Boolean} [img] image of the product.
 * @apiParam {String} [nombre] Name of products.
 * @apiParam {String} [descripcion] Description of the product.
 * @apiParam {String} [direccion] Address of products.
 * @apiParam {String} [horario] Times of the product.
 * @apiSuccess {String} [telefono] Telephone of the product.
 * @apiParam {String} [categoria] ID from category.
 * @apiParam {String} [usuario] Id of the user post.
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String} producto Products of the system.
 * @apiSuccess {Boolean} img image of the product.
 * @apiSuccess {String} id ID of products of the system.
 * @apiSuccess {String} nombre Name of products.
 * @apiSuccess {String} descripcion Description of the product.
 * @apiSuccess {String} direccion Address of products.
 * @apiSuccess {String} horario Times of the product.
 * @apiSuccess {String} telefono Telephone of the product.
 * @apiSuccess {String} categoria Info from category.
 * @apiSuccess {String} usuario Info of the user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": true,
 *       "producto": {
 *             "img": true,
 *             "_id": "5e78e2e9291a19689a93e9e8",
 *             "nombre": "hostal de javier",
 *             "descripcion": "gran hostal",
 *             "direccion": "C/ test 25",
 *             "horario": "de 8 a 18",
 *             "telefono": "6123456778",
 *             "categoria": {
 *                 "_id": "5e77a95b662f4d75dcc174d6",
 *                 "nombre": "dormir"
 *             },
 *             "usuario": null,
 *             "__v": 0
 *         }
 *     }
 *
 * @apiError ProductNotCreated The Product was not updated.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "El producto no existe"
 *     }
 * }
 */
app.put('/producto/:id', (req, res) => {

  let id = req.params.id;
  let body = req.body;

  let modificarProducto = {
    nombre: body.nombre,
    descripcion: body.descripcion,
    direccion: body.direccion,
    horario: body.horario,
    telefono: body.telefono,
    coord: body.coord,
    observaciones: body.observaciones
  }

  Producto.findByIdAndUpdate(id, modificarProducto, {
    new: true,
    runValidators: true
  }, (err, productoDB) => {

    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    };

    if (!productoDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'El producto no existe.'
        }
      });
    }

    res.json({
      ok: true,
      producto: productoDB
    });
  });

});


/**
 * @api {delete} /producto/:id Delete Product
 * @apiName DeleteProducto
 * @apiGroup Producto
 *
 * @apiParam {Number} id  Category unique ID.
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String} producto Products of the system.
 * @apiSuccess {Boolean} img image of the product.
 * @apiSuccess {String} id ID of products of the system.
 * @apiSuccess {String} nombre Name of products.
 * @apiSuccess {String} descripcion Description of the product.
 * @apiSuccess {String} direccion Address of products.
 * @apiSuccess {String} horario Times of the product.
 * @apiSuccess {String} telefono Telephone of the product.
 * @apiSuccess {String} categoria Info from category.
 * @apiSuccess {String} usuario Info of the user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": true,
 *       "producto": {
 *             "img": true,
 *             "_id": "5e78e2e9291a19689a93e9e8",
 *             "nombre": "hostal de javier",
 *             "descripcion": "gran hostal",
 *             "direccion": "C/ test 25",
 *             "horario": "de 8 a 18",
 *             "telefono": "6123456778",
 *             "categoria": {
 *                 "_id": "5e77a95b662f4d75dcc174d6",
 *                 "nombre": "dormir"
 *             },
 *             "usuario": null,
 *             "__v": 0
 *         }
 *     }
 *
 * @apiError ProductNotCreated The Product was not deleted.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "producto no encontrado"
 *     }
 * }
 */
app.delete('/producto/:id', (req, res) => {

  let id = req.params.id;

  Producto.findByIdAndRemove(id, {
    new: true
  }, (err, productoBorrado) => {

    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    };

    if (!productoBorrado) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'Producto no encontrado.'
        }
      });
    }

    res.json({
      ok: true,
      producto: productoBorrado
    });

  });
});

module.exports = app;
