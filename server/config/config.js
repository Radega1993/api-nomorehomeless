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
  urlDB = 'mongodb+srv://nmh:nmh123456@cluster0-cqs9m.mongodb.net/test';
} else {
  urlDB = 'mongodb+srv://nmh:nmh123456@cluster0-cqs9m.mongodb.net/nmhbd';
}

process.env.URLDB = urlDB
