// pages/question/[id].jsx =>

import PageWrapper from "@/components/PageWrapper";

import styles from "@/styles/question.module.scss";

// 获取组件
import { getComponent } from "@/components";

// api
import { getQuestionById } from "../api/question";

export default function Question(props) {
  const { errno, data, msg = "" } = props;

  // 判断错误
  if (errno !== 0) {
    return (
      <PageWrapper title="错误">
        <h1>错误</h1>
        <p>{msg}</p>
      </PageWrapper>
    );
  }

  const {
    id,
    title = "",
    isDeleted,
    isPublished,
    desc = "",
    componentList,
  } = data || {};
  // console.log("componentList", componentList);

  // 问卷被删除
  if (isDeleted) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h1>{title}</h1>
        <p>问卷已被删除</p>
      </PageWrapper>
    );
  }

  // 问卷未发布
  if (isPublished) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h1>{title}</h1>
        <p>问卷未发布</p>
      </PageWrapper>
    );
  }

  // 遍历组件
  const ComponentListElem = (
    <>
      {componentList.map((c) => {
        const Component = getComponent(c);
        return (
          <div className={styles.componentWrapper} key={c.fe_id}>
            {Component}
          </div>
        );
      })}
    </>
  );

  return (
    <PageWrapper title={title}>
      <form method="post" action="/api/answer">
        <input type="hidden" name="questionId" value={id} />
        {/* <div className={styles.componentWrapper}>
          <QuestionInput
            fe_id="c1"
            props={{ title: "你的姓名", placeholder: "请输入...." }}
          ></QuestionInput>
        </div>
        <div className={styles.componentWrapper}>
          <QuestionRadio
            fe_id="c2"
            props={{
              title: "你的性别",
              options: [
                { value: "male", text: "男" },
                { value: "female", text: "女" },
              ],
              value: "male",
              isVertical: true,
            }}
          ></QuestionRadio>
        </div> */}
        {ComponentListElem}
        <div className={styles[`submitButtonContainer`]}>
          <input type="submit" value="提交" />
        </div>
      </form>
    </PageWrapper>
  );
}

// 每次请求都会计算
export async function getServerSideProps(context) {
  const { id = "" } = context.params;

  const questionData = await getQuestionById(id);

  return {
    props: {
      ...questionData,
    },
  };
}
