import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconContext } from "react-icons";
import config from "../../../config/config";
import ReactPaginate from "react-paginate";
import "./ProductTable.css";
import { Domain } from "@mui/icons-material";
import { checkboxClasses } from "@mui/material";
 export default function ProductTable({ tableData }) {
  const [productSKU, setProductSKU] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [productShortDesc, setProductShortDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImg, setProductImg] = useState("");
  const [stockStatus, setStockStatus] = useState("");
  var categor;
  // const [tableDat, setTableDat] = useState([  { id: 1, name: "surf excel", category_id:"Beverages",price: 20, stock: 2000 }]);
  const [product, setProduct] = useState([]);
  const [isChecked, setIsChecked] =useState([]);

   // We start with an empty list of items.
 const [currentItems, setCurrentItems] = useState([]);
 const [pageCount, setPageCount] = useState(0);
 // Here we use item offsets; we could also use page offsets
 // following the API or data you're working with.
 const [itemOffset, setItemOffset] = useState(0);
 const itemsPerPage=3;
  useEffect(() => {
    getProduct();
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(product.slice(itemOffset, endOffset));
   setPageCount(Math.ceil(product.length / itemsPerPage));
 }, [itemOffset, itemsPerPage,product]);

  const getProduct = async () => {
    // let result = await fetch("http://192.168.30.176:4000/categories/category");
    // let result = await fetch("http://localhost:5000/products/product");
    let result = await fetch(config.apiURL + "/products/product");
    result = await result.json();
    console.log("product"+product);
    console.log(result);
    setProduct(result["data"]);
  };
  ////
 // Invoke when user click to request another page.
 const handlePageClick = (event) => {
   const newOffset = (event.selected * itemsPerPage) % product.length;
   setItemOffset(newOffset);

 };
  //////
  const deleteProduct = async (id) => {
    console.warn("hi deleteee" + id);
    let result = await fetch(config.apiURL + "/products/product/" + id, {
      method: "delete",
    });
    result = await result.json();
    console.log(result);
    if (result["message"] === "Success") {
      alert("Record Deleted");
      setProduct(product.filter((item) => item.productId !== id));
    }
  };
 
const handleCheckbox=(e)=>{
 
const {value, checked}=e.target;
if(checked){
  console.log("gugyh");
  e.className="table_checkbox";
  setIsChecked([...isChecked], value);
}
else{
  setIsChecked(isChecked.filter((e)=>e!==value));
}
console.log(value);
};
var isRowSelected=(item)=>
  isChecked.includes(item) ? "checked-item" : "not-checked-item";
  return (
    <div className="table_container">
      <table
        className="table_product"
        style={{
          width: "100%",
          alignItems: "center",

          border: "1px solid #ddd",
          borderRadius: "10px",
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
           <th>#</th>
            <th>Product QRcode</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Details</th>
            <th>Actions</th>
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
          {currentItems.map((item, index) => {
            var url = config.apiURL;
           
            return (
              
              <tr className={isRowSelected(item)}  key={item.productId}>
              <td>
                <input type='checkbox' value={item.productId} checked={item.isChecked} onChange={(e)=>handleCheckbox(e)}/>
              </td>
                <td>{item.productSKU}</td>
                <td>
                  <div style={{ backgroundColor: "white", width: "3px" }}>
                    <img
                      style={{ width: "40px", borderRadius: "5px" }}
                      src={url + item.productImg}
                      alt=""
                    />
                  </div>
                </td>
                <td>{item.productName}</td>
                <td>{item.category.categoryName}</td>
                <td>{item.productPrice}</td>
                <td>{item.stockStatus}</td>
                <td>
                  {
                    <IconContext.Provider value={{ color: "blue" }}>
                      <Link to={"/products/Detail/" + item.productId}>
                        <VisibilityOutlinedIcon />
                      </Link>
                    </IconContext.Provider>
                  }
                </td>
                <td>
                  <div>
                    <Link to={"/updateproduct/" + item.productId}>
                      <ModeEditOutlineIcon
                        style={{
                          margin: "3px",
                          color: "#de751f",
                          cursor: "pointer",
                        }}
                      />
                    </Link>
                    <DeleteOutlineIcon
                      onClick={() => deleteProduct(item.productId)}
                      style={{ cursor: "pointer", color: "red" }}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
          {/*
          <tr>
            <td>{3}</td>
            <td>"Surf Excel"</td>
            <td>"Detergent"</td>
            <td>300</td>
            <td>20</td>
            <td>
              {
                <IconContext.Provider value={{ color: "blue" }} >
                  <Link to="/products/Detail" state={tableData}>
                    <VisibilityOutlinedIcon />
                  </Link>
                </IconContext.Provider>
              }
            </td>
            <td>
              <div>
                <ModeEditOutlineIcon style={{ margin: "3px" }} />
                <DeleteOutlineIcon />
              </div>
            </td>
          </tr>*/}
          {/*
          <tr>
            <td>{4}</td>
            <td>"Surf Excel"</td>
            <td>"Detergent"</td>
            <td>300</td>
            <td>20</td>
            <td>
              {
                <IconContext.Provider value={{ color: "blue" }}>
                  <Link to="/products/Detail">
                    <VisibilityOutlinedIcon />
                  </Link>
                </IconContext.Provider>
              }
            </td>
            <td>
              <div>
                <ModeEditOutlineIcon style={{ margin: "3px" }} />
                <DeleteOutlineIcon />
              </div>
            </td>
          </tr>
          <tr>
            <td>{5}</td>
            <td>"Surf Excel"</td>
            <td>"Detergent"</td>
            <td>300</td>
            <td>20</td>
            <td>
              {
                <IconContext.Provider value={{ color: "blue" }}>
                  <Link to="/products/Detail">
                    <VisibilityOutlinedIcon />
                  </Link>
                </IconContext.Provider>
              }
            </td>
            <td>
              <div>
                <ModeEditOutlineIcon style={{ margin: "3px" }} />
                <DeleteOutlineIcon />
              </div>
            </td>
          </tr>
          <tr>
            <td>{6}</td>
            <td>"Surf Excel"</td>
            <td>"Detergent"</td>
            <td>300</td>
            <td>20</td>
            <td>
              {
                <IconContext.Provider value={{ color: "blue" }}>
                  <Link to="/products/Detail">
                    <VisibilityOutlinedIcon />
                  </Link>
                </IconContext.Provider>
              }
            </td>
            <td>
              <div>
                <ModeEditOutlineIcon style={{ margin: "3px" }} />
                <DeleteOutlineIcon />
              </div>
            </td>
          </tr>
          <tr>
            <td>{7}</td>
            <td>"Surf Excel"</td>
            <td>"Detergent"</td>
            <td>300</td>
            <td>20</td>
            <td>
              {
                <IconContext.Provider value={{ color: "blue" }}>
                  <Link to="/products/Detail">
                    <VisibilityOutlinedIcon />
                  </Link>
                </IconContext.Provider>
              }
            </td>
            <td>
              <div>
                <ModeEditOutlineIcon style={{ margin: "3px" }} />
                <DeleteOutlineIcon />
              </div>
            </td>
          </tr>*/}
        </tbody>
      </table>
      <div className="pagination_container">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName='page-num'
        previousLinkClassName	='page-num'
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
      </div>
    </div>
  );
}