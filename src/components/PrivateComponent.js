import React from 'react'
import {Navigate, Outlet} from 'react-router-dom';
const PrivateComponent=()=>{
  
      const auth=localStorage.getItem("admin");
   return (auth?<Outlet/>:<Navigate to="/"/>)

}

export default PrivateComponent;