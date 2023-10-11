import Link from "next/link";
const BlogPost = ({ link, image, title, description }) => {
    return (
      <Link className=" bg-primary-blue" href={link} >
        <img src={image} alt={title} className="m-auto my-2 h-48 object-cover" />
        <h3 className=" text-lg font-bold text-center">{title}</h3>
        <p className="text-center">{description}</p>
      </Link>
    );
  };
  
  export default BlogPost;
  