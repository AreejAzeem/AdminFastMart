import { React, useState , useEffect} from "react";
import { BiSearch } from 'react-icons/bi';
import "./customer.css";
import Search from "../../components/search/Search";
import { Drawer } from "@mui/material";
import ProductDrawer from "../../components/Table/components/productDrawer/ProductDrawer";
import CustomerTable from "../../components/Table/components/CustomerTable.jsx";
import axios from "axios";
import config from "../../config/config";



function Customer() {
  const[searchInput, setSearchInput]=useState("");
  const[customer, setCustomer]=useState('');
  const [searchClicked, setSearchClicked]=useState(false);
  useEffect(() => {
    getFilteredData();
  }, []);
  const getFilteredData = async () => {
    setSearchClicked(true);
    await axios({
      method: "get",
      url: `${config.apiURL}/users/getUsers`,
      headers: {
        "Content-Type": "application/json",
        },
        })
        .then((res) => {
          console.log(res.data.data);
          if(res.data.data){
            res.data.data.map((data)=>{
              if(data.username===searchInput){
                console.log(searchInput)
                console.log(data.username);
                setCustomer(data);
              }
            })
           
        }
      }
        )
        .catch((err) => {
          console.log(err);
        }
        );

  }
  
  return (
    <>
      <div className="customer">
      <div className="customerWrapper">
        <h2 className="customer_title">Customer</h2>
        <div className="customer_searchContainer">
          <div className="customer_searchField">
            <Search placeholder="Search Customer by name " style={{
              width: "100%",
              borderRaduis: "10px !important",
            }}
            setSearchInput={setSearchInput}/>
                        <BiSearch size={38} color={"rgb(231, 128, 55)"} style={{marginTop:'7px', marginLeft:'3px', cursor:'pointer'}} 
                        onClick={getFilteredData} /></div>

          </div>
       
      
        <div className="customer_table">
          <CustomerTable filteredData={customer} searchClicked={searchClicked}/>
        </div>
      </div>
      </div>
    </>
  );
}

export default Customer;
