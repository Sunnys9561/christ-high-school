import React, { useState } from "react";

export default function AddCertificate() {
  const [cert, setCert] = useState({
    student_id: "",
    type: "Leaving Certificate",
    issue_date: "",
    details: "",
  });

  const handleChange = (e) =>
    setCert({ ...cert, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/certificates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cert),
    });
    alert("Certificate Generated");
    setCert({ student_id: "", type: "Leaving Certificate", issue_date: "", details: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Generate Leaving Certificate</h2>
      <input
        name="student_id"
        value={cert.student_id}
        onChange={handleChange}
        placeholder="Student ID"
        required
      />
      <input
        name="issue_date"
        type="date"
        value={cert.issue_date}
        onChange={handleChange}
        required
      />
      <textarea
        name="details"
        value={cert.details}
        onChange={handleChange}
        placeholder="Certificate Details"
        required
      />
      <button type="submit">Generate Certificate</button>
    </form>
  );
}