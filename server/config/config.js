// ====================================
// Entorno
// ===================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ====================================
// Puerto
// ===================================
process.env.PORT = process.env.PORT || 3005;


// ====================================
// Base de Datos
// ===================================
if (process.env.NODE_ENV === 'test') {
  urlDB = 'url/test';
} else {
  urlDB = 'url/nmhbd';
}

process.env.URLDB = urlDB
