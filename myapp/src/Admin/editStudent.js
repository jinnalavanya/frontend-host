import React, { useEffect, useState } from "react";
import innerStyles from "./innerpages.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
const EditStudent = () => {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://nodejs-0dp0.onrender.com/student/${id}`)
      .then((res) => {
        //console.log(res.data);
        setName(res.data.name);
        setEmail(res.data.Email);
        setPhone(res.data.phone);
        setAddress(res.data.address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`https://nodejs-0dp0.onrender.com/student/${id}`, {
        name,
        Email,
        phone,
        address,
      })
      .then((res) => {
        alert("Data Updated succ...");
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
      })
      .catch((err) => {
        alert("Unable to update data");
      });
  };
  return (
    <>
      <section className={innerStyles.breadc}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Edit Student</h4>
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
                    value={Email}
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
                    value="Update Student"
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

export default EditStudent;
