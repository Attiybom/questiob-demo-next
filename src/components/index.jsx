import QuestionInput from "./QuestionComponents/QuestionInput";
import QuestionRadio from "./QuestionComponents/QuestionRadio";
import QuestionTitle from "./QuestionComponents/QuestionTitle";
import QuestionParagraph from "./QuestionComponents/QuestionParagraph";
import QuestionInfo from "./QuestionComponents/QuestionInfo";
import QuestionTextArea from "./QuestionComponents/QuestionTextArea";
import QuestionCheckbox from "./QuestionComponents/QuestionCheckbox";

export const getComponent = (comp) => {
  const { fe_id, type, isHidden, props = {} } = comp;

  if (isHidden) return null;

  if (type === "questionInput")
    return <QuestionInput fe_id={fe_id} props={props}></QuestionInput>;
  if (type === "questionRadio")
    return <QuestionRadio fe_id={fe_id} props={props}></QuestionRadio>;
  if (type === "questionTitle")
    return <QuestionTitle {...props}></QuestionTitle>;
  if (type === "questionParagraph")
    return <QuestionParagraph {...props}></QuestionParagraph>;
  if (type === "questionInfo") return <QuestionInfo {...props}></QuestionInfo>;
  if (type === "questionTextarea")
    return <QuestionTextArea fe_id={fe_id} props={props}></QuestionTextArea>;
  if (type === "questionCheckbox")
    return <QuestionCheckbox fe_id={fe_id} props={props}></QuestionCheckbox>;

  return null;
};
