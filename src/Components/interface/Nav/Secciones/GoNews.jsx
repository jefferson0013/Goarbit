import React, { useState, useEffect } from "react";
import newsData from "./news.json";
import newCategory from "./category.json";
import { Notice } from "./Loadings/Notice";

function NewsList({ newsData }) {
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const download = () => {
    const currentDate = new Date();
    const uniqueNumber = currentDate.getTime();
    return `goNews_${uniqueNumber}.jpg`;
  };

  const handleCategoryChange = (newCategory) => {
    setIsLoading(true);
    setCategory(newCategory);
    setTimeout(() => {
      setIsLoading(false);
    }, navigator.connection.downlink * 1000);
  };

  return (
    <div className="container-notice">
      <div className="container-category">
        {newCategory.map((c) => (
          <div
            className="category"
            key={c.category}
            onClick={() => handleCategoryChange(c.category)}
          >
            <div>
              <img src={c.logo} />
            </div>
            <h3>{c.name}</h3>
          </div>
        ))}
      </div>
      {isLoading ? (
        <>
          <Notice />
          <Notice />
          <Notice />
        </>
      ) : (
        <>
          {newsData.map((newsItem) => (
            <div key={newsItem.id}>
              {(newsItem.category === category || category === null) && (
                <>
                  <div className="notice">
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
                          {newsItem.content} <br />{" "}
                          <b>Fecha: {newsItem.date} </b>
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
                </>
              )}
            </div>
          ))}
        </>
      )}
      <div className="final">a</div>
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
    }, navigator.connection.downlink * 1000);
  }, []);

  return (
    <div className="seccions ">
      {loading ? <p>cargando las noticias</p> : <NewsList newsData={news} />}
    </div>
  );
}
