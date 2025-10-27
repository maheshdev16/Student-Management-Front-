import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
  const [form, setForm] = useState({ name: "", age: "", course: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/students").then((res) => {
      const student = res.data.find((s) => s.id == id);
      if (student) setForm(student);
    });
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/students/${id}`, form);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Student</h3>
      <input name="name" value={form.name} onChange={handleChange} required /> <br />
      <input name="age" value={form.age} onChange={handleChange} required /> <br />
      <input name="course" value={form.course} onChange={handleChange} required /> <br />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditStudent;
