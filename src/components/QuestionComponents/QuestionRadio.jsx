import React from "react";
import styles from "./QuestionRadio.module.scss";

const QuestionRadio = ({ fe_id, props = {} }) => {
  const { title = "", options = [], value, isVertical } = props;

  return (
    <div>
      <p>{title}</p>
      <ul className={styles.list}>
        {options.map((opt) => {
          const { value: val, text } = opt;

          // 判断横向纵向排列
          let liClassName = "";
          if (isVertical) {
            liClassName = styles.verticalItem;
          } else {
            liClassName = styles.horizontalItem;
          }

          return (
            <li key={val} className={liClassName}>
              <label htmlFor={fe_id}>
                <input
                  type="radio"
                  name={fe_id}
                  value={text}
                  defaultChecked={val === value}
                />
                {text}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionRadio;
