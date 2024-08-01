import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./InnerPages/Home";
import AddStudent from "./InnerPages/AddStudent";
import DeleteStudent from "./Admin/DeleteStudent";
import EditStudent from "./InnerPages/editStudent";
import SignUp from "./Admin/SignUp";
import Login from "./Admin/Login";
import AdminDashboard from "./Admin/AdminDashboard";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/editstudent/:id" element={<EditStudent />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route path="" element={<AddStudent />} />
          <Route path="addstudent" element={<AddStudent />} />
          <Route path="deletestudent" element={<DeleteStudent />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routing;
