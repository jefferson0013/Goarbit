import React, { useState, useEffect } from "react";
import newsData from "./news.json";

function NewsList({ newsData }) {
  return (
    <div className="container-notice">
      {newsData.map((newsItem) => (
        <div className="notice" key={newsItem.id}>
          <div className="title" >
            <img src={newsItem.logo}/>
            <div>
              <h1>{newsItem.name}</h1>
              <h2>{newsItem.category}</h2>
            </div>
          </div>
          <div className="container-img">
            <img width="200px" src={newsItem.image} />
          </div>
          <details>
            <p>{newsItem.content} </p>
            <summary>
              <h2>Descripcion</h2>
            </summary>
          </details>
        </div>
      ))}
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
      <div></div>
      {loading ? <p>cargando las noticias</p> : <NewsList newsData={news} />}
    </div>
  );
}
