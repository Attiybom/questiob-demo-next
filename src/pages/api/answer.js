import { postAnswer } from "@/services/answer";

function genAnswerInfo(reqBody) {
  const answerInfoList = [];

  Object.keys(reqBody).forEach((key) => {
    if (key === "questionId") return;
    answerInfoList.push({
      componentId: key,
      value: reqBody[key],
    });
  });

  return {
    questionId: reqBody.questionId || "",
    answerInfoList,
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(200).json({ errno: -1, msg: "method 错误" });
  }

  // 获取并格式化表单数据
  const answerInfo = genAnswerInfo(req.body);
  console.log("answerInfo", answerInfo);

  try {
    // 提交数据到mock服务端
    const postRes = await postAnswer(answerInfo);
    console.log("postRes", postRes);
    if (postRes.errno === 0) {
      // 提交成功，跳转页面
      res.redirect("/success");
    } else {
      // 提交失败，跳转页面
      // res.redirect("/fail");
    }
  } catch (error) {
    // 提交失败，跳转页面
    // res.redirect("/fail");
  }
  res.status(200).json({ errno: 0, msg: "提交成功" });
}
