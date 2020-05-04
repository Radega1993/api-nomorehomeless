const express = require('express');

const Categoria = require('../models/categoria');
const { verificaAdminRole } = require('../middlewares/autenticacion');

const app = express();

/**
 * @api {get} /categoria Request all categories information
 * @apiName GetCategoria
 * @apiGroup Categoria
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String[]} categorias Caregories of the system.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": true,
 *       "categorias":[
 *       {
 *         "_id": "5e77a97e662f4d75dcc174d9",
 *         "nombre": "consigna",
 *         "descripcion": "lugares para guardar tus objetos",
 *         "__v": 0
 *         }
 *       ]
 *     }
 *
 * @apiError CategoriaNotFound The id of the Category was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "Caregorias no encontradas"
 *     }
 * }
 */
app.get('/categoria', (req, res) => {

  Categoria.find({})
    .sort('nombre')
    .exec((err, categorias) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }

      res.json({
        ok: true,
        categorias
      });
    });
});

/**
 * @api {post} /categoria Create Category
 * @apiName PostCategoria
 * @apiGroup Categoria
 *
 * @apiParam {String} nombre Name of the Category.
 * @apiParam {String} descripcion  Description of the Category.
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String} _id Identifier of the Category.
 * @apiSuccess {String} nombre Name of the Category.
 * @apiSuccess {String} descripcion Description of the Category.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": true,
 *       "categoria": {
 *          "_id": "5e8324fdd3ac3e44293342ac",
 *          "nombre": "comer",
 *          "descripcion": "lugares para comer",
 *          "__v": 0
 *        }
 *     }
 *
 * @apiError CategoryNotCreated The Category was not created.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "Categoria no guardada"
 *     }
 * }
 */
app.post('/categoria', (req, res) => {

  let body = req.body;

  let categoria = new Categoria({
    nombre: body.nombre,
    descripcion: body.descripcion
  });

  categoria.save((err, categoriaDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      categoria: categoriaDB
    });
  });

});

/**
 * @api {put} /categoria/:id Modify Category
 * @apiName PutCategoria
 * @apiGroup Categoria
 *
 * @apiParam {Number} id  Category unique ID.
 * @apiParam {String} [nombre] Name of the Category.
 * @apiParam {String} [descripcion]  Description of the Category.
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String} _id Identifier of the Category.
 * @apiSuccess {String} nombre Name of the Category.
 * @apiSuccess {String} descripcion Description of the Category.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": true,
 *       "categoria": {
 *          "_id": "5e8324fdd3ac3e44293342ac",
 *          "nombre": "comer",
 *          "descripcion": "lugares para comer",
 *          "__v": 0
 *        }
 *     }
 *
 * @apiError CategoryNotModify The Category was not modify.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "La categoria no existe"
 *     }
 * }
 */
app.put('/categoria/:id', (req, res) => {

  let id = req.params.id;
  let body = req.body;

  let modificarCategoria = {
    nombre: body.nombre,
    descripcion: body.descripcion
  }

  Categoria.findByIdAndUpdate(id, modificarCategoria, {
    new: true,
    runValidators: true
  }, (err, categoriaDB) => {

    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    };

    if (!categoriaDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'La categoria no existe'
        }
      });
    }

    res.json({
      ok: true,
      categoria: categoriaDB
    });
  });

});

/**
 * @api {delete} /categoria/:id Delete Category
 * @apiName DeleteCategoria
 * @apiGroup Categoria
 *
 * @apiParam {Number} id  Category unique ID.
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String} role Role of the User.
 * @apiSuccess {Boolean} homeless  State of the User.
 * @apiSuccess {Boolean} isLogged  Loging state of the User.
 * @apiSuccess {String} _id Identifier of the User.
 * @apiSuccess {String} nombre Name of the User.
 * @apiSuccess {String} apellido Surname of the User.
 * @apiSuccess {String} email Email of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": true,
 *       "categoria": {
 *          "_id": "5e8324fdd3ac3e44293342ac",
 *          "nombre": "comer",
 *          "descripcion": "lugares para comer",
 *          "__v": 0
 *        }
 *     }
 *
 * @apiError CategoryNotDeleted The Category was not created.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "categoria no encontrada"
 *     }
 * }
 */
app.delete('/categoria/:id', /* verificaAdminRole, */ (req, res) => {

  let id = req.params.id;

  Categoria.findByIdAndRemove(id, {
    new: true
  }, (err, categoriaBorrada) => {

    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    };

    if (!categoriaBorrada) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'categoria no encontrada'
        }
      });
    }

    res.json({
      ok: true,
      categoria: categoriaBorrada
    });

  });
});

module.exports = app;
