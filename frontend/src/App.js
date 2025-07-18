import React from "react";
import AddStudent from "./components/AddStudent";
import AddTeacher from "./components/AddTeacher";
import AddFee from "./components/AddFee";
import AddCertificate from "./components/AddCertificate";
import AddMarksheet from "./components/AddMarksheet";

function App() {
  return (
    <div>
      <h1>Christ High School Management</h1>
      <AddStudent />
      <AddTeacher />
      <AddFee />
      <AddCertificate />
      <AddMarksheet />
    </div>
  );
}

export default App;