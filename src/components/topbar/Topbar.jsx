import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { CBadge } from "@coreui/react";
import { Link, Navigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Topbar() {
  const logout = () => {
    console.log("apple");
    localStorage.clear();
    //Navigate('/adminlogin');
  };
  return (
    <div className="topbar" style={{ position: "static" }}>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">FastMart</span>
          <div className="user_topbar">
            <img
              style={{ display: "block" }}
              src="https://stat1.bollywoodhungama.in/wp-content/uploads/2019/04/The-Girl-On-The-Train-24-306x393.jpg"
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
            <h3 style={{ font_size: "3rem", margin: "5px" }}>
              Dashboard Overview
            </h3>
          </div>
          <div className="right_topRight">
            <div className="logout_btncont">
              <Link to="/adminlogin" onClick={logout}>
                <button className="logout_btn" onClick={logout}>
                  Logout
                </button>
              </Link>
            </div>
            <div className="topbarIconContainer">
              <NotificationsNone />
              <CBadge className="topIconBadge">99+</CBadge>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <div className="topbarIconContainer">
              <MoreVertIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
