import React from "react";
import { Container, Grid, Typography, Paper, Button } from "@mui/material";

const StudentDashboard = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        <b>Student Dashboard</b>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Courses
            </Typography>
            <Typography variant="body1" gutterBottom>
              View and manage your enrolled courses.
            </Typography>
            <Button variant="contained" color="primary">
              View Courses
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Grades
            </Typography>
            <Typography variant="body1" gutterBottom>
              Check your grades and performance.
            </Typography>
            <Button variant="contained" color="primary">
              View Grades
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Schedule
            </Typography>
            <Typography variant="body1" gutterBottom>
              View your class schedule and important dates.
            </Typography>
            <Button variant="contained" color="primary">
              View Schedule
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Resources
            </Typography>
            <Typography variant="body1" gutterBottom>
              Access educational resources and materials.
            </Typography>
            <Button variant="contained" color="primary">
              View Resources
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StudentDashboard;
