import Link from "next/link";
const BlogPost = ({ blogPost }) => {
    return (
      <Link className=" bg-primary-blue" href={blogPost.link} >
        <img src={blogPost.image} alt={blogPost.title} className="m-auto my-2 h-48 object-cover" />
        <h3 className=" text-lg font-bold text-center">{blogPost.title}</h3>
        <p className="text-center">{blogPost.description}</p>
      </Link>
    );
  };
  
  export default BlogPost;
  