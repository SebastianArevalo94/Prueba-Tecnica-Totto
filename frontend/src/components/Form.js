import React from "react";

const Form = () => {
  return (
    <div>
      <div className="navinfo">
        <p>Nueva Coleccion Disney Pets</p>
      </div>
      <div className="form d-flex flex-column gap-3 justify-content-center  mt-4">
        <div class="inputs m-auto">
          <input
            type="email"
            class="form-control"
            id="Email"
            placeholder="Email"
            autoComplete="off"
          />
        </div>
        <div class="inputs m-auto">
          <input
            type="email"
            class="form-control"
            id="Email"
            placeholder="Cedula/Identificacion"
            autoComplete="off"
          />
        </div>
        <div class="inputs m-auto">
          <input
            type="email"
            class="form-control"
            id="Email"
            placeholder="Nombre"
            autoComplete="off"
          />
        </div>
        <div class="inputs m-auto">
          <input
            type="email"
            class="form-control"
            id="Email"
            placeholder="Apellido"
            autoComplete="off"
          />
        </div>
        <div class="inputs m-auto">
          <input
            type="email"
            class="form-control"
            id="Email"
            placeholder="Numero Movil"
            autoComplete="off"
          />
        </div>
        <div class="inputs m-auto">
          <input
            type="email"
            class="form-control"
            id="Email"
            placeholder="Departamento"
            autoComplete="off"
          />
        </div>
        <div class="inputs m-auto">
          <input
            type="email"
            class="form-control"
            id="Email"
            placeholder="Fecha de Nacimiento (anio/mm/dd)"
            autoComplete="off"
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
        <button className="button mt-3 m-auto">ENVIAR</button>
      </div>
    </div>
  );
};

export default Form;
