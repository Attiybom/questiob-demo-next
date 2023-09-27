import PageWrapper from "@/components/PageWrapper";

function Success() {
  return (
    <PageWrapper title="提交成功">
      <h1>成功</h1>
      <p>问卷提交成功</p>
    </PageWrapper>
  );
}

export default Success;

// export async function getStaticProps() {
//   return {
//     props: {
//       id: "只有在build时候才会执行一次，不会每次请求都重复执行",
//     },
//   };
// }
