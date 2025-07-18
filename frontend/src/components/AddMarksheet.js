import React, { useState } from "react";

export default function AddMarksheet() {
  const [marksheet, setMarksheet] = useState({
    student_id: "",
    std: "",
    year: "",
    marks_json: "",
  });

  const handleChange = (e) =>
    setMarksheet({ ...marksheet, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/marksheets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(marksheet),
    });
    alert("Marksheet Generated");
    setMarksheet({ student_id: "", std: "", year: "", marks_json: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Generate Marksheet</h2>
      <input
        name="student_id"
        value={marksheet.student_id}
        onChange={handleChange}
        placeholder="Student ID"
        required
      />
      <input
        name="std"
        value={marksheet.std}
        onChange={handleChange}
        placeholder="Std"
        required
      />
      <input
        name="year"
        value={marksheet.year}
        onChange={handleChange}
        placeholder="Year"
        required
      />
      <input
        name="marks_json"
        value={marksheet.marks_json}
        onChange={handleChange}
        placeholder='Marks JSON (e.g. {"Math":90,"Science":85})'
        required
      />
      <button type="submit">Generate Marksheet</button>
    </form>
  );
}