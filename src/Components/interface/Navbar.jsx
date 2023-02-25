import React, { useState } from "react";

import { Lerning } from "./Seccions/Lerning";
import { Chat } from "./Seccions/Chat";
import { GoNews } from "./Seccions/GoNews";
import { Login } from "./Seccions/Login";

import logo from "../../assets/logo.svg";

export function Navbar() {
  const [hasClass, setHasClass] = useState(false);
  const [title, setTitle] = useState("GONEWS");

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
    <>
      <div className="container-nav">
        <div className="nav">
          <div className="navigation">
            <div className="titleLogo">
              <img onClick={() => Go("GONEWS")} src={logo} />
              <h1>{title}</h1>
            </div>
            <div onClick={toggleClass} className="menu">
              <div className={`line ${hasClass ? "line-clic" : ""}`}></div>
              <div className={`line ${hasClass ? "line-clic" : ""}`}>
                <div></div>
                <div></div>
              </div>
              <div className={`line ${hasClass ? "line-clic" : ""}`}></div>
            </div>
          </div>
        </div>
        <div className={`submenu ${hasClass ? "submenu-clic" : ""}`}>
          <h2 onClick={() => ClicTitle("GONEWS")}>GONEWS</h2>
          <h2 onClick={() => ClicTitle("TUTORIALS")}>TUTORIALS</h2>
          <h2 onClick={() => ClicTitle("CHAT")}>CHAT</h2>
          <h2 onClick={() => ClicTitle("CREAR CUENTA")}>CUENTA</h2>
        </div>
        {!hasClass && (
          <div className="contat-seccions">
            {title === "GONEWS" && <GoNews />}
            {title === "TUTORIALS" && <Lerning />}
            {title === "CREAR CUENTA" && <Login />}
            {title === "CHAT" && <Chat />}
          </div>
        )}
      </div>

      <div className="container-nav1">
        <div className="nav">
          <div className="navigation">
            <div className="titleLogo">
              <img onClick={() => Go("GONEWS")} src={logo} />
              <h1>{title}</h1>
            </div>
            <div className="menu">
              <div className="d">
                <h2 onClick={() => Go("GONEWS")}>GONEWS</h2>
                <h2 onClick={() => Go("TUTORIALS")}>TUTORIALS</h2>
                <h2 onClick={() => Go("CHAT")}>CHAT</h2>
                <h2 onClick={() => Go("CREAR CUENTA")}>CUENTA</h2>
              </div>
            </div>
          </div>
        </div>

        {!hasClass && (
          <div className="contat-seccions">
            {title === "GONEWS" && <GoNews />}
            {title === "TUTORIALS" && <Lerning />}
            {title === "CREAR CUENTA" && <Login />}
            {title === "CHAT" && <Chat />}
          </div>
        )}
      </div>
    </>
  );
}
