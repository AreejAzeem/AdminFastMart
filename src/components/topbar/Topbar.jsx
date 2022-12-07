import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { CBadge } from "@coreui/react";
import { Link, Navigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import BiLogOutCircle from "@mui/icons-material/Logout";
import config from "../../config/config";

function Topbar() {
  let navigate = useNavigate();
  const logout = () => {
    console.log("apple");
    localStorage.clear();
    navigate("/")
 
    
  };
  
  return (
    <div className="topbar" style={{ position: "static" , 
    border: "0.9px solid var(--lightgray)",
    boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
   }}>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">FastMart</span>
          <div className="user_topbar">
            <img
              style={{ display: "block" }}
              src={config.apiURL + "/uploads/users/1670354979962-IMG_1000020276_625678.jpeg"}
            
              
              alt="topAvatar"
              className="topAvatar"
            />
            <span
              style={{ margin: "4px", fontSize: "1.2rem", marginLeft: "7px" }}
            >
              Areej Azeem
            </span>
          </div>
        </div>
        <div className="topRight">
          <div className="left_topRight">
            <h3 style={{ font_size: "3rem", margin: "5px" ,marginLeft:"16px"}}>
              Dashboard 
            </h3>
          </div>
          <div className="right_topRight">
            <div className="logout_btncont">
             <h5 style={{
              fontSize:"14px",
              color:"var(--orangestandard)",
              marginRight:"10px",
              marginTop:"8px",
              fontWeight:"bold",
              opacity:"70%"
             }}>Logout</h5>
               <BiLogOutCircle onClick={logout} style={{ fontSize: "2rem", color: "var(--orangestandard)" }} /> 
             
            </div>
            {/* <div className="topbarIconContainer">
              <NotificationsNone />
              <CBadge className="topIconBadge">99+</CBadge>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div> */}
            {/* <div className="topbarIconContainer">
              <MoreVertIcon />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
