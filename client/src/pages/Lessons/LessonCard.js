
import React from 'react';

const LessonCard = ({ img,title, description, url,short }) => {
  return (
    <div className="lesson-card">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{short}</p>
      <a href={url} className="button">
        View
      </a>
    </div>
  );
};

export default LessonCard;
