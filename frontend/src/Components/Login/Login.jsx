import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");

  const handleSignUp = () => {
    // Handle sign-up logic here
  };
  const navigate = useNavigate();
  const navigateStudentDashboard = () => {
    navigate("/studentdashboard");
  };
  return (
    <Container maxWidth="xs">
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Box>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontSize: "200" }}
          >
            <b>Student Login</b>
          </Typography>
          <form onSubmit={handleSignUp}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  value={studentPassword}
                  onChange={(e) => setStudentPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 2,
                mb: 3,
                color: "#fff",
                borderColor: "#7f56da",
                backgroundColor: "#7f56da",
              }}
              onClick={navigateStudentDashboard}
            >
              Login
            </Button>
          </form>
        </Box>
      </Grid>
    </Container>
  );
}

export default Login;
