import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Components/AboutUs/AboutUs.jsx';
import ProductForm from './Components/UpDate/ProductForm.jsx';
import ProductList from './Components/UpDate/ProductList.jsx';
import Contact from './Components/Contacts/Contact.jsx';


function App() {
  const [productList, setProductList] = useState([]);
  const handleProductAdd = (newProduct) => {
    
    console.log("Nuevo producto:", newProduct);
    setProductList([...productList, newProduct]);
  };
  const [cartItems, setCartItems] = useState([]);  

  const handleAddToCart = (product) => {
    
    setCartItems([...cartItems, product]);
  };


  return (

    <Routes>

        <Route path='/' element={<ProductList productList={productList} />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path='/up-date' element={<ProductForm onProductAdd={handleProductAdd} />} />
        <Route path="/product-list" element={<ProductList productList={productList} handleAddToCart={handleAddToCart} />} />
        

        
    </Routes>

  );
}

export default App;

