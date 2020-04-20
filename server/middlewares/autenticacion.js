
// ====================================
// verificar AdminRole
// ===================================
let verificaAdminRole = (req, res, next) => {
  let usuario = req.usuario;

  if (usuario.role === 'ADMIN_ROLE') {
    next();
  }else {

    return res.json({
      ok: false,
      err: {
        message: 'El usuario no es administrador'
      }
    });
  }
};

// ====================================
// verificar que esta loggejat
// ===================================
let verificaIsLogged = (req, res, next) => {
  let usuario = req.usuario;

  if (usuario.isLogged === true) {
    next();
  }else {

    return res.json({
      ok: false,
      err: {
        message: 'El usuario no esta logeado'
      }
    });
  }
};


// ====================================
// verificar Contraseña
// ===================================
let verificaContraseña = (req, res, next) => {
  let usuario = req.body;

  if (usuario.password === usuario.passwordVerification) {
    next();
  }else {

    return res.json({
      ok: false,
      err: {
        message: 'Las contraseñas no coinciden!'
      }
    });
  }
};


module.exports = {
  verificaAdminRole,
  verificaIsLogged,
  verificaContraseña
}
