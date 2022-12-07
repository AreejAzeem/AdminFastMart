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
import { BiSearch  } from 'react-icons/bi';
import config from "../../config/config";
function Product() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [tableData, setTableData] = useState([])
  const [searchInput, setSearchInput]=useState("");
  const [product, setProduct]=useState('')
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
 const getFilteredData=async()=>{
  let result = await fetch(config.apiURL+`/products/product?productName=${searchInput}`);
  result = await result.json();
  console.log(result);
  if(result){
    setProduct(result["data"]);
  }
  }
  
 
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
        <div style={{
          marginLeft:'8px',
        }}>
        <h2 className="product_title">Products</h2></div>
        <div className="product_searchContainer">
          <div className="product_searchField">
            <Search placeholder="Search Product by Name" setSearchInput={setSearchInput} />
            <BiSearch size={38} color="orange" style={{marginTop:'9px', marginLeft:'14px', cursor:'pointer'}} 
           onClick={getFilteredData}/>
          </div>
          {/* <div className="category_Field">
            <Category />
          </div> */}
          {/* <div className="price_Field">
            <Price />
          </div> */}
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
          <TablePaginateProduct filteredData={product}/>
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
