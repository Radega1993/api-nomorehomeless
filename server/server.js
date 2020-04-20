require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

/**
 * @api {get} /ping Request server conectivity
 * @apiName ping
 * @apiGroup Server
 *
 *
 * @apiSuccess {String} pong Recive pong from server!.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found

 */
app.get('/ping', (req, res) => {
  res.send('Pong!');
});

/**
 * @api {get} /status Request server Status
 * @apiName status
 * @apiGroup Server
 *
 *
 * @apiSuccess {String} Ok Recive ok from server!.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found

 */
app.get('/status', (req, res) => {
  res.send('Ok!');
});

//config global de rutas
app.use(require('./routes/index'));


mongoose.connect(process.env.URLDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  (err, res) => {
    if (err) throw err;
  });

app.listen(process.env.PORT, () => {
  console.log('Escuchando puerto: ', process.env.PORT);
});

module.exports = app;
