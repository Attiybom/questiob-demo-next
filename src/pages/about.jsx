function About() {
  return <div>Welcome to about!</div>;
}

export default About;

export async function getStaticProps() {
  return {
    props: {
      id: "只有在build时候才会执行一次，不会每次请求都重复执行",
    },
  };
}
