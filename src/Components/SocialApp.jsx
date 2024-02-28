import Input from "./Input/Input";
import MainContainer from "././MainContainer.jsx/MainContainer";
import PostsContext from "../providers/PostsProvider";
import usePosts from "../hooks/usePosts";
function SocialApp() {
  const [posts, setPosts] = usePosts();
  return (
    <div>
      <PostsContext.Provider value={{ posts, setPosts }}>
        <Input />
        <MainContainer />
      </PostsContext.Provider>
    </div>
  );
}
export default SocialApp;
