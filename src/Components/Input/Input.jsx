import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import { useContext, useState } from "react";
import axios from "axios";
import PostsContext from "../../providers/PostsProvider";

const Input = () => {
  const [postText, setPostText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState("");
  const { posts, setPosts } = useContext(PostsContext);

  async function createPost() {
    setLoading(true);
    axios
      .post(
        "https://dummyapi.io/data/v1/post/create",
        {
          owner: "60d0fe4f5311236168a109ca",
          text: postText,
          image: imageUrl,
          likes: 0,
        },
        { headers: { "app-id": import.meta.env.VITE_APP_ID } }
      )
      .then((response) => {
        const responseObject = response.data;
        console.log(responseObject);
        setPosts([response.data, ...posts]);
        setLoading(false);
        setPostText("");
        setImageUrl("");
      });
  }
  return (
    <Box sx={{ mt: "1rem" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Your next post..."
        value={postText}
        onChange={(e) => {
          setPostText(e.target.value);
        }}
        variant="outlined"
      />
      <TextField
        sx={{ mt: "1rem" }}
        fullWidth
        id="outlined-basic"
        label="Image for your post..."
        variant="outlined"
        value={imageUrl}
        onChange={(e) => {
          setImageUrl(e.target.value);
        }}
      />
      {loading ? (
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
      ) : (
        <Button sx={{ mt: "1rem" }} variant="contained" onClick={createPost}>
          Submit
        </Button>
      )}
    </Box>
  );
};
export default Input;
