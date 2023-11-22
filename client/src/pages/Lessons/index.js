import "./lesson.scss";
import { lesson } from "../../sample.js";
import LessonCard from "./LessonCard";
import { Parallax } from "react-parallax";
const index = () => {
  return (
    <div className="lesson-main">
      <h1>Lessons</h1>
      <Parallax bgImage="./moon.jpg" bgImageAlt="okay" strength={500}>
        <div className="lessons-container">
          {lesson.map((lesson, index) => (
            <LessonCard key={index} {...lesson} />
          ))}
        </div>
      </Parallax>
    </div>
  );
};

export default index;
