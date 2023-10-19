import React from 'react';

function Formulario({ nuevaNota, setNuevaNota, agregarNota }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevaNota({ ...nuevaNota, [name]: value });
  };

  return (
    <div className='form'>
      <input
        type="text"
        name="titulo"
        value={nuevaNota.titulo}
        onChange={handleChange}
        placeholder="Título"
      />
      <textarea
        name="contenido"
        value={nuevaNota.contenido}
        onChange={handleChange}
        placeholder="Contenido"
      />
      <button onClick={agregarNota}>Agregar Nota</button>
    </div>
  );
}

export default Formulario;
