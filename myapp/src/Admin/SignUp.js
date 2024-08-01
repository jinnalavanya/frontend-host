import React, { useState } from "react";
import innerStyles from "./innerpages.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
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
              <h4>SinUp Page</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-4">&nbsp;</div>
            <div className="col-4">
              <form className={innerStyles.form} onSubmit={submitHandler}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="enter name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
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
                    type="text"
                    name="cpassword"
                    placeholder="Confirm password"
                    className="form-control "
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="phone"
                    placeholder="enter phone"
                    className="form-control "
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="address"
                    placeholder="enter address"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Add Student"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
