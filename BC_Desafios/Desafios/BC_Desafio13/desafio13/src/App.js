import React, { useState } from 'react';
import './App.css';

function App() {
  // Paso 3: Crear estados para el nombre y la edad
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(0);

  // Paso 4: Función para generar el mensaje de bienvenida personalizado
  const generarMensajeDeBienvenida = () => {
    if (edad < 18) {
      return `Hola ${nombre}, eres muy joven para usar esta aplicación`;
    } else {
      return `Bienvenido ${nombre}, gracias por usar nuestra aplicación`;
    }
  };

  // Paso 6: Capturar valores del formulario
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mensaje = generarMensajeDeBienvenida();
    alert(mensaje); // Esto muestra el mensaje en una ventana de alerta
  };

  return (
    <div className="App">
      <h1>Aplicación de Bienvenida</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label>
          Edad:
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(parseInt(e.target.value, 10))}
          />
        </label>
        <button type="submit">Generar Mensaje de Bienvenida</button>
      </form>
    </div>
  );
}

export default App;

