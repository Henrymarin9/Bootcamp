import React, { useState, useEffect } from 'react';

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
      <main className="Main">
        <section className="component-cards">
          <ul>
            {productList.map((product, index) => (
              <li key={index}>
                <article className="card">
                  <header>
                    <picture>{/* Mostrar la imagen del producto aca */}</picture>
                  </header>
                  <main>
                    <h3>{product.titulo}</h3>
                    <p>{product.subtitulo}</p>
                    <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
                  </main>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Agregar;
