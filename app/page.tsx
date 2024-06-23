import Head from "next/head";

export default function Home() {
  const baseUrl = process.env.BASE_URL || "";
  const textTest = "Test Text";

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea
        magni quo repellat, voluptate placeat? Error excepturi libero alias
        recusandae!
      </p>
      <div>{textTest}</div>
      <div>{baseUrl}</div>
    </>
  );
}
