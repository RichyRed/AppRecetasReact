import React from 'react';

const Modal = ({ recetas }) => {
  const count = recetas.reduce((total, receta) => total + 1, 0);

  return (
    <div className="modal">
      <p>Total de recetas: {count}</p>
    </div>
  );
};

export default Modal;
