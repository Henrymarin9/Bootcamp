// src/components/ProductForm.js
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductForm = ({ onSubmit, selectedProduct, onDelete }) => {
  const [formProduct, setFormProduct] = useState({
    name: '',
    description: '',
    price: '',
  });

  useEffect(() => {
    setFormProduct(selectedProduct || { name: '', description: '', price: '' });
  }, [selectedProduct]);

  const validateForm = () => {
    const errors = {};

    if (!formProduct.name || formProduct.name.length < 5) {
      errors.name = 'El nombre debe tener al menos 5 caracteres';
    }

    if (!formProduct.description || formProduct.description.length < 10) {
      errors.description = 'La descripción debe tener al menos 10 caracteres';
    }

    if (!formProduct.price || isNaN(formProduct.price)) {
      errors.price = 'El precio debe ser un número';
    }

    if (!formProduct.name || !formProduct.description || !formProduct.price) {
      errors.general = 'Todos los campos son obligatorios';
    }

    return errors;
  };

  const handleModify = () => {
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      onSubmit(formProduct);
      setFormProduct({ name: '', description: '', price: '' });
    } else {
      toast.error(
        Object.values(errors).join('\n'), 
        {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 4000,
        }
      );
    }
  };

  const handleDelete = () => {
    onDelete(formProduct.name);
    setFormProduct({ name: '', description: '', price: '' });
  };

  const handleAdd = () => {
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      onSubmit(formProduct);
      setFormProduct({ name: '', description: '', price: '' });
    } else {
      toast.error(
        Object.values(errors).join('\n'), 
        {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 4000,
        }
      );
    }
  };

  return (
    <div>
      <form>
        <label>
          Nombre:
          <input
            type="text"
            value={formProduct.name}
            onChange={(e) => setFormProduct({ ...formProduct, name: e.target.value })}
          />
        </label>
        <label>
          Descripción:
          <input
            type="text"
            value={formProduct.description}
            onChange={(e) => setFormProduct({ ...formProduct, description: e.target.value })}
          />
        </label>
        <label>
          Precio:
          <input
            type="text"
            value={formProduct.price}
            onChange={(e) => setFormProduct({ ...formProduct, price: e.target.value })}
          />
        </label>
      </form>
      {selectedProduct ? (
        <div>
          <button onClick={handleModify}>Modificar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </div>
      ) : (
        <button onClick={handleAdd}>Agregar</button>
      )}
    </div>
  );
};

export default ProductForm;
