import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./productDrawer.css";
import config from "../../../../config/config";
import { Dropdown } from 'semantic-ui-react'
import { number } from "react-admin";
import axios from "axios";



{
  /*<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;*/
}

const initialFvalues = {
  id: 0,
  name: "",
  category: "",
  price: 23,
  stock: 100,
  description: "made my day",
};

function ProductDrawer() {
  const [productBarcode, setProductBarcode] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [productShortDesc, setProductShortDesc] = useState("");
  const [productPrice, setProductPrice] = useState();
  const [productImg, setProductImg] = useState();
  const [stockStatus, setStockStatus] = useState();

  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [productNameError, setProductNameError] = useState("");
  const [productBarcodeError, setProductBarcodeError] = useState("");
  const [productPriceError, setProductPriceError] = useState("");
  const [productImgError, setProductImgError] = useState("");
  const [productShortDescError, setProductShortDescError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [stockStatusError, setStockStatusError] = useState("");
  const [productDescError, setProductDescError] = useState("");
  const[productRetailPrice,setProductRetailPrice]=useState();
  const [productRetailPriceError, setProductRetailPriceError]=useState("");
const fileInput=React.createRef();
  var categoryId = "";
  var categoryItems = [];
  // useEffect(() => {
  //  getCategory();
  // }, []);
  const onBeforeUpload=(image)=> {
    // get the file size in bytes
    const sizeInBytes = image.size;
    // alert("File size is: " + sizeInBytes);
    return sizeInBytes;
    // get the file size in standard format
   
}
  const getCategory = async (e) => {
    // console.log("in category");
    // setCategory(e.target.categoryId);
    // console.log(category);
    // let result = await fetch("http://192.168.30.176:4000/categories/category");
    let result = await fetch(config.apiURL + "/categories/category");
    result = await result.json();
    console.log(result);
    setCategories(result["data"]);
    console.log(categories);
  };
  const changeCategory = async (e) => {
    console.log("in category");
    setCategory(e.target.value);
    console.log(category);
    setCategoryError("");
  };

  const addProduct = async () => {
    console.log("in add product");
    // categoryItems=getCategory();
    // category.map((item, index) => {
    //   return (
    //     console.log("hbjhjg")
    //   );
    if(productName !== "" && productBarcode !== "" && productPrice !=="" && productImg !=='' && productShortDesc !== "" && category !== "" && stockStatus !== "" ){
      console.log(productPrice)
      setProductNameError("");
      setProductBarcodeError("");
      setProductPriceError("");
      setProductImgError("");
      setProductShortDescError("");
      setCategoryError("");
      setStockStatusError("");
      setProductRetailPriceError("");

    console.warn(
      productBarcode,
      productName,
      category,
      productShortDesc,
      productImg,
      stockStatus,
      productPrice
    );
   
    console.log(
      JSON.stringify({
        productBarcode,
        productName,
        category,
        productShortDesc,
        productImg,
       
      })
    );
    var Imagesize;
    if(productImg){
  Imagesize =onBeforeUpload(productImg);
    console.log("line 42"+ Imagesize);}
    else{
      setProductImgError("Image is required")
    }
    if( Imagesize<1000000){
      console.log(Imagesize);
      setProductImgError("");
    const formData = new FormData();
    formData.append("productBarcode", productBarcode);
    formData.append("productName", productName);
    formData.append("category", category);
    formData.append("productShortDesc", productShortDesc);
    formData.append("productPrice", productPrice);
    formData.append("productRetailPrice", productRetailPrice);
    formData.append("productImg", productImg);
    formData.append("stockStatus", stockStatus);

    console.log(
      "in form data" + formData.get("productName") + formData.get("productImg")+formData.get("productRetailPrice")
    );
    // let result = await fetch(config.apiURL + "/products/product", {
    //   mode: "no-cors",
    //   method: "post",
    //   body: formData,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // console.log(result);
    await axios({
      method: "post",
      mode: "no-cors",
      url: config.apiURL + "/products/product",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        console.log(response.data.data);
        alert("data has been saved");
        window.location.reload();
       

        
      })
      .catch((error) => {
        console.log(error);
      });
    }
    else{
setProductImgError("Image size should be less than 1MB");
    }
    //setProduct(result['data']);

   
   

    //  result=await result.json();
    //  console.log("after result");
    //  console.warn(result);
  
  }
  else{
    if(productName == ""){
      setProductNameError("Product Name is required");
    }
    if(productBarcode == ""){
      setProductBarcodeError("Product Barcode is required");
    }
    if(productPrice === "" || productPrice == null){
      setProductPriceError("Product Price is required");
    }
    if(productImg == null){
      setProductImgError("Product Image is required");
    }
    if(productShortDesc == ""){
      setProductShortDescError("Product Short Description is required");
    }
    if(category == ""){
      setCategoryError("Category is required");
    }
    if(stockStatus == ""){
      setStockStatusError("Stock Status is required");
    }
    if(productRetailPrice === "" || productRetailPrice == null){
      setProductRetailPriceError("Product Retail Price is required");
    }
    
  }
  };
  return (
    <>
      <div className="container-fluid px-4">
        <div className="card mt-4">
          <div className="card-header">
            <h4 className="heading">Add Product</h4>
          </div>
          <div className="card-body">
            <div className="form-group mb-3">
              <label>Product Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={(e) => {
                  setProductName(e.target.value);
                  setProductNameError("");
                }}
                value={productName}
              ></input>
              {productNameError && ( 
                <div className="error" style={{color:'red', fontSize:'8px'}}>{productNameError}</div>
              )}

            </div>

            <div className="form-group mb-3">
              <label>Product Barcode Code</label>
              <input
                type="text"
                name="sku"
                className="form-control"
                onChange={(e) => {
                  setProductBarcode(e.target.value);
                  setProductBarcodeError("");
                }}
                value={productBarcode}
              ></input>
              {productBarcodeError && (
                <div className="error" style={{color:'red', fontSize:'8px'}}>{productBarcodeError}</div>
              )}
            </div>
            <div className="form-group mb-4">
              <label>Image</label>
             <input
                type="file"
                name="image"
                className="form-control"
               ref={fileInput}
                onChange={(e) => {
                  if(onBeforeUpload(e.target.files[0])<1000000){
                  setProductImg(e.target.files[0]);
                  setProductImgError("");}
                  else{
                    setProductImgError("Image size should be less than 1MB");
                    

                  }

                }}
              
             />
              {productImgError!=="" ? <div className="error" style={{color:'red', fontSize:'8px'}}>{productImgError}</div>:null}
            </div>
            <div className="form-group mb-3">
              <label>Select Category</label>
              <select
                name="category_id"
                className="form-control"
                onChange={changeCategory} 
                onClick={getCategory}
                value={category}
                multiple={false}
               
              >
                {categories.map((e, key) => {
                  return (
                    <option key={key} value={e.categoryId}>
                      {e.categoryName}
                    </option>
                  );
                })}
                 {/* <option>Bakery</option>
                    <option>Beverages</option>
                    <option>Dairy</option>
                    <option>Grains</option>
                    <option>Meat</option>
                    <option>Snacks</option>
              <option>Spices</option> */}
              </select>  
              {categoryError && (
                <div className="error" style={{color:'red', fontSize:'8px'}}>{categoryError}</div>
              )}
            
            </div>

            <div className="form-group mb-3">
              <label>Retail Price</label>
              <input
                type="number"
                name="price"
                className="form-control"
                onChange={(e) => {
                  setProductRetailPrice(e.target.value);
                  setProductRetailPriceError("");
                }}
                value={productRetailPrice}
              ></input>
              {productRetailPriceError && (
                <div className="error" style={{color:'red', fontSize:'8px'}}>{productRetailPriceError}</div>
              )}
            </div>

            <div className="form-group mb-3">
              <label>Price</label>
              <input
                type="number"
                name="price"
                
                className="form-control"
                onChange={(e) => {
                  setProductPrice(e.target.value);
                  setProductPriceError("");
                }}
                value={productPrice || ""}
              ></input>
              {productPriceError && (
                <div className="error" style={{color:'red', fontSize:'8px'}}>{productPriceError}</div>
              )}
            </div>
            <div className="form-group mb-3">
              <label>Select Stock Status</label>
              {/* <input
                type="text"
                name="stock"
                className="form-control"
                onChange={(e) => {
                  setStockStatus(e.target.value);
                  setStockStatusError("");
                }}
                value={stockStatus}
              ></input> */}
              <select
               className="form-control"
               onChange={
                (e) => {
                  setStockStatus(e.target.value);
                  setStockStatusError("");
                }
              }
              value={stockStatus}
              defaultValue="In"
              
              >
                <option value="In">In </option>
                <option value="Out">Out </option>
              </select>
              {stockStatusError && (
                <div className="error" style={{color:'red', fontSize:'8px'}}>{stockStatusError}</div>
              )}
            </div>
            <div className="form-group mb-3">
              <label>Description</label>
              <textarea
                type="text"
                name="description"
                className="form-control"
                onChange={(e) => {
                  setProductShortDesc(e.target.value);
                  setProductShortDescError("");
                }}
                value={productShortDesc}
              ></textarea>
              {productShortDescError && (
                <div className="error" style={{color:'red', fontSize:'8px'}}>{productShortDescError}</div>
              )}
            </div>
            <button type="submit" className="submitbtn" onClick={addProduct}>
              Submit
            </button>
          </div>
          {/*  <Grid container className="product_form_container">
            <Grid item xs={6} className="product_form_">
              <TextField
                variant="outlined"
                label=" Product ID"
                name="productId"
                value={values.id}
                className="field"
                onChange={handleInputChange}
              ></TextField>
              <TextField
                variant="outlined"
                label=" Name"
                name="productName"
                value={values.name}
                className="field"
                onChange={handleInputChange}
              ></TextField>
              <TextField
                variant="outlined"
                label="Category"
                value={values.category}
                className="field"
              ></TextField>
              <TextField
                variant="outlined"
                label="Price"
                value={values.price}
                className="field"
              ></TextField>
              <TextField
                variant="outlined"
                label="Stock"
                value={values.price}
                className="field"
              ></TextField>
            </Grid>
          </Grid>*/}
        </div>
      </div>
    </>
  );
}

export default ProductDrawer;
