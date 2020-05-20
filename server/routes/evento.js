const express = require('express');

const Evento = require('../models/evento');

const { verificaIsLogged } = require('../middlewares/autenticacion');

const app = express();



/**
 * @api {get} /evento Request all event information
 * @apiName GetEvento
 * @apiGroup Evento
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String[]} Eventos Events of the system.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": true,
 *       "eventos": [
 *         {
 *            "homeless": true,
 *            "isDone": false,
 *            "_id": "5eb27b7fe7ce984b5b243a5a",
 *            "nombre": "Mi evento",
 *            "descripcion": "este es el mejor evento",
 *            "direccion": "C/ no lo se",
 *            "horario": "de 10:00 a 11:25",
 *            "fecha": "2020-10-01T00:00:00.000Z"
 *         },
 *       ]
 *     }
 *
 * @apiError EventNotFound The event was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "eventos no encontrados"
 *     }
 * }
 */
app.get('/evento', (req, res) => {

  Evento.find({})
    .sort('fecha')
    .exec((err, eventos) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }

      res.json({
        ok: true,
        eventos
      });
    });
});

app.get('/evento/homeless', (req, res) => {

  Evento.find({"homeless" : true})
    .sort('fecha')
    .exec((err, eventos) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }

      res.json({
        ok: true,
        eventos
      });
    });
});

app.get('/evento/nohomeless', (req, res) => {

  Evento.find({"homeless" : false})
    .sort('fecha')
    .exec((err, eventos) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }

      res.json({
        ok: true,
        eventos
      });
    });
});


/**
 * @api {get} /eventos/buscar/:nombre Request event information by name
 * @apiName GetEventNombre
 * @apiGroup Evento
 *
 * @apiParam {String} nombre Name of the Event.
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String} id ID of event of the system.
 * @apiSuccess {String} nombre Name of event.
 * @apiSuccess {String} descripcion Description of the event.
 * @apiSuccess {String} direccion Address of event.
 * @apiSuccess {Array} Coord Coordenades of event.
 * @apiSuccess {String} horario Times of the event.
 * @apiSuccess {String} Fecha data of the event.
 * @apiSuccess {Boolean} homeless is homeless from event.
 * @apiSuccess {Boolean} isDone The event is done or not.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": true,
 *       "evento": {
 *            "homeless": true,
 *            "isDone": false,
 *            "_id": "5eb27b7fe7ce984b5b243a5a",
 *            "nombre": "Mi evento",
 *            "descripcion": "este es el mejor evento",
 *            "direccion": "C/ no lo se",
 *            "horario": "de 10:00 a 11:25",
 *            "fecha": "2020-10-01T00:00:00.000Z"
 *        },
 *     }
 *
 * @apiError EventNotFound The event was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "Evento no encontrado"
 *     }
 * }
 */
app.get('/eventos/buscar/:nombre', (req, res) => {

  let nombre = req.params.nombre;
  let regex = new RegExp(nombre, 'i');

  Evento.find({
      nombre: regex
    })
    .exec((err, eventos) => {

      if (err) {
        return res.status(500).json({
          ok: false,
          err
        });
      }
      if (!eventos) {
        return res.status(400).json({
          ok: false,
          err: {
            message: "El evento no existe. "
          }
        });
      }
      res.json({
        ok: true,
        eventos
      });
    });
});

/**
 * @api {get} /evento/:id Request event information by id
 * @apiName GetEventoId
 * @apiGroup Evento
 *
 * @apiParam {String} id ID of the Event.
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String} id ID of event of the system.
 * @apiSuccess {String} nombre Name of event.
 * @apiSuccess {String} descripcion Description of the event.
 * @apiSuccess {String} direccion Address of event.
 * @apiSuccess {Array} Coord Coordenades of event.
 * @apiSuccess {String} horario Times of the event.
 * @apiSuccess {String} Fecha data of the event.
 * @apiSuccess {Boolean} homeless is homeless from event.
 * @apiSuccess {Boolean} isDone The event is done or not.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": true,
 *       "evento": {
 *            "homeless": true,
 *            "isDone": false,
 *            "_id": "5eb27b7fe7ce984b5b243a5a",
 *            "nombre": "Mi evento",
 *            "descripcion": "este es el mejor evento",
 *            "direccion": "C/ no lo se",
 *            "horario": "de 10:00 a 11:25",
 *            "fecha": "2020-10-01T00:00:00.000Z"
 *        },
 *     }
 *
 * @apiError EventoNotFound The event was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "Evento no encontrado"
 *     }
 * }
 */
app.get('/evento/:id', (req, res) => {

  let id = req.params.id;

  Evento.findById(id)
    .exec((err, eventoDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        });
      }

      if (!eventoDB) {
        return res.status(400).json({
          ok: false,
          err: {
            err,
            message: "El evento no existe. "
          }
        });
      }

      res.json({
        ok: true,
        evento: eventoDB
      });
    });
});

