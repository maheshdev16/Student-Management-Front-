import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [form, setForm] = useState({ name: "", age: "", course: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://student-management-f705.onrender.com/students", form);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Student</h3>
      <input name="name" placeholder="Name" onChange={handleChange} required /> <br />
      <input name="age" placeholder="Age" onChange={handleChange} required /> <br />
      <input name="course" placeholder="Course" onChange={handleChange} required /> <br />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddStudent;
