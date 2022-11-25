import Hello from "../api/hello";
export default function Profile(props: any) {
  console.log(props);
  
  return <h1>id</h1>;
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  return {
    paths: [
      {
        params: {
          id: "3",
        },
      },
      {
        params: {
          id: "4",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const data = await fetch('http://localhost:3000/api/hello')
  const res = await data.json();
  console.log(context);
  return {
    props: {
      data: {
        id: context.params,
        res
      },
    },
  };
}
