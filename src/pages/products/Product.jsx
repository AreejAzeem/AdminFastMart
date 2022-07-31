import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./product.css";
import Search from "../../components/search/Search";
import Category from "../../components/select/Category.jsx";
import Price from "../../components/select/Price.jsx";
import ProductTable from "../../components/Table/components/ProductTable";
import { Drawer } from "@mui/material";
import ProductDrawer from "../../components/Table/components/productDrawer/ProductDrawer";
import TablePaginateProduct from "../../components/Table/components/TablePagination/TablePaginateProduct";

function Product() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [tableData, setTableData] = useState([])
 const [formInputData, setformInputData] = useState(
     {
     name:'',
     sku:'',
     img:'',
     category_id:'',
     price:'',
     stock:'',
     description:''
    }
 );
 
 const handleChange=(evnt)=>{  
     const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
    setformInputData(newInput)
 }
  
 const handleSubmit= (evnt) =>{
     evnt.preventDefault();
     const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
     if(checkEmptyInput)
     {
      const newData = (data)=>([...data, formInputData])
      setTableData(newData);
      const emptyInput= {name:'', category_id:'', price:'',stock:'', description:''}
      setformInputData(emptyInput)
     } 

    //  console.log(JSON.stringify({productSKU,productName,category,productShortDesc,adminId}))
      const formData=new FormData(tableData);
      // formData.append('categoryName',categoryName);
      // formData.append('categoryImg',categoryImg);
      // formData.append('categoryDesc',categoryDesc);
      // console.log("in form data"+formData.categoryName);
      let result=fetch("http://localhost:5000/products/product",{
        mode: 'no-cors',
        method:'post',
        body:formData,
        headers:{
          "Content-Type":"application/json"
        }
      });
      console.log(result);
       alert("data has been saved");
      
      
      //  result=await result.json();
      //  console.log("after result");
      //  console.warn(result);
    
 }  

  return (
    <>
      <div className="product">
      <div className="productWrapper">
        <h2 className="product_title">Products</h2>
        <div className="product_searchContainer">
          <div className="product_searchField">
            <Search placeholder="Search Product" />
          </div>
          <div className="category_Field">
            <Category />
          </div>
          <div className="price_Field">
            <Price />
          </div>
          <div className="add_product">
            <button
              className="addProduct_btn"
              onClick={() => setIsDrawerOpen(true)}
            >
              + Add Product
            </button>
          </div>
        </div>
        <div className="product_table">
          {/* <ProductTable tableData={tableData}/> */}
          <TablePaginateProduct/>
        </div>
      </div>
      </div>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <ProductDrawer handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>
      </Drawer>
    </>
  );
}

export default Product;