/**
 * @api {post} /evento Create event
 * @apiName PostEvento
 * @apiGroup Evento
 *
 * @apiParam {String} nombre Name of event.
 * @apiParam {String} descripcion Description of the event.
 * @apiParam {String} direccion Address of event.
 * @apiParam {String} horario Times of the event.
 * @apiParam {String} Fecha data of the event.
 * @apiParam {Boolean} homeless is homeless from event.
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String} id ID of event of the system.
 * @apiSuccess {String} nombre Name of event.
 * @apiSuccess {String} descripcion Description of the event.
 * @apiSuccess {String} direccion Address of event.
 * @apiSuccess {Array} Coord Coordenades of event.
 * @apiSuccess {String} horario Times of the event.
 * @apiSuccess {String} Fecha data of the event.
 * @apiSuccess {Boolean} homeless is homeless from event.
 * @apiSuccess {Boolean} isDone The event is done or not.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": true,
 *       "evento": {
 *            "homeless": true,
 *            "isDone": false,
 *            "_id": "5eb27b7fe7ce984b5b243a5a",
 *            "nombre": "Mi evento",
 *            "descripcion": "este es el mejor evento",
 *            "direccion": "C/ no lo se",
 *            "horario": "de 10:00 a 11:25",
 *            "fecha": "2020-10-01T00:00:00.000Z"
 *        },
 *     }
 *
 * @apiError EventNotCreated The Event was not created.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "evento no guardado"
 *     }
 * }
 */
app.post('/evento',  (req, res) => {

  let body = req.body;

  let evento = new Evento({
    nombre: body.nombre,
    descripcion: body.descripcion,
    direccion: body.direccion,
    lat: body.lat,
    lng: body.lng,
    horario: body.horario,
    fecha: body.fecha,
    homeless: body.homeless,
    isDone: body.isDone
  });

  evento.save((err, eventoDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err: {
          err,
          message: 'evento no guardado'
        }
      });
    }

    res.json({
      ok: true,
      evento: eventoDB
    });
  });

});

/**
 * @api {put} /event/:id Update event
 * @apiName PutEvento
 * @apiGroup Evento
 *
 * @apiParam {Number} id  Category unique ID.
 * @apiParam {String} [nombre] Name of event.
 * @apiParam {String} [descripcion] Description of the event.
 * @apiParam {String} [direccion] Address of event.
 * @apiParam {String} [horario] Times of the event.
 * @apiParam {String} [Fecha] data of the event.
 * @apiParam {Boolean} [homeless] is homeless from event.
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String} id ID of event of the system.
 * @apiSuccess {String} nombre Name of events.
 * @apiSuccess {String} descripcion Description of the event.
 * @apiSuccess {String} direccion Address of event.
 * @apiSuccess {Array} Coord Coordenades of event.
 * @apiSuccess {String} horario Times of the event.
 * @apiSuccess {String} Fecha data of the event.
 * @apiSuccess {Boolean} homeless is homeless from event.
 * @apiSuccess {Boolean} isDone The event is done or not.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": true,
 *       "evento": {
 *            "homeless": true,
 *            "isDone": false,
 *            "_id": "5eb27b7fe7ce984b5b243a5a",
 *            "nombre": "Mi evento",
 *            "descripcion": "este es el mejor evento",
 *            "direccion": "C/ no lo se",
 *            "horario": "de 10:00 a 11:25",
 *            "fecha": "2020-10-01T00:00:00.000Z"
 *        },
 *     }
 *
 * @apiError eventNotModify The Event was not updated.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "El evento no existe"
 *     }
 * }
 */
app.put('/evento/:id', (req, res) => {

  let id = req.params.id;
  let body = req.body;

  let modificarEvento = {
    nombre: body.nombre,
    descripcion: body.descripcion,
    direccion: body.direccion,
    lat: body.lat,
    lng: body.lng,
    horario: body.horario,
    fecha: body.fecha,
    homeless: body.homeless,
    isDone: body.isDone
  }

  Evento.findByIdAndUpdate(id, modificarEvento, {
    new: true,
    runValidators: true
  }, (err, eventoDB) => {

    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    };

    if (!eventoDB) {
      return res.status(400).json({
        ok: false,
        err: {
          err,
          message: 'El evento no existe.'
        }
      });
    }

    res.json({
      ok: true,
      evento: eventoDB
    });
  });

});


/**
 * @api {delete} /evento/:id Delete Event
 * @apiName DeleteEvento
 * @apiGroup Evento
 *
 * @apiParam {Number} id  Event unique ID.
 *
 * @apiSuccess {Boolean} ok Result of the query.
 * @apiSuccess {String} id ID of event of the system.
 * @apiSuccess {String} nombre Name of event.
 * @apiSuccess {String} descripcion Description of the event.
 * @apiSuccess {String} direccion Address of event.
 * @apiSuccess {Array} Coord Coordenades of event.
 * @apiSuccess {String} horario Times of the event.
 * @apiSuccess {String} Fecha data of the event.
 * @apiSuccess {Boolean} homeless is homeless from event.
 * @apiSuccess {Boolean} isDone The event is done or not.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": true,
 *       "evento": {
 *            "homeless": true,
 *            "isDone": false,
 *            "_id": "5eb27b7fe7ce984b5b243a5a",
 *            "nombre": "Mi evento",
 *            "descripcion": "este es el mejor evento",
 *            "direccion": "C/ no lo se",
 *            "horario": "de 10:00 a 11:25",
 *            "fecha": "2020-10-01T00:00:00.000Z"
 *        },
 *     }
 *
 * @apiError EventoNotDelete The Event was not deleted.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *     "ok": false,
 *     "err": {
 *         "message": "evento no encontrado"
 *     }
 * }
 */
app.delete('/evento/:id', (req, res) => {

  let id = req.params.id;

  Evento.findByIdAndRemove(id, {
    new: true
  }, (err, eventoBorrado) => {

    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    };

    if (!eventoBorrado) {
      return res.status(400).json({
        ok: false,
        err: {
          err,
          message: 'Evento no encontrado.'
        }
      });
    }

    res.json({
      ok: true,
      evento: eventoBorrado
    });

  });
});

module.exports = app;
