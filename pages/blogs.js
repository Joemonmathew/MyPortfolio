import React from "react";
import Head from "next/head";
import BlogPost from "../components/BlogPost";

const blogPosts = [
  {
    id: 1,
    title: "Movie Review",
    description: "Zathura A Space Adventure",
    image: "/images/zathura.jpg",
    link: "https://docs.google.com/document/d/1SnazswtBOeD64iR2hVWSigtcA51H2_FS2VlD0U8Vrqw/edit?usp=sharing",
  },
  {
    id: 2,
    title: "Movie Review",
    description: "The King's Speech",
    image: "/images/thekingsspeech.jpg",
    link: "https://docs.google.com/document/d/1IJDeksHQt2a5Uwn5Co4p7ZlpNPonF1Yq116fNluI4QY/edit?usp=sharing",
  },
  {
    id: 3,
    title: "Tech Blog",
    description: "Firebase Hosting",
    image: "/images/firebase.jpg",
    link: "https://docs.google.com/document/d/1qCHnvBBODYbBNSoDLnGnR-7MPPhGVkWjKXMBF6K2yQg/edit?usp=sharing",
  },
];

export default function Blog() {
  return (
    <section className="flex flex-col m-10  items-center  ">
      <Head>
        <title>My Blog</title>
      </Head>
      <main className="flex flex-col flex-grow max-w-[1000px]">
        <h2 className="text-center mb-2">my Blogs</h2>
        <div className="grid grid-cols-1   gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((blogPost) => (
            <BlogPost key={blogPost.id} {...blogPost} />
          ))}
        </div>
      </main>
    </section>
  );
}
