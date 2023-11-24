import React from 'react';

function Card({ cardItems }) {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cardItems.map((item, index) => (
          <li key={index}>
            <p>Nombre: {item.titulo}</p>
            <p>Subtitulo: {item.subtitulo}</p>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio: {item.precio}</p>
         
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
