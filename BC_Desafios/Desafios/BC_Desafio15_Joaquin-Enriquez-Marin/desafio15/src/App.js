// src/App.js
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddOrEdit = (product) => {
    if (selectedProduct) {
      // Modificar el producto existente
      const updatedProducts = products.map((p) =>
        p.name === selectedProduct.name ? product : p
      );
      setProducts(updatedProducts);
      toast.success('Producto modificado correctamente');
    } else {
      // Agregar un nuevo producto
      setProducts([...products, product]);
      toast.success('Producto agregado correctamente');
    }
    setSelectedProduct(null);
  };

  const handleDelete = (productName) => {
    // Filtrar la lista de productos para eliminar el producto por su nombre
    const updatedProducts = products.filter((product) => product.name !== productName);
    setProducts(updatedProducts);
    setSelectedProduct(null);
    toast.error('Producto eliminado correctamente');
  };

  return (
    <div>
      <ProductList
        products={products}
        onDelete={handleDelete}
        onModify={setSelectedProduct}
      />
      <ProductForm
        onSubmit={handleAddOrEdit}
        selectedProduct={selectedProduct}
        onDelete={handleDelete}
      />
      <ToastContainer />
    </div>
  );
};

export default App;
