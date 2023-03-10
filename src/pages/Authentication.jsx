import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  //   const navigate = useNavigate();
  //   const user = localStorage.getItem("user");
  //   console.log(user);

  // authentication function
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userInfo = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
    };
    localStorage.setItem("user", JSON.stringify(userInfo));

    // window.location.reload();
  };

  //   if (user?.name && user?.phone && user?.email) {
  //     navigate("/");
  //   }

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* icon */}
          <Avatar sx={{ m: 2, width: 56, height: 56 }}>
            <LockOutlinedIcon />
          </Avatar>

          {/* title */}
          <Typography component="h1" variant="h5">
            Put your information
          </Typography>

          {/* input sention */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {/* name input */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />

            {/* phone input */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="phone"
            />

            {/* email input */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Authentication;
