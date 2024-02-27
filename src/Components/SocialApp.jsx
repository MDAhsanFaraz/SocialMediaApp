import Navbar from "./Navbar/Navbar";
import Input from "./Input/Input";
import MainContainer from "././MainContainer.jsx/MainContainer";
import PostsContext from "../providers/PostsProvider";
import { useState } from "react";

function SocialApp() {
  const [posts, setPosts] = useState([]);
  return (
    <div>
      <PostsContext.Provider value={{ posts, setPosts }}>
        <Navbar />
        <Input />
        <MainContainer />
      </PostsContext.Provider>
    </div>
  );
}
export default SocialApp;
