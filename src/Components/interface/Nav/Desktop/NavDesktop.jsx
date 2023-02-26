import React, { useState } from "react";

import { Loading } from "./Seccions/Loading";
import { Lerning } from "./Seccions/Lerning";
import { Chat } from "./Seccions/Chat";
import { GoNews } from "../Secciones/GoNews";
import { Login } from "./Seccions/Login";
import logo from "/logo.svg";

export function NavDesktop() {
  const [hasClass, setHasClass] = useState(false);
  const [title, setTitle] = useState("GONEWS");
  const [isLoading, setIsLoading] = useState(false);

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

