// pages/question/[id].jsx =>

export default function Question(props) {
  return (
    <>
      <main>
        <h1>question</h1>
        <p>{props.id}</p>
      </main>
    </>
  );
}

// 每次请求都会计算
export async function getServerSideProps(context) {
  const { id = "" } = context.params;

  return {
    props: {
      id,
    },
  };
}
