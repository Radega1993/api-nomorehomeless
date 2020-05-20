var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var eventoSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es necesario!'],
    minlength: [2, 'El nombre debe contener al menos 2 caracteres!'],
    maxlength: [50, 'El nombre debe contener menos de 50 caracteres!']
  },
  descripcion: {
    type: String,
    required: false
  },
  direccion: {
    type: String,
    required: false
  },
  lat: {
    type: Number,
    required: false
  },
  lng: {
    type: Number,
    required: false
  },
  horario: {
    type: String,
    required: false
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
