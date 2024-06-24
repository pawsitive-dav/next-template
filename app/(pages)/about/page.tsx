import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea
        magni quo repellat, voluptate placeat? Error excepturi libero alias
        recusandae!
      </p>
    </>
  );
}
