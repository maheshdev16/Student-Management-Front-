import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";

function App() {
  return (
    <Router>
      <div className="container">
        <h2>🎓 Student Management System</h2>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add Student</Link>
        </nav>

        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
