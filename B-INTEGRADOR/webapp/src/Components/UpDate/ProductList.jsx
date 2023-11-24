
import React from "react";

function ProductList({ productList, onAddToCart }) {
  return (
    <div>
      <main className="Main">
        <section className="component-cards">
          <ul>
            {productList.map((product, index) => (
              <li key={index}>
                <article className="card">
                  <header>
                    <picture>{/* Aca deberia mostrar la imagen del producto */}</picture>
                  </header>
                  <main>
                    <h3>{product.titulo}</h3>
                    <p>{product.subtitulo}</p>
                    <button onClick={() => onAddToCart(product)}>Agregar al carrito</button>
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

export default ProductList;
