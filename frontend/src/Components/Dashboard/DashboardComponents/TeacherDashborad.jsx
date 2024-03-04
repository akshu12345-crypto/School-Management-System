import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  IconButton,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";

const TeacherDashboard = () => {
  // Dummy data for initial students
  const initialStudents = [
    { id: 1, name: "John Doe", grade: "A" },
    { id: 2, name: "Jane Smith", grade: "B" },
    { id: 3, name: "Tom Brown", grade: "C" },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [newStudent, setNewStudent] = useState({ id: "", name: "", grade: "" });
  const [isEditing, setIsEditing] = useState(false);

  const handleAddStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudent({ id: "", name: "", grade: "" });
  };

  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  const handleEditStudent = (id) => {
    setIsEditing(id);
  };

  const handleSaveStudent = (id) => {
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        <b>Teacher Dashboard</b>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Add New Student
            </Typography>
            <TextField
              label="Roll No"
              variant="outlined"
              value={newStudent.id}
              onChange={(e) =>
                setNewStudent({ ...newStudent, id: e.target.value })
              }
              fullWidth
              style={{ marginBottom: "10px" }}
            />
            <TextField
              label="Name"
              variant="outlined"
              value={newStudent.name}
              onChange={(e) =>
                setNewStudent({ ...newStudent, name: e.target.value })
              }
              fullWidth
              style={{ marginBottom: "10px" }}
            />
            <TextField
              label="Grade"
              variant="outlined"
              value={newStudent.grade}
              onChange={(e) =>
                setNewStudent({ ...newStudent, grade: e.target.value })
              }
              fullWidth
              style={{ marginBottom: "10px" }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddStudent}
            >
              Add Student
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Students List
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Grade</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.id}</TableCell>
                      <TableCell>
                        {isEditing === student.id ? (
                          <TextField
                            value={student.name}
                            onChange={(e) =>
                              setStudents(
                                students.map((s) =>
                                  s.id === student.id
                                    ? { ...s, name: e.target.value }
                                    : s
                                )
                              )
                            }
                          />
                        ) : (
                          student.name
                        )}
                      </TableCell>
                      <TableCell>
                        {isEditing === student.id ? (
                          <TextField
                            value={student.grade}
                            onChange={(e) =>
                              setStudents(
                                students.map((s) =>
                                  s.id === student.id
                                    ? { ...s, grade: e.target.value }
                                    : s
                                )
                              )
                            }
                          />
                        ) : (
                          student.grade
                        )}
                      </TableCell>
                      <TableCell>
                        {isEditing === student.id ? (
                          <>
                            <IconButton
                              onClick={() => handleSaveStudent(student.id)}
                            >
                              <SaveIcon />
                            </IconButton>
                            <IconButton onClick={handleCancelEdit}>
                              <CancelIcon />
                            </IconButton>
                          </>
                        ) : (
                          <>
                            <IconButton
                              onClick={() => handleEditStudent(student.id)}
                            >
                              <EditIcon />
                            </IconButton>
                            <IconButton
                              onClick={() => handleDeleteStudent(student.id)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TeacherDashboard;
