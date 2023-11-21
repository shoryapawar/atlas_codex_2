import axios from "axios";
import React, { useEffect, useState } from "react";

import "./News.css";
// import Navbar from "../../components/Navbar/Navbar";

const News = () => {
  const [loading, setLoading] = useState(true);
  const [articleRes, setartcileRes] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles/")
      .then((res) => {
        setartcileRes(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="page">
        {loading ? (
          <p>Loading Please Wait</p>
        ) : (
          <div>
            <h1> Space News and Articles</h1>
            <ul className="article">
              {articleRes.map((article) => (
                <div key={article.id} className="news-card">
                  <h2>{article.title}</h2>
                  <p>{article.summary}</p>
                  <img src={article.image_url} alt={article.title} />
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                  <p>Source: {article.news_site}</p>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
