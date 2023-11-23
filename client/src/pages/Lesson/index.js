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
      {sortedLesson?.map((it) => (
        <div key={it.id} className="lesson">
          <h1>{it.title}</h1>
          <h3>{it.body}</h3>
          <img src={it.imgurl} alt={it.title} />
        </div>
      ))}
    </div>
  );
};

export default Lesson;
