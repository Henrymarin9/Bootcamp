import React, { useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import ListaNotas from './ListaNotas';

function App() {
  const [notas, setNotas] = useState([]);
  const [nuevaNota, setNuevaNota] = useState({ titulo: '', contenido: '' });

  const agregarNota = () => {
    if (nuevaNota.titulo && nuevaNota.contenido) {
      setNotas([...notas, { ...nuevaNota, favorita: false, id: Date.now() }]);
      setNuevaNota({ titulo: '', contenido: '' });
    }
  };

  const editarNota = (id, nuevoContenido) => {
    const nuevasNotas = [...notas];
    const notaEditada = nuevasNotas.find((nota) => nota.id === id);
    notaEditada.contenido = nuevoContenido;
    setNotas(nuevasNotas);
  };

  const eliminarNota = (id) => {
    const nuevasNotas = notas.filter((nota) => nota.id !== id);
    setNotas(nuevasNotas);
  };

  const marcarComoFavorita = (id) => {
    const nuevasNotas = [...notas];
    const notaMarcada = nuevasNotas.find((nota) => nota.id === id);
    notaMarcada.favorita = !notaMarcada.favorita;
    setNotas(nuevasNotas);
  };

  return (
    <div className="App">
      <h1>Aplicación de Notas</h1>
      <Formulario
        nuevaNota={nuevaNota}
        setNuevaNota={setNuevaNota}
        agregarNota={agregarNota}
      />
      <ListaNotas
        notas={notas}
        editarNota={editarNota}
        eliminarNota={eliminarNota}
        marcarComoFavorita={marcarComoFavorita}
      />
    </div>
  );
}

export default App;
