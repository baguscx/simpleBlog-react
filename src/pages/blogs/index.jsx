import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Blog() {
  const posts = useLoaderData();

  return (
    <>
      <h1>Blogs</h1>
      {posts.map((item, index) => {
        return (
          <p key={index}>
            <Link to={`/blogs/${item.id}`}>{item.title}</Link>
          </p>
        );
      })}
    </>
  );
}

export default Blog;
