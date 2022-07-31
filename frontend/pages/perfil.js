import React from 'react';
import NuevoRepuestoForm from '../components/NuevoRepuestoForm';

const Perfil = () => {
  return (
    //TODO:datos del usuario a la izquierda, formulario de nuevo repuesto a la derecha
    //abajo una tabla con todos los repuestos posteados con crud
    <div className="container mx-auto">
      <NuevoRepuestoForm />
    </div>
  );
};

export default Perfil;
