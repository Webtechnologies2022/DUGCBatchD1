import React, { useState } from "react";
import clite from "./IMG_20190430_113027.jpg";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Coordinator from "./Coordinator.js";
//import kle from './kle_logo.png';
//import kle_cen from './KLES-Centenary-LOGO-PNG.png';
//import {browserHistory} from 'react-router';
import { useNavigate } from "react-router-dom";
import { withRouter } from "react-router-dom";
const Login = () => {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const navigate = useNavigate();

  const submit = () => {
    if (
      (username === "aaa") &
      (password === "aaa") &
      (designation === "Chairman")
    ) {
      //this.props.history.push("/Coordinator");
      alert("Chairman logged in");
      navigate("/Chairman");
    }

    //<Link to={'/Coordinator'}>Coordinator</Link>
    else if (
      (username === "bbb") &
      (password === "bbb") &
      (designation === "DUGC_Coordinator")
    ) {
      alert("DUGC coordinator logged in");
      navigate("/Coordinator");
    } else if (
      (username === "ccc") &
      (password === "ccc") &
      (designation === "Course_Coordinator")
    ) {
      alert("Course Coordinator logged in");
      navigate("/Chairman");
    } else alert("Invalid Login");
  };
  return (
    <div class="main">
      {/* <div class='header'>

          <h1 class="text-center">Login - Departmental Under Graduate Committee</h1>
          <h3 class="text-center">School of Computer Science and Engineering</h3>
          <h5 class="text-center">(For Academic Year 2022-23)</h5>
    </div> */}
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/images%2Fkle_logo.png038131b7-0aac-4895-b523-d38392596b57?alt=media&token=bcb36040-f746-4595-8f41-8c65658e202d"
              alt="Scholarship"
              class="img-fluid mx-auto d-block float-xl-left float-lg-left float-md-left logoleft"
            />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <b>
              <h4 class="text-center1">
                Login - Departmental Under Graduate Committee
              </h4>
            </b>
            <h6 class="text-center2">
              School of Computer Science and Engineering
            </h6>
            <b>
              <h7 class="text-center3">(For Academic Year 2022-23)</h7>
            </b>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/images%2FKLES-Centenary-LOGO-PNG.png?alt=media&token=be5fa087-e568-461b-bb54-3876318d62ef"
              alt=""
              class="img-fluid mx-auto d-block float-xl-right float-lg-right float-md-right logoright"
            />
          </div>
        </div>
      </div>

      <div class="grid-container1">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/images%2FIMG_20190430_113027.jpg8ee62c1d-1746-4064-9301-12d5d106ff92?alt=media&token=12ee2366-a2ef-4623-9947-ef73f12ffc25"
          alt=""
          width={900}
          height={650}
        />

        <div class="grid-child2">
          <div class="heading">
            <b>Login to DUGC Portal</b>
          </div>
          <br></br>
          <div class="form">
            <form action="" onSubmit={submit}>
              <input
                type="text"
                class="box"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Username"
                required
              />
              <br></br>
              <br></br>
              <input
                type="password"
                class="box"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
              />
              <br></br>
              <br></br>

              <select
                name="designation"
                class="box"
                id="designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              >
                <option value="">Designation</option>
                <option value="Chairman">Chairman</option>
                <option value="DUGC_Coordinator">DUGC Coordinator</option>
                <option value="Course_Coordinator">Course Coordinator</option>
              </select>
              <br></br>
              <br></br>
              <input type="checkbox" />
              <b> Remember username</b>
              <br></br>
              <br></br>
              <button className="buttonW">
                <b>Login</b>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
