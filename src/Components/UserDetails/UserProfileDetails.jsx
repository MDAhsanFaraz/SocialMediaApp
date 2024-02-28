import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function UserProfileDetails() {
  let { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://dummyapi.io/data/v1/user/${id}`, {
        headers: { "app-id": import.meta.env.VITE_APP_ID },
      })
      .then((response) => {
        setUser({ ...response.data });
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      <Card sx={{ display: "flex", mt: "1.5rem" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {user.firstName + " " + user.lastName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {user.email}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={user.picture}
          alt="Live from space album cover"
        />
      </Card>
    );
  }
}
