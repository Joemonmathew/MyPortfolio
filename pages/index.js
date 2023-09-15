import React from "react";
import MainContent from '../components/MainContent'
import Sidebar from "../components/Sidebar";
import Head from "next/head";
export default function Home() {
  return (
   <div className="flex-row">
      <Head>
        <title> Joemon | Front-End Developer</title>
      </Head>
      <Sidebar />
    <MainContent />

     
   </div>
  )
}
