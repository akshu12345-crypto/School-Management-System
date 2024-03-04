import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Box,
  Paper,
} from "@mui/material";

function SignUp() {
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");

  const handleSignUp = () => {
    // Handle sign-up logic here
  };

  return (
    <Container
      maxWidth="300"
      sx={{ height: 650, display: "flex", justifyContent: "center" }}
    >
      <Box
        maxWidth="xl"
        sx={{ display: "flex", alignItems: "center", width: 500 }}
      >
        <Grid>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontSize: "200" }}
            gutterBottom
          >
            <b>Student Sign Up</b>
          </Typography>
          <form onSubmit={handleSignUp}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
              </Grid>
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
              <Grid item xs={12}>
                <TextField
                  label="Confirm password"
                  variant="outlined"
                  type="Confirm password"
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
            >
              Sign Up
            </Button>
            <Typography>
              Back to Login ?<a href="#">Click here</a>
            </Typography>
          </form>
        </Grid>
      </Box>
    </Container>
  );
}

export default SignUp;
