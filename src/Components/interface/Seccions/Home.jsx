import React from "react";

export function Home({ onTutorialsClick }) {
  return (
    <div className="seccions">
      <div>
        <p></p>
        <img src="" />
      </div>
      <div>
        <h1></h1>
        <p></p>
      </div>
      <div>
        <div>
          <h1></h1>
          <p></p>
        </div>
        <img src="" />
      </div>
      <div>
        <h2 onClick={onTutorialsClick}>TUTORIALS</h2>
      </div>
    </div>
  );
}
