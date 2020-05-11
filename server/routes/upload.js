const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();


const Usuario = require('../models/usuario');
const Producto = require('../models/producto');

const fs = require('fs');
const path = require('path');

// default options
app.use(fileUpload());

/**
 * @api {put} /upload Upload Image
 * @apiName PutUpload
 * @apiGroup Upload
 *
 * @apiParam {Number} ID User ID Unique.
 * @apiParam {String} tipo Tipe od upload usuarios o productos.
 * @apiParam {String} archivo File to upload.
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String} img Image upload.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": true,
 *       "img": "5e78e2e9291a19689a93e9e8-909.jpg"
 *     }
 *
 * @apiError ImageNotUpload The image was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "Los tipos permitida son: productos, usuarios"
 *     }
 * }
 */
app.put('/upload/:tipo/:id', function(req, res) {

  let tipo = req.params.tipo;
  let id = req.params.id;

  if (!req.files) {
    return res.status(400)
      .json({
        ok: false,
        err: {
          message: 'No se ha seleccionado ningún archivo'
        }
      });
  }

  // validar tipo
  let tiposValidos = ['productos', 'usuarios'];
  if (tiposValidos.indexOf(tipo) < 0) {
    return res.status(400).json({
      ok: false,
      err: {
        message: 'Los tipos permitida son: ' + tiposValidos.join(', ')
      }
    })
  }

  let archivo = req.files.archivo;
  // Extensiones permitidas
  let extensionesValidas = ['png', 'jpg', 'gif', 'jpeg'];
  let nombrecortado = archivo.name.split('.');
  let extension = nombrecortado[nombrecortado.length - 1];

  if (extensionesValidas.indexOf(extension) < 0) {
    return res.status(400).json({
      ok: false,
      err: {
        message: 'La extension permitida son: ' + extensionesValidas.join(', '),
        ext: extension
      }
    })
  }

  // cambiar nombre archivo
  let nombreArchivo = `${ id }-${ new Date().getMilliseconds() }.${extension}`;

  archivo.mv(`uploads/${ tipo }/${ nombreArchivo }`, (err) => {

    if (err)
      return res.status(500).json({
        ok: false,
        err
      });

    // Aqui, imagen cargada
    if (tipo === 'usuarios') {
      imagenUsuario(id, res, nombreArchivo);
    } else {
      imagenProducto(id, res, nombreArchivo);
    }

  });
});

function imagenUsuario(id, res, nombreArchivo) {

  Usuario.findById(id, (err, usuarioDB) => {
    if (err) {
      borraArchivo(nombreArchivo, 'usuarios');

      return res.status(500)
        .json({
          ok: false,
          err
        });
    }

    if (!usuarioDB) {
      borraArchivo(nombreArchivo, 'usuarios');

      return res.status(400)
        .json({
          ok: false,
          err: {
            message: 'El usuario no existe'
          }
        });
    }

    borraArchivo(usuarioDB.img, 'usuarios');

    usuarioDB.img = nombreArchivo;

    usuarioDB.save((err, usuarioGuardado) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        });
      };
      
      res.json({
        ok: true,
        usuario: usuarioGuardado,
        img: nombreArchivo
      });

    });

  })
}

function imagenProducto(id, res, nombreArchivo) {

  Producto.findById(id, (err, productoDB) => {
    if (err) {
      borraArchivo(nombreArchivo, 'productos');

      return res.status(500)
        .json({
          ok: false,
          err
        });
    }

    if (!productoDB) {
      borraArchivo(nombreArchivo, 'productos');

      return res.status(400)
        .json({
          ok: false,
          err: {
            message: 'El producto no existe'
          }
        });
    }

    borraArchivo(productoDB.img, 'productos');

    productoDB.img = nombreArchivo;

    productoDB.save((err, productoDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        });
      };

      res.json({
        ok: true,
        producto: productoDB,
        img: nombreArchivo
      });

    });

  })
}

function borraArchivo(nombreImagen, tipo) {
  let pathImagen = path.resolve(__dirname, `../../uploads/${ tipo }/${ nombreImagen }`);
  if (fs.existsSync(pathImagen)) {
    fs.unlinkSync(pathImagen);
  }
}

module.exports = app;
