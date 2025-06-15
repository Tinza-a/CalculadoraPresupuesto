import React from "react";
import { useState } from "react";

const ValorInicialDb = {
  id: null,
  monto: 0,
};

const Formulario = () => {
  const [form, setForm] = useState(ValorInicialDb);

  // Funcion que se ejecuta al introducir un monto
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "number"
          ? parseFloat(e.target.value)
          : e.target.value,
    });
  };

  //  Funcion que se ejecuta al presionar el boton submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.monto);
  };

  // Funcion que se ejecuta al presionar el boton reset
  const handleReset = () => {
    setForm(ValorInicialDb);
  };

  // HTML:
  return (
    <div>
      <form onClick={handleSubmit}>
        <article>
          {" "}
          {/* Input number */}
          <label>
            Ingrese el valor
            <input
              type="number"
              name="monto"
              min={"0"}
              onChange={handleChange}
              value={form.monto}
            />
          </label>
        </article>

        <br />

        <article>
          <input type="submit" value="Enviar" />
          <input type="reset" value="Reset" onClick={handleReset} />
        </article>
      </form>
    </div>
  );
};

export default Formulario;
