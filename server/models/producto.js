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


var productoSchema = new Schema({
  nombre: {
    type: String,
    minlength: [2, 'El nombre debe contener al menos 2 caracteres!'],
    maxlength: [100, 'El nombre debe contener menos de 15 caracteres!'],
    required: [true, 'El nombre es necesario']
  },
  descripcion: {
    type: String,
    required: false
  },
  direccion: {
    type: String,
    required: [true, 'La dirección es obligatoria']
  },
  horario: {
    type: String,
    required: [true, 'El horario es necesario']
  },
  telefono: {
    type: String,
    maxlength: [15, 'El telefono debe contener menos de 15 caracteres!'],
    required: false
  },
  coord: {
    type: pointSchema,
    required: false
  },
  observaciones: {
    type: String,
    required: false
  },
  img: {
    type: String,
    required: false
  },
  categoria: {
    type: Schema.Types.ObjectId,
    ref: 'Categoria',
    required: true
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario'
  }
});


module.exports = mongoose.model('Producto', productoSchema);
