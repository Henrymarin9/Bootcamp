// Cart.jsx
import React from "react";

function Cart({ cart }) {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            <h3>{product.titulo}</h3>
            <p>{product.subtitulo}</p>
            {/* Otros detalles del producto... */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
