import Article from "../components/Article";
import PostsData from "../posts.json";
import Search from "../components/Search";
import { useState, useEffect } from "react";

function Home() {
  const [posts, setPosts] = useState(PostsData);
  const [totalPost, setTotalpost] = useState(PostsData.length);

  const onChangeSearch = (value) => {
    const filteredPosts = PostsData.filter((post) =>
      post.title.toLowerCase().includes(value)
    );
    setPosts(filteredPosts);
    setTotalpost(filteredPosts.length);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onChangeSearch={onChangeSearch} totalPost={totalPost} />
      {
        // Posts.map((Post)=>{
        posts.map((props, index) => {
          return (
            // <Article title={title} date={date} tags={tags}/>

            <Article {...props} key={index} />
          );
        })
      }
    </>
  );
}

export default Home;
