import React from "react";
import Homepage from "./Components/HomePage/HomePage";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import StudentSignUp from "./Components/StudentSignUp/StudentSignUp";
import Dashboard from "./Components/Dashboard/Dashboard";
import Logout from "./Components/Dashboard/DashboardComponents/Logout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentDashboard from "./Components/Dashboard/DashboardComponents/StudentDashboard";
import TeacherDashboard from "./Components/Dashboard/DashboardComponents/TeacherDashborad";
import AdminDashboard from "./Components/Dashboard/DashboardComponents/AdminDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<StudentSignUp />} />
        <Route path="/chooseuser" element={<User />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/teacherdashboard" element={<TeacherDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
