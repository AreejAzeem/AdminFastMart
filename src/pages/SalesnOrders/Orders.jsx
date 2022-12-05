import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./orders.css";
import Search from "../../components/search/Search";
import OrdersTable from "../../components/Table/components/OrdersTable";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import config from "../../config/config";

function Orders() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [order, setOrder] = useState();
  
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
  const getFilteredData = async () => {
    await axios({
      method: "get",
      url: `${config.apiURL}/orders/order?orderNo=${searchInput}`,
      headers: {
        "Content-Type": "application/json",
        },
        })
        .then((res) => {
          console.log(res.data);
         if(res.data.data){
          setOrder(res.data.data);
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
      <div className="orders">
        <div className="ordersWrapper">
          <h2 className="orders_title">Orders</h2>
          <div className="orders_searchContainer">
            <div
              className="orders_searchContainer_wrapper"
              style={{ justifyContent: "space-evenly" }}
            >
              <div className="orders_searchField">
                <Search placeholder="Search Order by Number" style={{
                  width: "80%",
                  borderRaduis: "10px !important",
                }}
                setSearchInput={setSearchInput}/>
                <BiSearch size={38} color="orange" style={{marginTop:'7px', marginLeft:'3px', cursor:'pointer'}}
                onClick={getFilteredData} 
/>
              </div>
              {/* <div className="orderslimit_Field">
                <Price />
              </div> */}
              
            </div>
          </div>
          <div className="orders_table">
            <OrdersTable filteredData={order} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
