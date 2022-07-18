import React, { useState, useEffect } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconContext } from "react-icons";
import "./CustomerTable.css";
import config from "../../../config/config";
function CustomerTable() {
  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    getCustomer();
  }, []);
  const getCustomer = async () => {
    // let result = await fetch("http://192.168.30.176:4000/categories/category");
    let result = await fetch(config.apiURL+"/users/all-users");
    result = await result.json();
    console.log(result);
    setCustomer(result["data"]);
  };
  const [customerData, setCustomerData] = useState([
    {
      id: 1,
      joiningDate: "23/4/2021",
      name: "Areej Azeem",
      email: "areejazeem67@gmail.com",
      phone: 987654321,
    },
    {
      id: 1,
      joiningDate: "23/4/2021",
      name: "Areej Azeem",
      email: "areejazeem67@gmail.com",
      phone: 987654321,
    },
    {
      id: 1,
      joiningDate: "23/4/2021",
      name: "Areej Azeem",
      email: "areejazeem67@gmail.com",
      phone: 987654321,
    },
    {
      id: 1,
      joiningDate: "23/4/2021",
      name: "Areej Azeem",
      email: "areejazeem67@gmail.com",
      phone: 987654321,
    },
    {
      id: 1,
      joiningDate: "23/4/2021",
      name: "Areej Azeem",
      email: "areejazeem67@gmail.com",
      phone: 987654321,
    },
    {
      id: 1,
      joiningDate: "23/4/2021",
      name: "Areej Azeem",
      email: "areejazeem67@gmail.com",
      phone: 987654321,
    },
    {
      id: 1,
      joiningDate: "23/4/2021",
      name: "Areej Azeem",
      email: "areejazeem67@gmail.com",
      phone: 987654321,
    },
    {
      id: 1,
      joiningDate: "23/4/2021",
      name: "Areej Azeem",
      email: "areejazeem67@gmail.com",
      phone: 987654321,
    },
    {
      id: 1,
      joiningDate: "23/4/2021",
      name: "Areej Azeem",
      email: "areejazeem67@gmail.com",
      phone: 987654321,
    },
    {
      id: 1,
      joiningDate: "23/4/2021",
      name: "Areej Azeem",
      email: "areejazeem67@gmail.com",
      phone: 987654321,
    },
    {
      id: 1,
      joiningDate: "23/4/2021",
      name: "Areej Azeem",
      email: "areejazeem67@gmail.com",
      phone: 987654321,
    },
    {
      id: 1,
      joiningDate: "23/4/2021",
      name: "Areej Azeem",
      email: "areejazeem67@gmail.com",
      phone: 987654321,
    },
  ]);
  return (
    <div className="table_container">
      <table
        className="table_customer"
        style={{
          width: "100%",
          alignItems: "center",
          border: "1px solid #ddd",
          borderRadius: "10px ",
        }}
      >
        <thead
          style={{
            width: "100%",
            backgroundColor: "#f5f2f0",
            height: "2.5em",
            textAlign: "center",
          }}
        >
          <tr>
            <th>ID</th>
            <th>Joining Date</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody
          style={{
            width: "100%",
            textAlign: "center",
            backgroundColor: "white",
            border: "1px solid #ddd",
          }}
        >
          {customer.map((customer, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{customer.date}</td>
              <td>{customer.username}</td>
              <td>{customer.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;
