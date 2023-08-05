import React, { useState } from "react";
import { PostInfo } from "../services/http";
import Swal from "sweetalert2";

const Form = () => {
  const initialState = {
    email: "",
    cedula: "",
    nombre: "",
    apellido: "",
    numero: "",
    departamento: "",
    fechaNacimiento: "",
    hijos: "",
    genero: "",
  };

  const [form, setForm] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleSubmit = () => {
    console.log(form);
    // PostInfo()
    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .catch();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Has actualizado tus datos',
      showConfirmButton: false,
      timer: 1500
    })
  };

  return (
    <div>
      <div className="navinfo">
        <p>Nueva Coleccion Disney Pets</p>
      </div>
      <div className="form d-flex flex-column gap-3 justify-content-center  mt-4">
        <div class="inputs m-auto">
          <input
            type="email"
            name="email"
            class="form-control"
            id="email"
            placeholder="Email"
            autoComplete="off"
            value={form.email}
            onChange={handleInputChange}
          />
        </div>
        <div class="inputs m-auto">
          <input
            type="number"
            class="form-control"
            id="cedula"
            name="cedula"
            placeholder="Cedula/Identificacion"
            autoComplete="off"
            value={form.cedula}
            onChange={handleInputChange}
          />
        </div>
        <div class="inputs m-auto">
          <input
            type="text"
            class="form-control"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            autoComplete="off"
            value={form.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div class="inputs m-auto">
          <input
            type="text"
            class="form-control"
            id="apellido"
            name="apellido"
            placeholder="Apellido"
            autoComplete="off"
            value={form.apellido}
            onChange={handleInputChange}
          />
        </div>
        <div class="inputs m-auto">
          <input
            type="number"
            class="form-control"
            id="numero"
            name="numero"
            placeholder="Numero Movil"
            autoComplete="off"
            value={form.numero}
            onChange={handleInputChange}
          />
        </div>
        <div class="inputs m-auto">
          <input
            type="text"
            class="form-control"
            id="departamento"
            name="departamento"
            placeholder="Departamento"
            autoComplete="off"
            value={form.departamento}
            onChange={handleInputChange}
          />
        </div>
        <div class="inputs m-auto">
          <input
            type="text"
            name="fechaNacimiento"
            class="form-control"
            id="Email"
            placeholder="Fecha de Nacimiento (anio/mm/dd)"
            autoComplete="off"
            value={form.fechaNacimiento}
            onChange={handleInputChange}
          />
        </div>
        <div class="inputs m-auto">
          <label for="tieneHijos">¿Tienes hijos?</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="tieneHijos"
              id="opcionSi"
              value="si"
            />
            <label class="form-check-label" for="opcionSi">
              Sí
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="tieneHijos"
              id="opcionNo"
              value="no"
            />
            <label class="form-check-label" for="opcionNo">
              No
            </label>
          </div>
        </div>
        <div class="inputs m-auto">
          <label for="tieneHijos">Genero</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="tieneHijos"
              id="opcionSi"
              value="si"
            />
            <label class="form-check-label" for="opcionSi">
              Masculino
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="tieneHijos"
              id="opcionNo"
              value="no"
            />
            <label class="form-check-label" for="opcionNo">
              Femenino
            </label>
          </div>
        </div>
        <button className="button mt-3 m-auto" onClick={handleSubmit}>
          ENVIAR
        </button>
      </div>
    </div>
  );
};

export default Form;
