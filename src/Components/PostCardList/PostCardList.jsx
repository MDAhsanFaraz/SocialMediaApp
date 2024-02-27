import PostCard from "../PostCard";
import PostsContext from "../../providers/PostsProvider";
import { useContext } from "react";

function PostCardList() {
  const { posts, setPosts } = useContext(PostsContext);
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
