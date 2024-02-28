import Navbar from "./Navbar/Navbar";
import Input from "./Input/Input";
import MainContainer from "././MainContainer.jsx/MainContainer";
import PostsContext from "../providers/PostsProvider";
import { useState, useEffect } from "react";
import axios from "axios";

function SocialApp() {
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
