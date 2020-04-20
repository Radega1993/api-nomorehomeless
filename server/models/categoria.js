const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let categoriaSchema = new Schema({
  nombre: {
    type: String,
    unique: true,
    required: [true, 'El nombre es necesario']
  },
  descripcion: {
    type: String,
    required: [true, 'La descripción es obligatoria']
  }
});



module.exports = mongoose.model('Categoria', categoriaSchema);
