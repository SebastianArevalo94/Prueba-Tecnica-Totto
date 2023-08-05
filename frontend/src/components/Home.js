import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckUser } from "../services/http";
import Swal from 'sweetalert2'

const Home = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setEmail(target.value);
    console.log(email);
  };

  const handleSubmit = () => {
    console.log(email);
    // CheckUser()
    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .catch();
  };

  return (
    <div>
      <div className="navinfo">
        <p>Nueva Coleccion Disney Pets</p>
      </div>
      <p className="title">
        Ingresa tu correo para validarte en nuestra base de datos y continuar
        con el proceso
      </p>
      <div class="d-flex flex-column m-5">
        <input
          type="email"
          class="form-control"
          id="Email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          autoComplete="off"
        />
        <button className="button mt-4 m-auto" onClick={handleSubmit}>
          ENVIAR
        </button>
      </div>
      <div className="info text-center">
        <p>Necesitas ayuda?</p>
        <p>Linea nacional: 01 8000 510203 - Bogota: 390 73 93</p>
        <p>Email: servicioalcliente@totto.com</p>
        <p>o escribenos a la linea de WhatsApp: 320 2200200</p>
      </div>
    </div>
  );
};

export default Home;
