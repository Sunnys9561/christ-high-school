import React, { useState } from "react";

export default function AddTeacher() {
  const [teacher, setTeacher] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) =>
    setTeacher({ ...teacher, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/teachers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(teacher),
    });
    alert("Teacher Added");
    setTeacher({ name: "", subject: "", email: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Teacher</h2>
      <input
        name="name"
        value={teacher.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="subject"
        value={teacher.subject}
        onChange={handleChange}
        placeholder="Subject"
        required
      />
      <input
        name="email"
        value={teacher.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="phone"
        value={teacher.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <button type="submit">Add Teacher</button>
    </form>
  );
}