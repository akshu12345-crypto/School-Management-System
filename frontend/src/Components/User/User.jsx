import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function User() {
  const navigate = useNavigate();
  const studentLoginNavigate = () => {
    navigate("/login");
  };
  const teacherDashboardNavigate = () => {
    navigate("/teacherdashboard");
  };
  const adminDashboardNavigate = () => {
    navigate("/admindashboard");
  };
  return (
    <motion.Container
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 } }}
      maxWidth="275"
    >
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Card
          sx={{
            backgroundColor: "#0EDE9F",
            maxWidth: 350,
            maxHeight: 250,
            boxShadow: 5,
            margin: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ":hover": {
              boxShadow: 20,
            },
          }}
        >
          <CardContent>
            <SchoolIcon fontSize="large" />
            <Typography variant="h5" component="div">
              Student
            </Typography>

            <Typography variant="body2">
              Login as a student to explore course materials and assignments.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ margin: 2, backgroundColor: "black" }}
              onClick={studentLoginNavigate}
            >
              Login as Student
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            ":hover": {
              boxShadow: 20,
            },
            boxShadow: 5,
            backgroundColor: "#0EDE9F",
            maxWidth: 350,
            maxHeight: 250,
            margin: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardContent>
            <PeopleIcon fontSize="large" />
            <Typography variant="h5" component="div">
              Teacher
            </Typography>

            <Typography variant="body2">
              Login as a teacher to create courses, assignments, and track
              student progress.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ margin: 2, backgroundColor: "black" }}
              onClick={teacherDashboardNavigate}
            >
              Login as Teacher
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            ":hover": {
              boxShadow: 20,
            },
            boxShadow: 5,
            backgroundColor: "#0EDE9F",
            maxWidth: 350,
            maxHeight: 250,
            margin: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardContent>
            <PersonIcon fontSize="large" />
            <Typography variant="h5" component="div">
              Admin
            </Typography>

            <Typography variant="body2">
              Login as an administrator to access the dashboard to manage app
              data.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ margin: 2, backgroundColor: "black" }}
              onClick={adminDashboardNavigate}
            >
              Login as Admin
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </motion.Container>
  );
}
