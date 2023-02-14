import React, { useState } from "react";

import { Defect } from "./Defect";
import { Home } from "./Seccions/Home";
import { Lerning } from "./Seccions/Lerning";
import { Contact } from "./Seccions/Contact";
import { Accout } from "./Seccions/Accout";
import { Chat } from "./Seccions/Chat";

import logo from "../../assets/logo.svg";

export function Navbar() {
  const [hasClass, setHasClass] = useState(false);
  const [title, setTitle] = useState("GOARBIT");

  function toggleClass() {
    setHasClass(!hasClass);
  }

  function ClicTitle(T) {
    setTitle(T);
    setHasClass(!hasClass);
  }
  function Go(T) {
    setTitle(T);
    setHasClass();
  }

  return (
    <div className="container-nav">
      <div className="nav">
        <div className="navigation">
          <div className="titleLogo">
            <img onClick={() => Go("GOARBIT")} src={logo} />
            <h1>{title}</h1>
          </div>
          <div onClick={toggleClass} className="menu">
            <div className={`line ${hasClass ? "line-clic" : ""}`}></div>
            <div className={`line ${hasClass ? "line-clic" : ""}`}></div>
            <div className={`line ${hasClass ? "line-clic" : ""}`}></div>
          </div>
        </div>
      </div>
      <div className={`submenu ${hasClass ? "submenu-clic" : ""}`}>
        <h2 onClick={() => ClicTitle("INICIO")}>INICIO</h2>
        <h2 onClick={() => ClicTitle("TUTORIALS")}>TUTORIALS</h2>
        <h2 onClick={() => ClicTitle("CONTACTO")}>CONTACTO</h2>
        <h2 onClick={() => ClicTitle("CREAR CUENTA")}>CREAR CUENTA</h2>
        <h2 onClick={() => ClicTitle("CHAT")}>CHAT</h2>
      </div>
      {!hasClass && (
        <div className="contat-seccions">
          {title === "GOARBIT" && <Defect />}
          {title === "INICIO" && <Home />}
          {title === "TUTORIALS" && <Lerning />}
          {title === "CONTACTO" && <Contact />}
          {title === "CREAR CUENTA" && <Accout />}
          {title === "CHAT" && <Chat />}
        </div>
      )}
    </div>
  );
}
