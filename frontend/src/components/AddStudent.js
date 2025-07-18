import React, { useState } from "react";

export default function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    std: "",
    roll_no: "",
  });

  const handleChange = (e) =>
    setStudent({ ...student, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    alert("Student Added");
    setStudent({ name: "", std: "", roll_no: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <input
        name="name"
        value={student.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="std"
        value={student.std}
        onChange={handleChange}
        placeholder="Std"
        required
      />
      <input
        name="roll_no"
        value={student.roll_no}
        onChange={handleChange}
        placeholder="Roll No"
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
}