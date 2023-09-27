import React, { useState, useEffect } from "react";
import styles from "./QuestionCheckbox.module.scss";

const QuestionCheckbox = ({ fe_id, props }) => {
  const { title = "多选标题", isVertical = false, list = [] } = props;

  const [selectedValues, setSelectedValues] = useState([]);

  // 初始化
  useEffect(() => {
    list.forEach((item) => {
      const { value, checked } = item;

      if (checked) {
        setSelectedValues((selectedValues) => selectedValues.concat(value));
      }
    });
  }, [list]);

  // 选项勾选发生变化时候
  function toggleChecked(value) {
    // console.log("value", value);
    if (selectedValues.includes(value)) {
      // 取消选中
      setSelectedValues((selectedValues) =>
        selectedValues.filter((v) => v !== value)
      );
    } else {
      // 选中
      setSelectedValues(selectedValues.concat(value));
    }
    console.log("selectedValues", selectedValues);
  }

  return (
    <>
      <p>{title}</p>
      {/* 提交 */}
      <input type="hidden" name={fe_id} value={selectedValues.toString()} />
      <ul className={styles.list}>
        {list.map((item) => {
          const { value, text, checked } = item;

          // 判断横向纵向排列
          let liClassName = "";
          if (isVertical) {
            liClassName = styles.verticalItem;
          } else {
            liClassName = styles.horizontalItem;
          }

          return (
            <li className={liClassName} key={value}>
              <label>
                <input
                  checked={selectedValues.includes(value)}
                  type="checkbox"
                  onChange={() => toggleChecked(value)}
                />
                {text}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QuestionCheckbox;
