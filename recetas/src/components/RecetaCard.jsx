import React from 'react';
import sopa from '../assets/sopa.jpg';
import postre from '../assets/postre.jpg';
import segundo from '../assets/segundo.jpg';
import entrada from '../assets/entrada.jpg';

const RecetaCard = ({ tipoReceta, nombreReceta, onDelete }) => {
  const recetas = {
    Entrada: {
      imagenReceta: entrada,
      textoDescriptivo: 'ENTRADA: Para poder realizar de manera correcta una entrada debemos seguir estos pasos, elige una base (pan o hojas de ensalada), añade verduras, queso o proteínas, y condimenta con hierbas frescas y aderezos. Mezcla todo, sazona al gusto y sirve en platos individuales o compartidos. Decora con perejil o semillas tostadas para darle un mejor sabor. ¡Disfruta tu deliciosa entrada!',
    },
    Sopa: {
      imagenReceta: sopa,
      textoDescriptivo: 'SOPA: Para cocinar una deliciosa sopa debemos realizar los siguiente, primero debemos escoger las verduras de nuestra preferencia como base. Despues agrega caldo, especias y tus ingredientes favoritos (fideos, arroz, legumbres). Cocina a fuego lento hasta que las verduras estén tiernas. Para despues servir caliente. ¡Disfruta de esta deliciosa sopa reconfortante!',
    },
    Segundo: {
      imagenReceta: segundo,
      textoDescriptivo: 'SEGUNDO: Para poder realizar un delicioso plato fuerte o segundo, por lo gereal debemos escoger algun carbohidrato, ya sea pollo, carne o pescado. Despues es comun escoger acompañarlos con alguna porcion ya sea de arroz o fideo. Para concluir se suele poner alguna ensalada para acompañar. Todo va de acuerdo a tus gustos. ¡Disfruta de tu comida!',
    },
    Postres: {
      imagenReceta: postre,
      textoDescriptivo: 'POSTRE: Para preparar un irresistible postre, tienes que escoger que postre eralizar, como una torta, un mousse, algun helado, etc. Por lo general deben llevar frutas, mejor si son de temporada, tambien el uso del chocolate y de la vainilla es muy comun y queda muy sabroso. Este es el plato en el que mas puede volar tu imaginacion. ¡Imagina y disfruta de tu postre!',
    },
  };

  const { imagenReceta, textoDescriptivo } = recetas[tipoReceta];

  return (
    <div className="bg-green-400 shadow-lg rounded-md my-10 mx-auto max-w-3xl relative">
      <button
        className="absolute top-2 right-2 p-2 bg-red-500 rounded-full text-white font-bold text-xl"
        onClick={onDelete}
      >
        X
      </button>
      <h2 className="text-green-950 text-3xl text-center font-bold">{nombreReceta}</h2>
      <div className="flex">
        <div className="w-1/2">
          <img src={imagenReceta} alt={nombreReceta} className="w-full h-auto rounded-l-md" />
        </div>
        <div className="w-1/2 bg-white rounded-r-md p-4">
          <p>{textoDescriptivo}</p>
        </div>
      </div>
    </div>
  );
};

export default RecetaCard;
