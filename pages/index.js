import React from "react";
import Head from "next/head";
import Work from "./Work";
import About from "./About";
import Blog from "./blogs";
import Footer from "./Footer";
import Contact from "./contact";

export default function Home() {
  return (
   <div>
      <Head>
        <title> Joemon | Front-End Developer</title>
      </Head>
      <section id='About'><About /></section>
      <section id='Work'> <Work /></section>
      <section id='Blogs'><Blog /></section>
      <section id='Contact'><Contact /></section>
    <Footer />
   </div>
  )
}
