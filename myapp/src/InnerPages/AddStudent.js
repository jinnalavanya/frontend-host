import React, { useState } from "react";
import innerStyles from "./innerpages.module.css";
import axios from "axios";
const AddStudent = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`https://nodejs-0dp0.onrender.com/student`, {
        id,
        name,
        email,
        phone,
        address,
      })
      .then((res) => {
        alert("Data added succ...");
        setId("");
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
      })
      .catch((err) => {
        alert("Unable to add data");
      });
  };
  return (
    <>
      <section className="">
        <div className="container">
          <div className="row">
            <h3>Add Student</h3>
            <div className="col-md-6">
              <form className={innerStyles.form} onSubmit={submitHandler}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="id"
                    placeholder="enter ID"
                    className="form-control"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
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

export default AddStudent;
