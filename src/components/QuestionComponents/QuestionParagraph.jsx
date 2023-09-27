import React from "react";

const QuestionParagraph = (props) => {
  const { text = "一行段落", isCenter = false } = props;
  // 样式
  const style = {};
  // 居中
  if (isCenter) style.textAlign = "center";

  // 换行
  const textList = text.split("\n");

  return (
    <p className={style}>
      {textList.map((t, index) => (
        <span key={index}>
          {/* 如果该文本不是第一个，则添加上一个br，换行 */}
          {index > 0 && <br></br>}
          {t}
        </span>
      ))}
    </p>
  );
};

export default QuestionParagraph;
