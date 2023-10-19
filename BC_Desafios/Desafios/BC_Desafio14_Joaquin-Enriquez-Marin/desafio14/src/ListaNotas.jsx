import React from 'react';

function ListaNotas({ notas, editarNota, eliminarNota, marcarComoFavorita }) {
  return (
    <div>
      {notas.map((nota) => (
        <div key={nota.id} className={`nota ${nota.favorita ? 'favorita' : ''}`}>
          <h3>{nota.titulo}</h3>
          <p>{nota.contenido}</p>
          <button onClick={() => editarNota(nota.id, prompt('Editar nota', nota.contenido))}>Editar</button>
          <button onClick={() => eliminarNota(nota.id)}>Eliminar</button>
          <button onClick={() => marcarComoFavorita(nota.id)}>
            {nota.favorita ? 'Quitar de favoritas' : 'Marcar como favorita'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListaNotas;
