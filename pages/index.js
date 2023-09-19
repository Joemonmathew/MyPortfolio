import React from "react";
import MainContent from './MainContent';
import Head from "next/head";

export default function Home() {
  return (
   <div>
      <Head>
        <title> Joemon | Front-End Developer</title>
      </Head>
    <MainContent />
   </div>
  )
}
