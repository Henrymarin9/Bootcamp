
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category: String,
  titulo: String,
  subtitulo: String,
  descripcion: String,
  cantidad: Number,
  precio: Number,
  file: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
