import React, { useEffect, useState } from "react";
// import innerStyles from "../InnerPages/innerpages.module.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const DeleteStudent = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://nodejs-0dp0.onrender.com/student`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteStu = (sid) => {
    axios
      .delete(`https://nodejs-0dp0.onrender.com/student/${sid}`)
      .then((res) => {
        alert("deleted succ...");
        navigate("/deletestudent");
      })
      .catch((err) => {
        alert("unable to delete..");
      });
  };
  return (
    <>
      {/* <section className={innerStyles.breadc}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Add Student</h4>
            </div>
          </div>
        </div>
      </section> */}

      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => {
                      return (
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.Email}</td>
                          <td>{item.phone}</td>
                          <td>{item.address}</td>
                          <td>
                            <button
                              className="btn btn-danger me-3"
                              onClick={() => deleteStu(item._id)}
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                            <NavLink to={`/editstudent/${item._id}`}>
                              <button className="btn btn-success">
                                <i className="fa-solid fa-pencil"></i>
                              </button>
                            </NavLink>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeleteStudent;
