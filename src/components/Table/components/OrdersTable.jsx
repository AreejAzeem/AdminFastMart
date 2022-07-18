import React,{useState} from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { IconContext } from "react-icons";
import "./OrdersTable.css";

function OrdersTable() {
  const [orderData,setOrderData]= useState([
  { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
  { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
  { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
  { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
  { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
  { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
  { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
  { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
  { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
  { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
  { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
 ]);
  return (
    <div className="table_container">
      <table
        className="table_order"
        style={{
          width: "100%",
          alignItems: "center",
          
          border: "1px solid #ddd",
          borderRadius:"10px"
        }}
      >
        <thead
          style={{
            width: "100%",
            backgroundColor: "#f5f2f0",
            height: "2.5em",
          }}
        >
          <tr>
            <th>ID</th>
            <th>Time</th>
            <th>Product Quantity</th>
            <th>Payment Method</th>
            <th>Bill Amount</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody
          style={{
            width: "100%",
            textAlign: "center",
            backgroundColor: "white",
            border: "1px solid #ddd"
          }}
        >
          {orderData.map((order) => (
            <tr>
              <td>{order.id}</td>
              <td>{order.time}</td>
              <td>{order.productQty}</td>
              <td>{order.method}</td>
              <td>$ {order.amount}</td>
              <td>
                <div>
                <IconContext.Provider value={{ color: "blue" }}>   
                      <VisibilityOutlinedIcon />  
                  </IconContext.Provider>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
