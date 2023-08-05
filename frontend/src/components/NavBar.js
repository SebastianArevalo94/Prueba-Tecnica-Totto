import React from "react";
import Image from "../images/logo.png";
import { RiFileList2Line } from "react-icons/ri";
import { PiBackpack } from "react-icons/pi";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex justify-content-between">
        <img
          className="logo"
          onClick={() => {
            navigate("/");
          }}
          src={Image}
          width="170px"
          height="55px"
        />
        <div className="d-flex flex-column">
          <div className="">
            <p className="subtitle">
              Escribenos por WhatsApp: 302 2200200 | Servicio al cliente
            </p>
            <div className="d-flex justify-content-evenly">
              <div className="d-flex">
                <RiFileList2Line style={{ fontSize: "22px" }} />
                <p>MIS PEDIDOS</p>
              </div>
              <div className="backpack d-flex">
                <PiBackpack
                  style={{
                    fontSize: "22px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
