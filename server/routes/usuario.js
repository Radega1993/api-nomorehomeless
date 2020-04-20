const express = require('express');

const bcrypt = require('bcrypt');
const _ = require('underscore');
const {
  verificaContraseña
} = require('../middlewares/autenticacion');


const Usuario = require('../models/usuario');

const app = express();

/**
 * @api {get} /usuario Request all User information
 * @apiName GetAllUsuario
 * @apiGroup Usuario
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String[]} usuarios Users of the system.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": true,
 *       "usuarios":[
 *       {
 *          "role": "USER_ROLE",
 *          "homeless": false,
 *          "_id": "5e7bb2a5e2f78255fbdeccb5",
 *          "nombre": "test",
 *          "apellido": "elmio",
 *          "email": "testvalidacion@emlio.com"
 *         }
 *       ],
 *       "total": 2
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "usuario no encontrado"
 *     }
 * }
 */
app.get('/usuario', (req, res) => {

  let desde = req.query.desde || 0;
  desde = Number(desde);

  let limite = req.query.limite || 5;
  limite = Number(limite);

  Usuario.find({}, 'nombre apellido email role img homeless')
    .skip(desde)
    .limit(limite)
    .exec((err, usuarios) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err: {
            message: 'usuarios no encontrados'
          }
        });
      }

      Usuario.estimatedDocumentCount({}, (err, numero) => {
        res.json({
          ok: true,
          usuarios,
          total: numero
        });
      });

    });
});

/**
 * @api {get} /usuario/:id Request User information
 * @apiName GetUsuario
 * @apiGroup Usuario
 *
 * @apiParam {Number} id  Users unique ID.
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String} role Role of the User.
 * @apiSuccess {Boolean} homeless  State of the user of the User.
 * @apiSuccess {String} _id Identifier of the User.
 * @apiSuccess {String} nombre Name of the User.
 * @apiSuccess {String} apellido Surname of the User.
 * @apiSuccess {String} email Email of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     "ok": true,
 *     "usuario": {
 *        "role": "USER_ROLE",
 *        "homeless": false,
 *        "_id": "5e7bb2a5e2f78255fbdeccb5",
 *        "nombre": "test",
 *        "apellido": "elmio",
 *        "email": "testvalidacion@emlio.com"
 *       }
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "usuario no encontrado"
 *     }
 * }
 */
app.get('/usuario/:id', (req, res) => {

  let id = req.params.id;

  Usuario.findById(id, 'nombre apellido email role img homeless')
    .exec((err, usuariosBD) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err: {
            message: 'usuario no encontrado'
          }
        });
      }

      if (!usuariosBD) {
        return res.status(400).json({
          ok: false,
          err: {
            message: "El usuario no existe. "
          }
        });
      }

      res.json({
        ok: true,
        usuario: usuariosBD
      });
    });
});

/**
 * @api {post} /usuario Create User
 * @apiName PostUsuario
 * @apiGroup Usuario
 *
 * @apiParam {String} nombre Name of the User.
 * @apiParam {String} apellido  Surname of the User.
 * @apiParam {String} email Email of the User.
 * @apiParam {String} password  Password of the User.
 * @apiParam {String} passwordVerification Repeat password of the User.
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
 *       "usuario": {
 *         "role": "USER_ROLE",
 *         "homeless": false,
 *         "isLogged": false,
 *         "_id": "5e831411e2c1d331f82c244d",
 *         "nombre": "testdoc",
 *         "apellido": "elmio",
 *         "email": "testdoc@emlio.com",
 *         "__v": 0
 *       }
 *     }
 *
 * @apiError UserNotCreated The User was not created.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "usuario no guardado"
 *     }
 * }
 */
app.post('/usuario', verificaContraseña, (req, res) => {


  let body = req.body;

  let usuario = new Usuario({
    nombre: body.nombre,
    apellido: body.apellido,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role
  });

  usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'Usuario no guardado'
        }
      });
    }

    res.json({
      ok: true,
      usuario: usuarioDB
    });
  });

});

/**
 * @api {put} /usuario/:id Modify User
 * @apiName PutUsuario
 * @apiGroup Usuario
 *
 * @apiParam {Number} id  Users unique ID.
 * @apiParam {String} [nombre] Name of the User.
 * @apiParam {String} [apellido]  Surname of the User.
 * @apiParam {String} [email]  Email of the User.
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
 *       "usuario": {
 *         "role": "USER_ROLE",
 *         "homeless": false,
 *         "isLogged": false,
 *         "_id": "5e831411e2c1d331f82c244d",
 *         "nombre": "testmod",
 *         "apellido": "elmio",
 *         "email": "testdoc@emlio.com",
 *         "__v": 0
 *       }
 *     }
 *
 * @apiError UserNotModify The User was not created.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "usuario no guardado"
 *     }
 * }
 */
app.put('/usuario/:id', (req, res) => {

  let id = req.params.id;
  let body = _.pick(req.body,
    ['nombre',
      'apellido',
      'email',
      'img',
      'role',
      'estado'
    ]);

  Usuario.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true
  }, (err, usuarioDB) => {

    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    };

    res.json({
      ok: true,
      usuario: usuarioDB
    });
  });

});

/**
 * @api {delete} /usuario/:id Delete User
 * @apiName DeleteUsuario
 * @apiGroup Usuario
 *
 * @apiParam {Number} id  Users unique ID.
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
 *       "usuario": {
 *         "role": "USER_ROLE",
 *         "homeless": false,
 *         "isLogged": false,
 *         "_id": "5e831411e2c1d331f82c244d",
 *         "nombre": "testmod",
 *         "apellido": "elmio",
 *         "email": "testdoc@emlio.com",
 *         "__v": 0
 *       }
 *     }
 *
 * @apiError UserNotDeleted The User was not created.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "usuario no encontrado"
 *     }
 * }
 */
app.delete('/usuario/:id', (req, res) => {

  let id = req.params.id;

  Usuario.findByIdAndRemove(id, {
    new: true
  }, (err, usuarioBorrado) => {

    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    };

    if (!usuarioBorrado) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'usuario no encontrado'
        }
      });
    }

    res.json({
      ok: true,
      usuario: usuarioBorrado
    });

  });
});

module.exports = app;
