import React, { useState } from 'react';

const Formulario = ({ onAgregarReceta }) => {
  const [receta, setReceta] = useState('');
  const [tipoReceta, setTipoReceta] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guardar los datos en el Local Storage
    localStorage.setItem('receta', receta);
    localStorage.setItem('tipoReceta', tipoReceta);

    // Llamar a la función onAgregarReceta del componente padre
    onAgregarReceta(tipoReceta, receta);

    // Limpiar el formulario
    setReceta('');
    setTipoReceta('');
  };

  return (
    <div className="bg-green-400 shadow-lg rounded-md my-10 py-5 mx-auto max-w-3xl">
      <h2 className="text-green-950 text-3xl text-center font-bold">
        Buscador Recetitas
      </h2>
      <form className="py-2 my-5 mx-10" onSubmit={handleSubmit}>
        <input
          id="Receta"
          type="text"
          value={receta}
          onChange={(e) => setReceta(e.target.value)}
          placeholder="Ingresa la receta"
          className="border-2 w-full p-2 bg-transparent text-black text-lg"
        />

        <select
          id="tipoReceta"
          value={tipoReceta}
          onChange={(e) => setTipoReceta(e.target.value)}
          className="border-2 w-full p-2 mt-4 bg-transparent text-lg"
        >
          <option value="">Selecciona la receta</option>
          <option value="Entrada">Entrada</option>
          <option value="Sopa">Sopa</option>
          <option value="Segundo">Segundo</option>
          <option value="Postres">Postres</option>
        </select>

        <input
          type="submit"
          value="Agregar"
          className="bg-green-950 w-full p-4 mt-6 rounded-md my-5 text-white font-bold cursor-pointer hover:bg-green-700 text-lg"
        />
      </form>
    </div>
  );
};

export default Formulario;
