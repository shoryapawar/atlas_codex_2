import "./lesson.scss";
import { lesson } from "../../sample.js";
import LessonCard from "./LessonCard";
const index = () => {
  return (
    <div className="lesson-main">
      <h1>Lessons</h1>
      <div className="lessons-container">
        {lesson.map((lesson, index) => (
          <LessonCard key={index} {...lesson} />
        ))}
      </div>
    </div>
  );
};

export default index;
