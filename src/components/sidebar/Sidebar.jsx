import React, { useState } from "react";
import "./sidebar.css";
import { IoMdArrowDropdown, IoMdArrowUp} from 'react-icons/io';
import {IoMdArrowDropup} from 'react-icons/io';
import { Link } from "react-router-dom";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  DocumentScanner,
} from "@mui/icons-material";
import SubMenu from "./SubMenu";
import SubMenuDemand from "./SubMenuDemand";

function Sidebar() {
const[subMenu, showSubMenu]=useState(false);
const[subMenuDemand, showSubMenuDemand]=useState(false);
const [arrowToggle, setArrowToggle]=useState(true);
const [arrowToggleDemand, setArrowToggleDemand]=useState(true);
const [active, setActive]=useState('');
{/* function handleClick(e){
   showSubMenu=()=>{
    subMenu(!subMenu);
   }
  }*/}
  const handleClick=event=>{
   if(event.currentTarget.className.contains(active)){
    setActive('');
   }
 else{
  setActive('active');
 }
  }
  const logout=()=>{
    console.log("apple");
    localStorage.clear();
  }
  return (
   <>
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
          <Link to="/" className="link">
            <li className="sidebarListItem" >
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem" onClick={() => {
              setArrowToggle(arrowToggle=>!arrowToggle);
              showSubMenu(subMenu => !subMenu)}}>  
              <TrendingUp className="sidebarIcon" />
               Sales & Orders
               {arrowToggle?<IoMdArrowDropdown/>:<IoMdArrowDropup/>}
            {/*   <div className="sidebarListSubItem">
               <ul>
                 <li>Sales</li>
                 <li>Orders</li>
               </ul>
               </div>*/}
            </li>
            {subMenu ? <SubMenu firstMenu="Sales" secondMenu="Orders"/>:null}
            <Link to="/customers" className="link">
            <li className="sidebarListItem ">
              <PermIdentity className="sidebarIcon" />
              Customers
            </li>
            </Link>
            <Link
              to="/products" className="link"
            >
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link
              to="/category" className="link"
            >
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Category
            </li>
            </Link>
            <Link
              to="/demand" className="link" >
            <li className="sidebarListItem" onClick={() => {
               setArrowToggleDemand(arrowToggleDemand=>!arrowToggleDemand);
              showSubMenuDemand(subMenuDemand => !subMenuDemand)}}>
              <DynamicFeed className="sidebarIcon" />
              Demand
              {arrowToggleDemand?<IoMdArrowDropdown/>:<IoMdArrowDropup/>}
            
            </li>
            </Link>
            {subMenuDemand ? <SubMenuDemand firstMenu="Pending" secondMenu="Accepted" thirdMenu="Rejected"/>:null}
              
           <Link to="/feedback" className="link">
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Feedback
            </li>
            </Link>
            <Link to="/marketing" className="link">
            <li   className="sidebarListItem " onClick={()=>{
              
            }}>
              <WorkOutline className="sidebarIcon" />
              Marketing
            </li>
            </Link>
            {/* <Link to="/reports" className="link">
            <li className="sidebarListItem">
              <DocumentScanner className="sidebarIcon" />
              Reports
            </li>
            </Link> */}
          </ul>
        </div>
        <div className="sidebar_logout">
        <Link to="/adminlogin" onClick={logout}>
                <button className="sidebar_logout_btn" 
                // onClick={logout}
                >
                  Logout
                </button>
              </Link>
        </div>
      </div>
    </div>
     
    </> 
    
  );
}

export default Sidebar;
