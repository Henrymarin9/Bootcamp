import React, { useState } from "react";
import MessageDisplay from "./MessageDisplay.jsx";



function ProductForm( {onProductAdd} ) {
  const [category, setCategory] = useState("");
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [productList, setProductList] = useState([]);

  const allowedExtensions = ["jpg", "jpeg", "png", "svg"];


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      validateForm();
      // Si no se lanzan excepciones, se muestra un mensaje de éxito
      setSuccessMessage("¡Formulario enviado exitosamente!");
  
      const newProduct = {
        category,
        titulo,
        subtitulo,
        descripcion,
        cantidad: parseInt(cantidad),
        precio: parseInt(precio),
        file: file.name,
      };
  
      const response = await fetch("http://localhost:5000/ecommerce/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
  
      onProductAdd(responseData);
      setProductList((prevProductList) => [...prevProductList, responseData]);
  
      // Realiza otras acciones, como agregar el producto a una lista, enviar a una API, etc.
      setTimeout(() => {
        setCategory("");
        setTitulo("");
        setSubtitulo("");
        setDescripcion("");
        setFile(null);
        setCantidad("");
        setPrecio("");
        setSuccessMessage("");
        setError(""); 
      }, 2000);
  
    } catch (error) {
      setError(error.message);
      setSuccessMessage("");
    }
  };


  const validateForm = () => {
    if (!category) {
      throw new Error("Por favor, selecciona una categoría.");
    }

    if (titulo.trim().length === 0 || titulo.length > 20) {
      throw new Error("El título debe tener entre 1 y 20 caracteres.");
    }

    if (subtitulo.trim().length === 0 || subtitulo.length > 30) {
      throw new Error("El subtitulo debe tener entre 1 y 30 caracteres.");
    }

    if (descripcion.trim().length === 0 || descripcion.length > 1000) {
      throw new Error("La descripción debe tener entre 1 y 1000 caracteres.");
    }

    if (!/^\d+$/.test(cantidad)) {
        throw new Error("La cantidad debe ser un número válido.");
    }
  
    if (parseInt(cantidad, 10) > 1000) {
    throw new Error("La cantidad no puede superar 1000.");
    }

    if (!/^\d+(\.\d{1,2})?$/.test(precio)) {
    throw new Error("El precio debe ser un número válido, con hasta 2 decimales.");
    }

    if (!file) {
      throw new Error("Selecciona un archivo con formato válido: jpg, jpeg, png o svg.");
    } else {
      const fileName = file.name;
      const fileExtension = fileName.split('.').pop().toLowerCase();
      if (!allowedExtensions.includes(fileExtension)) {
        throw new Error("Selecciona un archivo con formato válido: jpg, jpeg, png o svg.");
      }
    }
  };

  return (
    <div>
        <main class = "Main">
            <section class= "form">
                <h2>Lorem ipsum dolor sit amet.</h2>

        <form id="upDate-form" onSubmit={handleSubmit}>
            <div id="category">
            <h4>Categorias:</h4>
            <div id="check">
                <div>
                <label>
                    <input type="radio" name="category" value="Cuerdas" onChange={(e) => setCategory(e.target.value)}/>
                    <span>Cuerdas</span>
                </label>
                <label>
                    <input type="radio" name="category" value="Pianos"
                    onChange={(e) => setCategory(e.target.value)} />
                    <span>Pianos</span>
                </label>
                </div>
                <div>
                <label>
                    <input type="radio" name="category" value="Percusion"
                    onChange={(e) => setCategory(e.target.value)} />
                    <span>Percusion</span>
                </label>
                <label>
                    <input type="radio" name="category" value="Vientos"
                    onChange={(e) => setCategory(e.target.value)} />
                    <span>Vientos</span>
                </label>
                </div>
            </div>
            </div>

            <label className="labels">
            <input
                type="text"
                id="titulo"
                maxLength="20"
                placeholder="Titulo del Producto:"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            </label>

            <label className="labels">
            <input
                type="text"
                id="subtitulo"
                placeholder="Subtitulo del Producto:"
                value={subtitulo}
                onChange={(e) => setSubtitulo(e.target.value)}
            />
            </label>

            <label className="labels">
            <textarea
                name="description"
                id="description"
                cols="60"
                rows="5"
                placeholder="Descripcion:"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
            </label>

            <label className="labels">
            <input
                type="number"
                id="cantidad"
                placeholder="Cantidad:"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
            />
            </label>

            <label className="labels">
            <input
                type="text"
                id="precio"
                placeholder="Precio:"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
            />
            </label>

            <label className="labels">
            <input
                type="file"
                id="file"
                placeholder="Insertar una imagen:"
                onChange={(e) => setFile(e.target.files[0])}
            />
            </label>

            <label>
            <button id="submitButton" type="submit">
                Enviar
            </button>
            </label>
        </form>
        {error && <MessageDisplay message={error} type="error" />}
        {successMessage && <MessageDisplay message={successMessage} type="success" />}
        </section>
      </main>

      
    </div>
  );
}

export default ProductForm;
