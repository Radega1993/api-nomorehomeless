const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

/**
 * @api {get} /imagen/:tipo/:img Request image
 * @apiName GetImage
 * @apiGroup Imagenes
 *
 * @apiParam {Number} ID User ID Unique.
 * @apiParam {String} tipo Tipe od upload usuarios o productos.
 * @apiParam {String} archivo File to upload.
 *
 * @apiSuccess {String[]} imagen Show the image.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *
 * @apiError ImageNotFound The image was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "show default image"
 *     }
 */
app.get('/imagen/:tipo/:img', (req, res) => {
  let tipo = req.params.tipo;
  let img = req.params.img;

  let pathImagen = path.resolve(__dirname, `../../uploads/${ tipo }/${ img }`);

  if (fs.existsSync(pathImagen)) {
    res.sendFile(pathImagen);
  } else {
    let noImagePath = path.resolve(__dirname, '../assets/no-image.jpg');
    res.sendFile(noImagePath);
  }
})

module.exports = app;
