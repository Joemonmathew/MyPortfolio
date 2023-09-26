import React from "react";
import Head from "next/head";
import Work from "./Work";
import About from "./About";

export default function Home() {
  return (
   <div>
      <Head>
        <title> Joemon | Front-End Developer</title>
      </Head>
    <About />
    <Work />
   </div>
  )
}
