import React from 'react';

const Modal = ({ recetas }) => {
  const count = recetas.reduce((total, receta) => total + 1, 0);

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', textAlign: 'center', position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
      <p style={{ fontWeight: 'bold' }}>Total de recetas: {count}</p>
    </div>
  );
};

export default Modal;
