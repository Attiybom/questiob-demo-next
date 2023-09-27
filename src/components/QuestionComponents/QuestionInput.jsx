import React from "react";
import styles from "./QuestionInput.module.scss";

const QuestionInput = ({ fe_id, props = {} }) => {
  const { title = "", placeholder = "" } = props;

  return (
    <div>
      <p>{title}</p>
      <div className={styles["input-wrapper"]}>
        <input name={fe_id} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default QuestionInput;
