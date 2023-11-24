// Agregar.jsx
import React, { useState, useEffect } from 'react';
import ProductList from '../UpDate/ProductList';

function Agregar() {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/ecommerce/products')
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
      });
  }, []);

  const handleProductAdd = (newProduct) => {
    setProductList([...productList, newProduct]);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);

    fetch('http://localhost:5000/ecommerce/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId: product._id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Producto agregado al carrito en la base de datos:', data);
      })
      .catch((error) => {
        console.error('Error al agregar producto al carrito:', error);
      });
  };

  return (
    <div>
      <ProductList productList={productList} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default Agregar;
