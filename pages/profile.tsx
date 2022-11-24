import Layout from "../components/layout";
export default function Profile(props: any) {
  return (
    <Layout>
      <h1>Profile</h1>
      <h1>{props.data.status}</h1>
    </Layout>
  );
}
async function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
export async function getStaticProps() {

  const data = await (
    await fetch(`https://www.dingshiyi.top:9002/user/get_position`)
  ).json();
  await sleep();
  return {
    props: {
      data: data,
    },
  };
}
