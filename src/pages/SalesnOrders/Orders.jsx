import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./orders.css";
import Search from "../../components/search/Search";
import OrdersTable from "../../components/Table/components/OrdersTable";
import Category from "../../components/select/Category.jsx";
import Price from "../../components/select/Price.jsx";
import ProductTable from "../../components/Table/components/ProductTable";
import { Drawer } from "@mui/material";
import ProductDrawer from "../../components/Table/components/productDrawer/ProductDrawer";

function Orders() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [formInputData, setformInputData] = useState({
    name: "",
    category_id: "",
    price: "",
    stock: "",
    description: "",
  });
  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value,
    });
    setformInputData(newInput);
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formInputData];
      setTableData(newData);
      const emptyInput = {
        name: "",
        category_id: "",
        price: "",
        stock: "",
        description: "",
      };
      setformInputData(emptyInput);
    }
  };

  return (
    <>
      <div className="orders">
        <div className="ordersWrapper">
          <h2 className="orders_title">Orders</h2>
          <div className="orders_searchContainer"  >
          <div className="orders_searchContainer_wrapper" style={{justifyContent:"space-evenly"}}>
            <div className="orders_searchField">
              <Search placeholder="Search Order" />
            </div>
            <div className="orderslimit_Field">
              <Price />
            </div>
            <div className="download_orders">
              <button
                className="downloadOrders_btn"
                onClick={() => setIsDrawerOpen(true)}
              >
                Download Orders
              </button>
            </div>
            </div>
          </div>
          <div className="orders_table">
             <OrdersTable/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
