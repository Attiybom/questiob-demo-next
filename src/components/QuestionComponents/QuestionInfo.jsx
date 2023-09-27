import React from "react";

const QuestionInfo = (props) => {
  const { title, desc } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default QuestionInfo;
