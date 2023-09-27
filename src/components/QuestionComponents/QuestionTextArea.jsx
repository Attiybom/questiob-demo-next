import React from "react";
import styles from "./QuestionTextArea.module.scss";

const QuestionTextArea = ({ fe_id, props = {} }) => {
  const { title = "", placeholder = "" } = props;

  return (
    <div>
      <p>{title}</p>
      <div className={styles["textArea-wrapper"]}>
        <textarea name={fe_id} placeholder={placeholder} rows={5} />
      </div>
    </div>
  );
};

export default QuestionTextArea;
