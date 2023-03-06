import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./Pages/Admin";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Student from "./Pages/Student";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing></Landing>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/admin" element={<Admin></Admin>}></Route>
      <Route path="/student" element={<Student></Student>}></Route>
    </Routes>
  );
}

export default App;
