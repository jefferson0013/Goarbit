import React, { useState } from "react";

import { Loading } from "../Movil/Seccions/Loading";
import { Lerning } from "../Movil/Seccions/Lerning";
import { Chat } from "../Movil/Seccions/Chat";
import { GoNews } from "../Movil/Seccions/News/GoNews";
import { Login } from "../Movil/Seccions/Login";
import logo from "../../../../../public/assets/logo.svg";

export function NavMovil() {
  const [hasClass, setHasClass] = useState(false);
  const [title, setTitle] = useState("GONEWS");
  const [isLoading, setIsLoading] = useState(false);

  function toggleClass() {
    setHasClass(!hasClass);
  }

  function ClicTitle(T) {
    setIsLoading(true);
    setTitle(T);
    setHasClass(!hasClass);
    setHasClass(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  function Go(T) {
    setIsLoading(true);
    setTitle(T);
    setHasClass();
    setHasClass(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  return (
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
          {isLoading ? (
            <Loading />
          ) : title === "GONEWS" ? (
            <GoNews />
          ) : title === "TUTORIALS" ? (
            <Lerning />
          ) : title === "CREAR CUENTA" ? (
            <Login />
          ) : title === "CHAT" ? (
            <Chat />
          ) : null}
        </div>
      )}
    </div>
  );
}
