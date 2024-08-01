import React, { useState } from "react";
import innerStyles from "./innerpages.module.css";
import axios from "axios";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`https://nodejs-0dp0.onrender.com/signUp`, {
        name,
        email,
        password,
        cpassword,
        phone,
        address,
      })
      .then((res) => {
        alert("Signup succ...");
        navigate("/login");
      })
      .catch((err) => {
        alert("Unable to add data");
      });
  };
  return (
    <>
      <section className={innerStyles.breadc}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Admin Dashboard</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <AdminSidebar />
            </div>
            <div className="col-9">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
