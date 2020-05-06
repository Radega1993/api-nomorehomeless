var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const pointSchema = new Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});


var eventoSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es necesario!'],
    minlength: [2, 'El nombre debe contener al menos 2 caracteres!'],
    maxlength: [15, 'El nombre debe contener menos de 15 caracteres!']
  },
  descripcion: {
    type: String,
    required: false
  },
  direccion: {
    type: String,
    required: false
    //required: [true, 'La dirección es obligatoria']
  },
  coord: {
    type: pointSchema,
    required: false
  },
  horario: {
    type: String,
    required: false
    //required: [true, 'El horario es necesario']
  },
  fecha: {
    type: Date,
    required: [true, 'La fecha es necesaria']
  },
  homeless: {
    type: Boolean,
    default: false
  },
  isDone: {
    type: Boolean,
    default: false
  }
});


module.exports = mongoose.model('Evento', eventoSchema);
