import React, { useState } from "react";
import "./sidebar.css";
import { IoMdArrowDropdown} from 'react-icons/io';
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

function Sidebar() {
const[subMenu, showSubMenu]=useState(false);
{/* function handleClick(e){
   showSubMenu=()=>{
    subMenu(!subMenu);
   }
  }*/}
  return (
   <>
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
          <Link to="/home" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem" onClick={() => showSubMenu(subMenu => !subMenu)}>  
              <TrendingUp className="sidebarIcon" />
               Sales & Orders
               <IoMdArrowDropdown/>
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
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Demand
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem ">
              <WorkOutline className="sidebarIcon" />
              Marketing
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <DocumentScanner className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
     
    </> 
    
  );
}

export default Sidebar;
