import React, { useState } from "react";
import innerStyles from "./innerpages.module.css";
import axios from "axios";
const AddEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`https://nodejs-0dp0.onrender.com/employee`, {
        name,
        email,
        designation,
        phone,
        address,
      })
      .then((res) => {
        alert("Data added succ...");
        setName("");
        setEmail("");
        setDesignation("");
        setPhone("");
        setAddress("");
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
              <h4>Add Student</h4>
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

export default AddEmployee;
