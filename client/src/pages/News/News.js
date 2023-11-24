import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import axios from "axios";
import "./News.scss";
// gsap
import { gsap } from "gsap";
const Newspage = () => {
  const [loading, setLoading] = useState(true);
  const [articleRes, setartcileRes] = useState(null);
  const [search, setSearch] = useState("");
  //   https://api.spaceflightnewsapi.net/v4/articles/?title_contains=&title_contains_one=&title_contains_all=&summary_contains_one=&summary_contains_all=&news_site=&summary_contains=spacex&published_at_gte=&published_at_lte=&published_at_gt=&published_at_lt=&updated_at_gte=&updated_at_lte=&updated_at_gt=&updated_at_lt=&launch=&event=&has_launch=unknown&has_event=unknown

  useEffect(() => {
    axios
      .get(
        `https://api.spaceflightnewsapi.net/v4/articles/?limit=17&summary_contains=${search}`
      )
      .then((res) => {
        //filtering data
        const filteredArticles = res.data.results.filter(
          (article) => article.news_site !== "NASASpaceflight"
        );

        setartcileRes(filteredArticles);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setLoading(false);
      });
  }, [search]);
  // gsap code
  const el = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline().from(".article", {
        y: -800,
        x: 100,
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
      });
    }, el);
  }, [loading]);

  return (
    <>
      <div className="page" ref={el}>
        {loading ? (
          <p className="loading">Loading....</p>
        ) : (
          <div>
            <h1 style={{ color: "white" }}> Space News and Articles </h1>

            <div className="search-box">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={() => setSearch("")}> Clear Search </button>
            </div>

            <div className="article">
              {articleRes?.map((article) => (
                <div key={article?.id} className="news-card">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={article.image_url}
                      title={article.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {article.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        { article.summary}
                        {/* {article.summary} */}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button src={article?.url} size="small">
                          Know More
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Newspage;
