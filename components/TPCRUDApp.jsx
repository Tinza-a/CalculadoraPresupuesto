// Este component es el component Padre de la app CRUD.

import React from "react";
import Formulario from "./Formulario";

//
const FormCrudApp = () => {
  return (
    <div>
      <h1>Titulo CRUDApp</h1>
      <Formulario /> {/* form */}
      {/* tabla */}
    </div>
  );
};

export default FormCrudApp;
