import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CustomerTable.css";
import config from "../../../config/config";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ReportDialogCustomer from "./Dialog/ReportDialogCustomer";

function CustomerTable(props) {
  const [customer, setCustomer] = useState([]);
  const[reportData,setReportData ]=useState();
  useEffect(() => {
    getCustomer();
    console.log(props.filteredData);
  }, [props.filteredData]);
  const getCustomer = async () => {
    console.log(props.filteredData);
    if (props.filteredData) {
      // if(props.filteredData.length<1){
      //   alert("No data found");
      // }

    //  setCustomer((data) => [props.filteredData]);
    setCustomer(props.filteredData);
   

    }
  else if(props.filteredData===undefined){
    alert("Customer","No data found");
  }

  
 else{
   await axios({ 
      method: "GET",
      url: `${config.apiURL}/users/getUsers`,
      })
      .then((res) => {
        console.log(res.data);
        if(res.data.data){
        setCustomer(res.data.data);
      }
      }
      )
      .catch((err) => {
        console.log(err);
      }
      );
    }
  };
  const getReportCustomerData = async(data) => {
    
    await axios({
      method: "GET",
      url: `${config.apiURL}/reports/getCustomerReport?userId=${data}`,
    }).then((res) => {
      console.log(res.data);
      if(res.data.data){
        setReportData(res.data.data);
        setOpenReportDialog(true);
      }
    }).catch((err) => {
      console.log(err);
    })
    
  }
  const [customerData, setCustomerData] = useState(
  //   [
  //   {
  //     id: 1,
  //     joiningDate: "23/4/2021",
  //     name: "Areej Azeem",
  //     email: "areejazeem67@gmail.com",
  //     phone: 987654321,
  //   },
  //   {
  //     id: 1,
  //     joiningDate: "23/4/2021",
  //     name: "Areej Azeem",
  //     email: "areejazeem67@gmail.com",
  //     phone: 987654321,
  //   },
  //   {
  //     id: 1,
  //     joiningDate: "23/4/2021",
  //     name: "Areej Azeem",
  //     email: "areejazeem67@gmail.com",
  //     phone: 987654321,
  //   },
  //   {
  //     id: 1,
  //     joiningDate: "23/4/2021",
  //     name: "Areej Azeem",
  //     email: "areejazeem67@gmail.com",
  //     phone: 987654321,
  //   },
  //   {
  //     id: 1,
  //     joiningDate: "23/4/2021",
  //     name: "Areej Azeem",
  //     email: "areejazeem67@gmail.com",
  //     phone: 987654321,
  //   },
  //   {
  //     id: 1,
  //     joiningDate: "23/4/2021",
  //     name: "Areej Azeem",
  //     email: "areejazeem67@gmail.com",
  //     phone: 987654321,
  //   },
  //   {
  //     id: 1,
  //     joiningDate: "23/4/2021",
  //     name: "Areej Azeem",
  //     email: "areejazeem67@gmail.com",
  //     phone: 987654321,
  //   },
  //   {
  //     id: 1,
  //     joiningDate: "23/4/2021",
  //     name: "Areej Azeem",
  //     email: "areejazeem67@gmail.com",
  //     phone: 987654321,
  //   },
  //   {
  //     id: 1,
  //     joiningDate: "23/4/2021",
  //     name: "Areej Azeem",
  //     email: "areejazeem67@gmail.com",
  //     phone: 987654321,
  //   },
  //   {
  //     id: 1,
  //     joiningDate: "23/4/2021",
  //     name: "Areej Azeem",
  //     email: "areejazeem67@gmail.com",
  //     phone: 987654321,
  //   },
  //   {
  //     id: 1,
  //     joiningDate: "23/4/2021",
  //     name: "Areej Azeem",
  //     email: "areejazeem67@gmail.com",
  //     phone: 987654321,
  //   },
  //   {
  //     id: 1,
  //     joiningDate: "23/4/2021",
  //     name: "Areej Azeem",
  //     email: "areejazeem67@gmail.com",
  //     phone: 987654321,
  //   },
  // ]
  );
  
  const[openReportDialog, setOpenReportDialog]  = useState(false);
  return (
    <div  className="table_container"
  >
      <table
        className="table_customer"
        style={{
          width: "100%",
          alignItems: "center",
          border: "1px solid #ddd",
          borderRadius: "10px ",
          height:"fit-content !important",
        }}
      >
        <thead
          style={{
            width: "100%",
            backgroundColor: "#f5f2f0",
            height: "2.5rem",
            textAlign: "center",
            padding: "1rem",
            fontWeight:"normal",
            position: "sticky",
          }}
        >
          <tr >
          <th style={{
             
            }}>Sr.</th>
            <th style={{
           
            }}>Name</th>
            <th style={{
            
            }}>Image</th>
            <th style={{
          
            }}>Email</th>
            <th style={{
            
            }}>Date</th>
            <th style={{
            
            }}>Phone</th>
            <th style={{
             
            }}>City</th>
            <th style={{
            
            }}>Generate Report</th>
          </tr>
        </thead>
        <tbody
          style={{
            width: "100%",
            textAlign: "center",
            backgroundColor: "white",
            border: "1px solid #ddd",
            overflowY: "scroll",
            height:"fit-content !important",
           
          }}
        >
          {customer.length>0  ? customer.map((customer, index) => (
            <tr key={customer.id}>
              <td>{index + 1}</td>
              <td>{customer.username}</td>
              <td><img  style={{
                width:"35px",
                height:"35px",
                borderRadius:"20px"
             
              }} src={customer.userImage!=="" ? config.apiURL+customer.userImage :"https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="}></img></td>
              <td>{customer.email}</td>
              <td>{customer.date ? customer.date.split('T')[0] :"Not defined"}</td>
              <td>{customer.phone ? customer.phone :"+92000000000"}</td>
              <td>{customer.city ? customer.city :"Not defined"}</td>
              <td>
              <TextSnippetIcon style={{
                    color:"skyblue",
                    cursor: "pointer",

                  }}
                  onClick={
                    () => {
                      console.log("clicked")
                      getReportCustomerData(customer.id)
                   

                    
                    }
                  }/></td>
            </tr>
          )) : props.searchClicked && customer.length===0 ? <tr><td colSpan="8">No data found</td></tr> : <tr><td colSpan="8">No data found</td></tr>}

        </tbody>
       
      </table>
      {openReportDialog ? <ReportDialogCustomer  setOpenReportDialog={setOpenReportDialog} reportData={reportData} /> : null}
    </div>
  );
}

export default CustomerTable;
