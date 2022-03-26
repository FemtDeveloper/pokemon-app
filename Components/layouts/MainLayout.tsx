import React, { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  title?: string;
}
const origin = typeof window === "undefined" ? "" : window.location.origin;

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
        <meta
          property="og:title"
          content={`information about pokemon ${title}`}
        />
        <meta
          property="og:description"
          content={`Get aditional information about ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main style={{ padding: "0 20px" }}>{children}</main>
    </>
  );
};

// export default MainLayout;
