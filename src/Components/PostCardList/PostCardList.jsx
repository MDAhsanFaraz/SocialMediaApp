import { useEffect, useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";

function PostCardList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // we will download the content from dummyapi.io
    axios
      .get("https://dummyapi.io/data/v1/post", {
        headers: { "app-id": import.meta.env.VITE_APP_ID },
      })
      .then((response) => {
        const responseObject = response.data;
        setPosts([...responseObject.data]);
      });
  }, []);
  return posts.length == 0
    ? "loading..."
    : posts.map((post) => (
        <PostCard
          authorFirstName={post.owner.firstName}
          content={post.text}
          image={post.image}
          key={post.id}
        />
      ));
}
export default PostCardList;
