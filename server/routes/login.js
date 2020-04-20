const express = require('express');

const bcrypt = require('bcrypt');


const Usuario = require('../models/usuario');

const app = express();

/**
 * @api {post} /login Login User
 * @apiName PostLogin
 * @apiGroup Login
 *
 * @apiParam {String} [email] Email of the User.
 * @apiParam {String} [password]  Password of the User.
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
 *         "isLogged": true,
 *         "_id": "5e831411e2c1d331f82c244d",
 *         "nombre": "testdoc",
 *         "apellido": "elmio",
 *         "email": "testdoc@emlio.com",
 *         "__v": 0
 *       }
 *     }
 *
 * @apiError UserNotLogin The User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "Usuario o contraseña incorrectos"
 *     }
 * }
 */
app.post('/login', (req, res) => {

  let body = req.body;

  Usuario.findOne({
    email: body.email
  }, (err, usuarioDB) => {

    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    }

    if (!usuarioDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'Usuario o contraseña incorrectos'
        }
      });
    }

    if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'Usuario o contraseña incorrectos'
        }
      });
    }

    usuarioDB.isLogged = true;

    usuarioDB.save((err, usuarioDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        });
      };

      res.json({
        ok: true,
        usuario: usuarioDB,
      });

    });

  });
});


/**
 * @api {post} /login Logout User
 * @apiName PostLogout
 * @apiGroup Logout
 *
 * @apiParam {String} [email] Email of the User.
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
 * @apiError UserNotLogout The email was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "Email no enviado"
 *     }
 * }
 */
app.post('/logout', (req, res) => {

  let body = req.body;

  Usuario.findOne({
    email: body.email
  }, (err, usuarioDB) => {

    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    }

    if (!usuarioDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'Email no enviado'
        }
      });
    }

    usuarioDB.isLogged = false;

    usuarioDB.save((err, usuarioDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        });
      };

      res.json({
        ok: true,
        usuario: usuarioDB,
      });
    });
  });
});

module.exports = app;
