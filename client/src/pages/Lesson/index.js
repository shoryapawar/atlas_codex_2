import { useState, useEffect } from "react";
import axios from "axios";
import "./lesson.scss";

const Lesson = () => {
  const [lesson, setLesson] = useState([]);

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/lesson/celestial"
        );
        setLesson(res.data);
      } catch (error) {
        console.error("Error in lesson backend api", error);
      }
    };

    fetchLesson();
  }, []);

  const sortedLesson = lesson?.sort((a, b) => a.id - b.id);

  return (
    <div className="lesson-main">
        <h1> Celestial Bodies</h1>
      {sortedLesson?.map((it) => (
        <div key={it.id} className="lesson">
          <img src={it.imgurl} alt={it.title} />
          <h2>{it.title}</h2>
          <h3>{it.body}</h3>
        </div>
      ))}
    </div>
  );
};

export default Lesson;
