import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import axios from "axios";
import "./News.css";
// gsap
import { gsap } from "gsap";

const Newspage = () => {
  const [loading, setLoading] = useState(true);
  const [articleRes, setartcileRes] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles/?limit=12")
      .then((res) => {
        setartcileRes(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setLoading(false);
      });
  }, []);

  // gsap code
  const el = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .from(".article", {
          x: -800,
          opacity: 0,
          duration: 1,
          delay: 1,
        })
        .from(".card", {
          yoyoEase: true,
          opacity: 0.4,
          duration: 0.3,
          delay: 0.8,
        });
    }, el);
  }, [loading]);

  return (
    <>
      <div className="page">
        {loading ? (
          <p>Loading Please Wait</p>
        ) : (
          <div>
            <h1 style={{ color: "white" }}> Space News and Articles</h1>
            <ul className="article">
              {articleRes.map((article) => (
                <div key={article.id} className="card">
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
                        {article.summary}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button src={article.url} size="small">
                          Know More
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default Newspage;
