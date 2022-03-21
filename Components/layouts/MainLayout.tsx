import React, { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  title?: string;
}
export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta
          name="description"
          content={`Infromación sobre el pokemon ${title}`}
        />
        <meta name="author" content="Felix Miranda" />
        <meta name="keywords" content={`Pokemon, ${title}, pokedex`} />
      </Head>
      <Navbar />
      <main style={{ padding: "0 20px" }}>{children}</main>
    </>
  );
};

// export default MainLayout;
