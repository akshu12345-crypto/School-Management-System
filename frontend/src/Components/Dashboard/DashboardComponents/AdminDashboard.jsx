import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";

const AdminDashboard = () => {
  // State for managing students
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", grade: "A" },
    { id: 2, name: "Jane Smith", grade: "B" },
    // Add more students as needed
  ]);

  // State for managing teachers
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Professor X", subject: "Mathematics" },
    { id: 2, name: "Professor Y", subject: "Science" },
    // Add more teachers as needed
  ]);

  // State for managing dialog visibility and form fields
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState("");
  const [gradeOrSubject, setGradeOrSubject] = useState("");
  const [isStudent, setIsStudent] = useState(true);

  // Handler for adding a student or teacher
  const handleAdd = () => {
    if (isStudent) {
      const newStudent = {
        id: students.length + 1,
        name: name,
        grade: gradeOrSubject,
      };
      setStudents([...students, newStudent]);
    } else {
      const newTeacher = {
        id: teachers.length + 1,
        name: name,
        subject: gradeOrSubject,
      };
      setTeachers([...teachers, newTeacher]);
    }
    setOpenDialog(false);
    setName("");
    setGradeOrSubject("");
  };

  // Handler for deleting a student or teacher
  const handleDelete = (type, id) => {
    if (type === "student") {
      const updatedStudents = students.filter((student) => student.id !== id);
      setStudents(updatedStudents);
    } else if (type === "teacher") {
      const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
      setTeachers(updatedTeachers);
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Students Section */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" component="h2" gutterBottom>
            Students
          </Typography>
          {students.map((student) => (
            <Paper
              key={student.id}
              elevation={3}
              style={{
                padding: "20px",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" gutterBottom>
                {student.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Grade: {student.grade}
              </Typography>
              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => handleDelete("student", student.id)}
              >
                Delete
              </Button>
            </Paper>
          ))}
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => {
              setOpenDialog(true);
              setIsStudent(true);
            }}
          >
            Add Student
          </Button>
        </Grid>

        {/* Teachers Section */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" component="h2" gutterBottom>
            Teachers
          </Typography>
          {teachers.map((teacher) => (
            <Paper
              key={teacher.id}
              elevation={3}
              style={{
                padding: "20px",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" gutterBottom>
                {teacher.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Subject: {teacher.subject}
              </Typography>
              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => handleDelete("teacher", teacher.id)}
              >
                Delete
              </Button>
            </Paper>
          ))}
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => {
              setOpenDialog(true);
              setIsStudent(false);
            }}
          >
            Add Teacher
          </Button>
        </Grid>
      </Grid>

      {/* Add Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add {isStudent ? "Student" : "Teacher"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="gradeOrSubject"
            label={isStudent ? "Grade" : "Subject"}
            fullWidth
            value={gradeOrSubject}
            onChange={(e) => setGradeOrSubject(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminDashboard;
