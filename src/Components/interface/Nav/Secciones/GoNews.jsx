import React, { useState, useEffect } from "react";
import newsData from "./news.json";

function NewsList({ newsData }) {
  const download = () => {
    const currentDate = new Date();
    const uniqueNumber = currentDate.getTime();
    return `goNews_${uniqueNumber}.jpg`;
  };

  return (
    <div className="container-notice">
      <div className="title-news">
        <h1>Bienvenido</h1>
      </div>
      {newsData.map((newsItem) => (
        <div className="notice" key={newsItem.id}>
          <div className="title">
            <img src={newsItem.logo} />
            <div>
              <h1>{newsItem.name}</h1>
              <h2>{newsItem.category}</h2>
            </div>
          </div>
          <div className="container-img">
            <img width="200px" src={newsItem.image} />
          </div>
          <div className="description">
            <details>
              <p>
                {newsItem.content} <br /> <b>Fecha: {newsItem.date} </b>{" "}
              </p>
              <summary>
                <h2>Descripcion</h2>
                <div className="img-download">
                  <a href={newsItem.image} download={download()}>
                    <img src="download.svg" alt="" />
                  </a>
                </div>
              </summary>
            </details>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
}

export function GoNews() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setNews(newsData);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="seccions ">
      {loading ? <p>cargando las noticias</p> : <NewsList newsData={news} />}
    </div>
  );
}
