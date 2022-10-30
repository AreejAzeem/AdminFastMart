import { React, useState , useEffect} from "react";
import { BiSearch } from 'react-icons/bi';
import "./customer.css";
import Search from "../../components/search/Search";
import { Drawer } from "@mui/material";
import ProductDrawer from "../../components/Table/components/productDrawer/ProductDrawer";
import CustomerTable from "../../components/Table/components/CustomerTable.jsx";

function Customer() {
 
  
  return (
    <>
      <div className="customer">
      <div className="customerWrapper">
        <h2 className="customer_title">Customer</h2>
        <div className="customer_searchContainer">
          <div className="customer_searchField">
            <Search placeholder="Search Customer by name / email / phone" />
          </div>
          <div className="search_icon"><BiSearch size={"25%"} color={"rgb(231, 128, 55)"} /></div>
        </div>
        <div className="customer_table">
          <CustomerTable />
        </div>
      </div>
      </div>
    </>
  );
}

export default Customer;
