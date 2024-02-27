import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
const Input = () => {
  const [postText, setPostText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function createPost() {
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
      <Button sx={{ mt: "1rem" }} variant="contained" onClick={createPost}>
        Contained
      </Button>
    </Box>
  );
};
export default Input;
