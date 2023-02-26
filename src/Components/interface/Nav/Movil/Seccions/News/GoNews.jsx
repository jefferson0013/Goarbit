import React, { useState, useEffect } from "react";
import newsData from "./news.json";
import { Loading } from "../Loading";

function NewsList({ newsData }) {
  return (
    <div>
      {newsData.map((newsItem) => (
        <div key={newsItem.id}>
          <p>{newsItem.id}</p>
          <h1>{newsItem.name}</h1>
          <div>
            <img width="200px" src={newsItem.image} />
          </div>
          <details>
            <summary>Ver mas:</summary>
            <p>{newsItem.content}</p>
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
      <div>
        <h1>Noticias</h1>
      </div>
      {loading ? <p>cargando las noticias</p> : <NewsList newsData={news} />}
    </div>
  );
}
