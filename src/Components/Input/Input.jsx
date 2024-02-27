import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Input = () => {
  return (
    <Box sx={{ mt: "1rem" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Your next post..."
        variant="outlined"
      />
      <TextField
        sx={{ mt: "1rem" }}
        fullWidth
        id="outlined-basic"
        label="Image for your post..."
        variant="outlined"
      />
      <Button sx={{ mt: "1rem" }} variant="contained">
        Contained
      </Button>
    </Box>
  );
};
export default Input;
