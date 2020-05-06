const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const uniqueValidator = require('mongoose-unique-validator');
require('mongoose-type-email');


let rolesValidos = {
  values: ['ADMIN_ROLE', 'USER_ROLE'],
  message: '{VALUE} no es un rol valido'
};


let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es necesario!'],
    minlength: [2, 'El nombre debe contener al menos 2 caracteres!'],
    maxlength: [15, 'El nombre debe contener menos de 15 caracteres!']
  },
  apellido: {
    type: String,
    required: [true, 'El apellido es necesario!'],
    minlength: [2, 'El apellido debe contener al menos 2 caracteres!'],
    maxlength: [15, 'El apellido debe contener menos de 15 caracteres!']
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    unique: true,
    required: [true, 'El correo es necesario']
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria']
  },
  passwordVerification: {
    type: String,
    required: false
  },
  img: {
    type: String,
    required: false
  },
  role: {
    type: String,
    default: 'USER_ROLE',
    enum: rolesValidos
  },
  fecha: {
    type: Date,
    required: [true, 'La fecha es necesaria']
  },
  homeless: {
    type: Boolean,
    default: false
  },
  isLogged: {
    type: Boolean,
    default: false
  }
});

usuarioSchema.methods.toJSON = function() {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;

  return userObject
}

usuarioSchema.plugin(uniqueValidator, {
  message: '{PATH} debe de ser único'
})



module.exports = mongoose.model('Usuario', usuarioSchema);
