const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Product = require('./ProductModel');
const Cart = require('./CartModel');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/ecommerce');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.post('/ecommerce/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al guardar el producto en la base de datos.' });
  }
});

app.post('/ecommerce/cart', async (req, res) => {
  try {
    const productIdToAdd = req.body.productId;
    const updatedCart = await Cart.findByIdAndUpdate(
      // Supongo que tienes un modelo de Carrito y que tiene un campo `productos` que es un array
      // Reemplaza "Cart" con el nombre de tu modelo de carrito
      cartId, // Reemplaza cartId con el ID real del carrito
      { $push: { productos: productIdToAdd } },
      { new: true }
    );
    res.json(updatedCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al agregar el producto al carrito.' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
