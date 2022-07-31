import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { apiURL } from "../../config/config";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("admin");
    if (auth) {
      navigate("/home");
    }
  });
  const handleSubmit = async () => {
    console.log({ email, password });
    let result = await fetch(apiURL +"/adminlogin", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "Application/json",
      },
    });
    result = await result.json();
    console.log("aaaaaaaaaaa");
    console.log(result);
    if (result.email) {
      localStorage.setItem("admin", JSON.stringify(result));
      console.log(localStorage.getItem("admin"));
      navigate("/home");
    } else {
      alert("please enter correct details");
    }
  };
  return (
    /*<div className="login">
     <span className="logo">FastMart</span>
      <div className="login__container">
        <h1 style={{textAlign:"center"}}>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/home">
          <button className="login__signInButton" type="submit " >Sign In</button>
          </Link>
        </form>
        <button className="login__registerButton">
          Create your Account
        </button>
      </div>
  </div>*/
    <div className="login">
      <div className="login_container">
        <div className="login_leftcontainer">
          <div className="image_cont">
            <img
              className="image"
              src="https://image.shutterstock.com/image-photo/graphs-charts-elements-on-laptop-600w-1009926430.jpg"
              alt="topAvatar"
            />
          </div>
        </div>
        <div className="login_rightcontainer">
          <div className="heading">
         
            <h3
              style={{
                textAlign: "Left",
                marginBottom: "6%",
                fontWeight: "bold",
                fontFamily: "Open Sans,sans-serif",
              }}
            >
              Login
            </h3>
          </div>
          <div className="login_form">
            <form>
              <div className="input_container1">
                <h5 className="login_label">E-mail</h5>
                <input
                  className="login_input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input_container2">
                <h5 className="login_label">Password</h5>
                <input
                  className="login_input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="login_buttonContainer">
                <button
                  className="login_Button"
                  type="submit "
                  onClick={handleSubmit}
                >
                  Login In
                </button>
              </div>
            </form>
          </div>
          {/* <div className="forgot_password">
          <h6 ><a  href="#" style={{color:"#de751f",opacity:"1",textDecoration:"none"}} className="text_forgotPass">Forgot password?</a></h6>
        </div> */}
        </div>
      </div>
    </div>
  );
}
export default Login;
