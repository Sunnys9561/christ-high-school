import React, { useState } from "react";

export default function AddFee() {
  const [fee, setFee] = useState({
    student_id: "",
    amount: "",
    date: "",
    receipt_no: "",
  });

  const handleChange = (e) =>
    setFee({ ...fee, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/fees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fee),
    });
    alert("Fee Receipt Generated");
    setFee({ student_id: "", amount: "", date: "", receipt_no: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Fee Receipt</h2>
      <input
        name="student_id"
        value={fee.student_id}
        onChange={handleChange}
        placeholder="Student ID"
        required
      />
      <input
        name="amount"
        value={fee.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <input
        name="date"
        type="date"
        value={fee.date}
        onChange={handleChange}
        required
      />
      <input
        name="receipt_no"
        value={fee.receipt_no}
        onChange={handleChange}
        placeholder="Receipt No"
        required
      />
      <button type="submit">Generate Receipt</button>
    </form>
  );
}