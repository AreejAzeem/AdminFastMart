// // import React,{useState} from "react";
// // import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// // import { IconContext } from "react-icons";
// // import "./OrdersTable.css";

// // function OrdersTable() {
// //   const [orderData,setOrderData]= useState([
// //   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
// //   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
// //   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
// //   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
// //   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
// //   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
// //   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
// //   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
// //   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
// //   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
// //   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
// //  ]);
// //   return (
// //     <div className="table_container">
// //       <table
// //         className="table_order"
// //         style={{
// //           width: "100%",
// //           alignItems: "center",
          
// //           border: "1px solid #ddd",
// //           borderRadius:"10px"
// //         }}
// //       >
// //         <thead
// //           style={{
// //             width: "100%",
// //             backgroundColor: "#f5f2f0",
// //             height: "2.5em",
// //           }}
// //         >
// //           <tr>
// //             <th>ID</th>
// //             <th>Time</th>
// //             <th>Product Quantity</th>
// //             <th>Payment Method</th>
// //             <th>Bill Amount</th>
// //             <th>Details</th>
// //           </tr>
// //         </thead>
// //         <tbody
// //           style={{
// //             width: "100%",
// //             textAlign: "center",
// //             backgroundColor: "white",
// //             border: "1px solid #ddd"
// //           }}
// //         >
// //           {orderData.map((order) => (
// //             <tr>
// //               <td>{order.id}</td>
// //               <td>{order.time}</td>
// //               <td>{order.productQty}</td>
// //               <td>{order.method}</td>
// //               <td>$ {order.amount}</td>
// //               <td>
// //                 <div>
// //                 <IconContext.Provider value={{ color: "blue" }}>   
// //                       <VisibilityOutlinedIcon />  
// //                   </IconContext.Provider>
// //                 </div>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// // export default OrdersTable;



// import React,{useState, useEffect} from "react";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import { IconContext } from "react-icons";
// import "./OrdersTable.css";
// import ReactPaginate from "react-paginate";

// function OrdersTable() {
//   const [orderData,setOrderData]= useState([
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 3, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 4, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 9, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 5, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 6, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 7, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 3, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 4, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 9, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 5, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 6, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 7, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 3, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 4, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 9, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 5, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 6, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 7, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 3, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 4, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 9, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 5, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 6, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 7, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 3, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 4, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 9, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 5, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 6, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 7, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },
//   { id: 1, time: "23/4/2021", productQty: 21, method: "Credit Card", amount: 9870 },

//  ]);
 
//   // We start with an empty list of items.
//   const [currentItems, setCurrentItems] = useState([]);
//   const [pageCount, setPageCount] = useState(0);
//   // Here we use item offsets; we could also use page offsets
//   // following the API or data you're working with.
//   const [itemOffset, setItemOffset] = useState(0);
//   const itemsPerPage=6;

//   useEffect(() => {
//     // Fetch items from another resources.
//     const endOffset = itemOffset + itemsPerPage;
//      setCurrentItems(orderData.slice(itemOffset, endOffset));
//     setPageCount(Math.ceil(orderData.length / itemsPerPage));
//   }, [itemOffset, itemsPerPage, orderData]);

//   // Invoke when user c  lick to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % orderData.length;
//     setItemOffset(newOffset);
//   };

//   return (
//     <>
//      <table
//         className="table_order"
//         style={{
//           width: "100%",
//           alignItems: "center",
//           height:"20000rem !important",
//           border: "1px solid #ddd",
//           borderRadius:"10px"
//         }}
//       >
//         <thead
//           style={{
//             width: "100%",
//             backgroundColor: "#f5f2f0",
//             height: "2.5em",
//           }}
//         >
//           <tr>
//             <th>ID</th>
//             <th>Time</th>
//             <th>Product Quantity</th>
//             <th>Payment Method</th>
//             <th>Bill Amount</th>
//             <th>Details</th>
//           </tr>
//         </thead>
//         <tbody
//           style={{
//             width: "100%",
//             textAlign: "center",
//             backgroundColor: "white",
//             border: "1px solid #ddd"
//           }}
//         >
//           {currentItems.map((order) => (
//             <tr>
//               <td>{order.id}</td>
//               <td>{order.time}</td>
//               <td>{order.productQty}</td>
//               <td>{order.method}</td>
//               <td>$ {order.amount}</td>
//               <td>
//                 <div>
//                 <IconContext.Provider value={{ color: "blue" }}>   
//                       <VisibilityOutlinedIcon />  
//                   </IconContext.Provider>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="pagination_container">
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={2}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//         containerClassName="pagination"
//         pageLinkClassName='page-num'
//         previousLinkClassName	='page-num'
//         nextLinkClassName="page-num"
//         activeLinkClassName="active"
//       />
//       </div>
//     </>
//   );
// }
// export default OrdersTable;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./OrdersTable.css";
import config from "../../../config/config";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ReportDialogCustomer from "./Dialog/ReportDialogCustomer";

function OrdersTable(props) {
  const [orders, setOrders] = useState([]);
  const[reportData,setReportData ]=useState();
  useEffect(() => {
    getOrders();
    console.log(props.filteredData);
  }, [props.filteredData]);
  const getOrders = async () => {
    if (props.filteredData) {
      if(props.filteredData.length<1){
        alert("No data found");
      }
      else{
      setOrders(props.filteredData);}
    }
    
 else{
   await axios({
      
      method: "GET",
      url: `${config.apiURL}/orders/order`,
      })
      .then((res) => {
        console.log(res.data);
        if(res.data.data){
          console.log(res.data.data);
        setOrders(res.data.data);
      }
      }
      )
      .catch((err) => {
        console.log(err);
      }
      );
    }
  };
 
  
  

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
          height:"fit-content"
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
             padding:"0.5rem"
            }}>Sr.</th>
            <th style={{
             padding:"0.5rem"
            }}>Order No</th>
            <th style={{
             padding:"0.5rem"
            }}>Customer</th>
            <th style={{
             padding:"0.5rem"
            }}>Payment Method</th>
            <th style={{
             padding:"0.5rem"
            }}>Date</th>
            <th style={{
             padding:"0.5rem"
            }}>Time</th>
            <th style={{
             padding:"0.5rem"
            }}>Quantity</th>
            <th style={{
             padding:"0.5rem"
            }}>Total</th>
             <th style={{
             padding:"0.5rem"
            }}>Order Discount</th>
          </tr>
        </thead>
      
        <tbody
          style={{
            width: "100%",
            textAlign: "center",
            backgroundColor: "white",
            border: "1px solid #ddd",
            overflowY: "scroll",
            height:"fit-content"
           
           
          }}
        >
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.orderNo}</td>
              <td>{order.orderUser ? order.orderUser.username : " "}</td>
              <td>{order.paymentMethod}</td>
              <td>{order.orderDate ? order.orderDate :" "}</td>
              <td>{order.orderTime ? order.orderTime :" " }</td>
              <td>{order.quantity}</td>
              <td>{order.total}</td>
              <td>{order.orderDiscount ? order.orderDiscount : " "}</td>
            </tr>
          ))}
        </tbody>
       
      </table>
    </div>
  );
}

export default OrdersTable;

