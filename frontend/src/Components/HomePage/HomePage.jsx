import React from "react";
import { motion } from "framer-motion";
import { Container, Grid, Box, Button, Paper, Typography } from "@mui/material";
import Students from "../Assets/students.svg";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";

const Homepage = () => {
  const navigate = useNavigate();
  const navigatechooseuser = () => {
    navigate("/chooseuser");
  };
  const navigateSignup = () => {
    navigate("/signup");
  };
  return (
    <div style={{ height: "93vh", display: "flex", alignItems: "center" }}>
      <Container sx={{ display: "flex", marginTop: "30px" }}>
        <div style={{ marginRight: "50px" }}>
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 } }}
            src={Students}
          />
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 } }}
        >
          <Typography sx={{ fontSize: 45 }}>
            <b>
              Welcome to
              <br />
              School Management
              <br /> System
            </b>
          </Typography>
          <Typography>
            Streamline school management, class organization, and add students
            and faculty. Seamlessly track attendance, assess performance, and
            provide feedback. Access records, view marks, and communicate
            effortlessly.
          </Typography>
          <div>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                mb: 3,
                color: "#fff",
                borderColor: "#7f56da",
                backgroundColor: "#7f56da",
              }}
              onClick={navigatechooseuser}
            >
              Login
            </Button>
            <Typography>Don't have an account? </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                mb: 3,
                color: "#fff",
                borderColor: "#7f56da",
                backgroundColor: "#7f56da",
              }}
              onClick={navigateSignup}
            >
              Sign Up
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Homepage;
