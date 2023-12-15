import React from 'react';

const ProductList = ({ products, onDelete, onModify }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.name}>
          {product.name} - {product.description} - {product.price}
          <button onClick={() => onModify(product)}>Modificar</button>
          <button onClick={() => onDelete(product.name)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
