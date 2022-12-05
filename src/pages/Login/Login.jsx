import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import config from "../../config/config";
import "./Login.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [password, setPassword] = useState("");
  const [notValidUser, setNotValidUser] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    //   console.log("in use effect");
    //   localStorage.setItem("admin",
    //   {"email": "areejhbbg87@gmail.com",
    //   "adminId":"62deb8a46d199f0f32c34d36"
    // })
   
    // if (auth) {
    //   navigate("/home");
    //   // {<Navigate to="/home" replace={true}/>}
    //   console.log("naviagte to home");
    // }
  },[]);
  //email validation
  function ValidateEmail(inputText) {
    console.log(inputText);
    var atpos = inputText.indexOf("@");
    var dotpos = inputText.lastIndexOf(".");
    // if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= inputText.length) {
    //   console.log("in validate email");
    //   setEmailError("Not a valid e-mail address");
    //   return false;
    // }
    // if(inputText.type==="email"){
    //   setEmailError("");
    //   return false;
    // }
    // else {
    //   console.log("in validate email");
    //     setEmailError("Not a valid e-mail address");
    //     return true;
    // }
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(inputText)) {
      console.log("valid email");
      setEmailError("");
      return false;
    } else {
      console.log("invalidate email");
      setEmailError("Not a valid e-mail address");
      return true;
    }
  }
  const handleSubmit = async () => {
    console.log("in handle submit");
    var error = ValidateEmail(email);
    if (!error) {
      console.log("in line 48 " + emailError);
      if (password.length > 5) {
        console.log("in line 50 ");
        //setPassError("");
        console.log("in line 52 ");
        if(email==="areesh@gmail.com" && password==="123456"){
          localStorage.setItem("admin",email);
          navigate("/home");
       
        
        }
        else{
       
 if(email!=="areesh@gmail.com" && password!=="123456"){
  
  alert("Please enter the valid email and password");
   if(email==="" && password===""){
    setEmailError("Please enter the email") ;
    setPassError("Please enter the password");         }
        }
        // let result = await fetch(config.adminURL + "/users/login", {
        //   mode: "no-cors",
        //   method: "post",
        //   body: JSON.stringify({ email, password }),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // }).then((res) => {console.log("After fetch"); return res});
        // console.log("line 29");
        // console.log(result);
        // console.log("aaaaaaaaaaa");
        // console.log(result);
        // if (result.email) {
        //   localStorage.setItem("admin", JSON.stringify(result));
        //   console.log("in login ");
        //   console.log(localStorage.getItem("admin"));
        //   navigate("/home");
        // } else {
        //   console.log("in else 72");
        //   setNotValidUser("User Not Found");
        // }
// const res=await axios.post("http://localhost:4000/users/login", { email, password })
// console.log(res+' fadsf');


        // await axios({
        //   mode: "no-cors",
        //   method: "post",
        //   url: config.apiURL + "/users/login",
        //   data: {
        //     email: email,
        //     password: password,
        //   },
        // }).then((res) => {
        //     console.log(res +" adsf");
        //     if (res.data.data.email) {
        //       localStorage.setItem("admin", res.data.data[0]);
        //       console.log("in login ");
        //       console.log(localStorage.getItem("admin"));
        //       // navigate("/home");
        //     } else {
        //       console.log("in else 72");
        //       setNotValidUser("User Not Found");
        //     }
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      } }else {
        console.log("in line 75 " + passError);
        setPassError("password must be 6 characters");
      }
    } else {
      console.log("in line 80 " + emailError);
      alert("Not a valid email")
      setEmailError("Not a valid e-mail address");
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
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      fontWeight: "bold",
                      fontFamily: "Open Sans,sans-serif",
                      marginLeft: "10px",
                    }}
                  >
                    {emailError}
                  </div>
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
                {passError != "" ? 
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      fontWeight: "bold",
                      fontFamily: "Open Sans,sans-serif",
                      marginLeft: "10px",
                    }}
                  >
                    {passError}
                  </div>
                : null}
              </div>
              <div className="login_buttonContainer">
                {notValidUser ? <span>{notValidUser}</span> : null}
                <button
                  className="login_Button"
                  type="submit "
                  onClick={handleSubmit}
                >
                  Login
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
