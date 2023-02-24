import React, { useState } from "react";
import sent from "../../../assets/sent.svg";

export function Chat() {
  const [value, setValue] = useState("");

  // localStorage.setItem();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const text = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="seccions-chat">
      <div className="chat">
        <div className="text">
          <div className="mesaje">
            <h1>El chat aun esta en produccion</h1>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="contain-form">
        <input
          type="text"
          placeholder="Escribe un mensaje"
          required
          value={value}
          onChange={text}
        />
        <div></div>

        <button onChange={text} type="submit">
          <img src={sent} />
        </button>
      </form>
    </div>
  );
}
