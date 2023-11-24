const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  productos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;