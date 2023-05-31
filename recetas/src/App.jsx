import React, { useState, useEffect } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Header from './components/Header';
import RecetaCard from './components/RecetaCard';
import Modal from './components/Modal';

const App = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    // Obtener las recetas del almacenamiento local
    const recetasLocalStorage = localStorage.getItem('recetas');

    // Si existen recetas en el almacenamiento local, establecerlas en el estado inicial
    if (recetasLocalStorage) {
      setRecetas(JSON.parse(recetasLocalStorage));
    }
  }, []);

  const handleAgregarReceta = (tipoReceta, nombreReceta) => {
    const nuevaReceta = { tipoReceta, nombreReceta };

    // Obtener las recetas existentes del almacenamiento local
    const recetasLocalStorage = localStorage.getItem('recetas');
    let recetas = [];

    // Si existen recetas en el almacenamiento local, convertir el JSON en un array
    if (recetasLocalStorage) {
      recetas = JSON.parse(recetasLocalStorage);
    }

    // Agregar la nueva receta al array de recetas
    recetas.push(nuevaReceta);

    // Guardar el array actualizado en el almacenamiento local
    localStorage.setItem('recetas', JSON.stringify(recetas));

    setRecetas(recetas);
  };

  const handleEliminarReceta = (index) => {
    const nuevasRecetas = [...recetas];
    nuevasRecetas.splice(index, 1);
    setRecetas(nuevasRecetas);

    // Guardar las recetas actualizadas en el almacenamiento local
    localStorage.setItem('recetas', JSON.stringify(nuevasRecetas));
  };

  return (
    <div className="bg-green-200 min-h-screen">
      <Header />
      <Formulario onAgregarReceta={handleAgregarReceta} />
      {recetas.map((receta, index) => (
        <RecetaCard
          key={index}
          tipoReceta={receta.tipoReceta}
          nombreReceta={receta.nombreReceta}
          onDelete={() => handleEliminarReceta(index)}
        />
      ))}
      <Modal recetas={recetas} />
    </div>
  );
};

export default App;
