import React, { useState } from "react";
import innerStyles from "./innerpages.module.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`https://nodejs-0dp0.onrender.com/login`, {
        email,
        password,
      })
      .then((res) => {
        if (res.data === "Valid") {
          navigate("/admindashboard");
        } else {
          alert("Invalid credentials..");
        }
      })
      .catch((err) => {
        alert("Unable to login");
      });
  };
  return (
    <>
      <section className={innerStyles.breadc}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Login Page</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-4">&nbsp;</div>
            <div className="col-4">
              <div className={innerStyles.form}>
                <form onSubmit={submitHandler}>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="email"
                      placeholder="enter email"
                      className="form-control "
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="password"
                      placeholder="enter password"
                      className="form-control "
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="submit"
                      className="btn btn-success"
                      value="Login"
                    />
                  </div>
                </form>
                <NavLink to="/signUp">Click here for new user</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
