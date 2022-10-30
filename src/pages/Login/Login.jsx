import {useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import config from "../../config/config";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [password, setPassword] = useState("");
  const [notValidUser, setNotValidUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("in use effect");
    localStorage.setItem("admin",
    {"email": "areejhbbg87@gmail.com",
    "adminId":"62deb8a46d199f0f32c34d36"
  })

    // // if (auth) {
    // //   navigate("/home");
    // //   // {<Navigate to="/home" replace={true}/>}
    // //   console.log("naviagte to home");
    // // }
  });
  //email validation
  function ValidateEmail(inputText) {
    var atpos = inputText.indexOf("@");
    var dotpos = inputText.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= inputText.length) {
      console.log("in validate email");
      setEmailError("Not a valid e-mail address");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  }
  const handleSubmit = async () => {
    console.log("in handle submit");
    var error = ValidateEmail(email);
    if (error) {
      console.log("in line 48 " + emailError);
      if (password.length > 5) {
        console.log("in line 50 ");
        //setPassError("");
        console.log("in line 52 ");
        let result = await fetch(config.adminURL + "/users/adminlogin", {
          mode: "no-cors",
          method: "post",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {console.log("After fetch"); return res});
        console.log("line 29");

        
        console.log(result);
        console.log("aaaaaaaaaaa");
        console.log(result);
        if (result.email) {
          localStorage.setItem("admin", JSON.stringify(result));
          console.log("in login ");
          console.log(localStorage.getItem("admin"));
          navigate("/home");
        } else {
          console.log("in else 72");
          setNotValidUser("User Not Found");
        }
      } else {
        console.log("in line 75 " + passError);
        setPassError("password must be 6 characters");
      }
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
                {emailError != "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: "12px",
                      fontWeight: "bold",
                      fontFamily: "Open Sans,sans-serif",
                      marginLeft: "10px",
                    }}
                  >
                    {emailError}
                  </span>
                ) : null}
              </div>
              <div className="input_container2">
                <h5 className="login_label">Password</h5>
                <input
                  className="login_input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passError != "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: "12px",
                      fontWeight: "bold",
                      fontFamily: "Open Sans,sans-serif",
                      marginLeft: "10px",
                    }}
                  >
                    {passError}
                  </span>
                ) : null}
              </div>
              <div className="login_buttonContainer">
                {notValidUser !== "" ? <span>{notValidUser}</span> : null}
                <button
                  className="login_Button"
                  type="submit "
                  // onClick={handleSubmit}
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
