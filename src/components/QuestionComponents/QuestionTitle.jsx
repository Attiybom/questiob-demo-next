import React from "react";

const QuestionTitle = (props) => {
  const { text = "个人信息调研", level = 1, isCenter = false } = props;

  // 样式
  const style = {};

  if (isCenter) style.textAlign = "center";

  if (level === 1) return <h1 style={style}>{text}</h1>;
  if (level === 2) return <h2 style={style}>{text}</h2>;
  if (level === 3) return <h3 style={style}>{text}</h3>;

  return <></>;
};

export default QuestionTitle;
