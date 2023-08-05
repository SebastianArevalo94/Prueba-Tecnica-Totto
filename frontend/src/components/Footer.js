import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div class="footer d-flex justify-content-evenly">
      <div className="">
        <p className="p-left">Quiénes somos</p>
        <p className="p-left">Linea Ética</p>
        <p className="p-left">Aviso de privacidad</p>
        <p className="p-left">Talento Totto</p>
        <p className="p-left">Sostenibilidad</p>
        <p className="p-left">Prensa</p>
        <p className="p-left">Negocios empresariales</p>
        <p className="p-left">Politica de Tratamiento de Datos</p>
      </div>
      <div>
        <p className="p-left">Siguenos</p>
        <p className="p-left">Encuentra tu tienda</p>
        <p className="p-left">Tiendas Totto Pets</p>
        <p className="p-left">Promociones vigentes</p>
        <p className="p-left">Envios y Entregas</p>
        <p className="p-left">Cambios y Devoluciones</p>
        <p className="p-left">Escríbenos por WhatsApp</p>
        <p className="p-left">Keypago, paga fácil</p>
      </div>
      <div>
        <p className="text-center">Servicio al cliente</p>
        <div className="d-flex gap-4">
          <FaFacebook style={{ fontSize: "22px" }}/>
          <FaTwitter style={{ fontSize: "22px" }} />
          <FaInstagram style={{ fontSize: "22px" }} />
          <FaYoutube style={{ fontSize: "22px" }} />
        </div>
      </div>
      <div className="footer-4">
        <p className="p-left bold">¡Regístrate o actualiza tus datos!</p>
        <p className="p-left">
          Te damos la bienvenida registrando y/o actualizando tus datos, recibe
          10% de descuento en tu próxima compra redímelo únicamente en nuestra
          tienda online.
        </p>
        <p className="p-left">
          Y además disfruta 25% de descuento en tu compra en el mes de
          cumpleaños.
        </p>
        <p className="p-left">
          "Los descuentos de registro/actualización y cumpleaños no son
          acumulables. "Aplican términos y condiciones.
        </p>
        <p className="p-left">
          "Aplica para productos sin descuento o full Price"
        </p>
      </div>
    </div>
  );
};

export default Footer;
