import { React, useState, useEffect } from "react";
import "./UpdateProduct.css";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import config from "../../config/config";
import axios from "axios";
function UpdateProduct() {
    const [productBarcode, setProductBarcode] = useState("");
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [productShortDesc, setProductShortDesc] = useState("");
    const [productPrice, setProductPrice] = useState();
    const [productImg, setProductImg] = useState("");
    const [stockStatus, setStockStatus] = useState();
    const [categories, setCategories]=useState([]);
    const [productNameError, setProductNameError] = useState("");
  const [productBarcodeError, setProductBarcodeError] = useState("");
  const [productPriceError, setProductPriceError] = useState("");
  const [productImgError, setProductImgError] = useState("");
  const [productShortDescError, setProductShortDescError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [stockStatusError, setStockStatusError] = useState();
  const[productRetailPrice,setProductRetailPrice]=useState();
  const[productRetailPriceError,setProductRetailPriceError]=useState("");
  const[id,setId]=useState(useParams().id);
  // const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("use eefectgh")
     if(id){
    getPreviousProduct();}
  } ,[id])
  const onBeforeUpload=(image)=> {
    // get the file size in bytes
    const sizeInBytes = image.size;
    // alert("File size is: " + sizeInBytes);
    return sizeInBytes;
    // get the file size in standard format
   
}
  const getPreviousProduct = async () => {
 
    console.log(id);

    await axios({
      method: "get",
      url: config.apiURL+"/products/product/"+id,
      headers: {
        "Content-Type": "application/json",

      },

    }).then((res) => {
      console.log(res.data);
      setProductBarcode(res.data.data.productBarcode);
      setProductName(res.data.data.productName);
       setCategory(res.data.data.category.categoryId);
      setProductShortDesc(res.data.data.productShortDesc);
      setProductPrice(res.data.data.productPrice);
     // setProductImg(config.apiURL+res.data.data.productImg);
     // setStockStatus(res.data.data.stockStatus);
      setProductRetailPrice(res.data.data.productRetailPrice);
    }
    ).catch((err) => {
      console.log(err);
    }
    )
  }
  const getCategory =async(e) => {
    // console.log("in category");
    // setCategory(e.target.categoryId);
    // console.log(category);
    // let result = await fetch("http://192.168.30.176:4000/categories/category");
    let result =await fetch(config.apiURL+"/categories/category");
    result = await result.json();
    console.log(result);
    setCategories(result['data']);
 //   console.log(categories);
  };
const changeCategory = async(e) => {
  console.log("in category");
    setCategory(e.target.value);
    console.log(e.target.value);
  }
  const updateProduct = async () => {
    console.log(productImg);
    console.log(category);
    console.log(stockStatus);
if(productName!=='' && productBarcode!==''
 && productPrice!=="" && productRetailPrice!=="" 
  && productShortDesc!=='' && category!=="" &&  stockStatus!==undefined){
  setProductNameError("");
  setProductBarcodeError("");
  setProductPriceError("");
  setProductRetailPriceError("");
  setProductImgError("");
  setProductShortDescError("");
  setCategoryError("");
  setStockStatusError("");

    // const data = { categoryName, categoryImg, categoryDesc };
    // console.log(JSON.stringify({ categoryName, categoryImg, categoryDesc }));
    
    var formData = new FormData();
    // console.log(categoryImg);
      formData.append('productBarcode',productBarcode);
      formData.append('productName',productName);
      formData.append('category',category);
      formData.append('productShortDesc',productShortDesc);
      formData.append('productPrice',productPrice);
      formData.append("productRetailPrice",productRetailPrice);
      formData.append('productImg',productImg);
      formData.append('stockStatus',stockStatus);
      console.log(formData.get('category'));
    console.log(formData.get('productImg'));
    // await fetch(
    //   config.apiURL+"/products/product/" + id,
    //   {
    //     mode:'no-cors',
    //     method: "post",
    //     body: formData,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
     
    // ).then((res) => {
    //   console.log(res)
    //   if(res.status==200){
    //   alert("Product Updated Successfully");
    //   navigate("/products");
    // }
    // else{
    //   alert("Product Not Updated");
    // }

    // });

    console.log(stockStatus)
    if(stockStatus==="in" || stockStatus==="out" || stockStatus==="In" ||stockStatus==="Out"){
        await axios({
      method: "post",
      url: config.apiURL+"/products/product/" + id,
      data: formData,
      mode:'no-cors',
      headers: {
        "Content-Type": "application/json",
        },
        }).then((res) => {
          console.log(res)
          if(res.status==200){
          alert("Product Updated Successfully");
          navigate("/products");
        }
        else{
          alert("Product Not Updated");
        }
      }).catch((err) => {
        console.log(err);
      }
      )}
      else{
        setStockStatusError("Stock Status should be in or out");
      }

    //  result = await result.json();
    //  console.log("result" + result);
    // // console.log("after result");
    // console.warn(result);
  
      }
     
     else{
      if(productBarcode == ""){
        setProductBarcodeError("Product Barcode is required");
      }
      if(productName == ""){
        setProductNameError("Product Name is required");
      }
      if(category == "" || category == undefined){
        setCategoryError("Category is required");
      }
      if(productShortDesc == ""){
        setProductShortDescError("Product Short Description is required");
      }
      if(productImg == "" || productImg == undefined){
        setProductImgError("Product Image is required");
      }
      if(productPrice == null){
        setProductPriceError("Product Price is required");
      }
      if(productRetailPrice == null){
        setProductRetailPriceError("Product Retail Price is required");
      }
      if(stockStatus == null){
        setStockStatusError("Stock Status is required");
      }
     


      }
  };
  return (
    <div>
      <div className="container-fluid px-4">
        <div className="body_wrapper">
          <div className="card mt-4">
            <div className="card-header">
              <h4 className="display-4 heading" style={{ textAlign: "center", fontSize:"20px" }}>
                Update Product
              </h4>
            </div>
            <div
              className="card-body"
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              <div className="form-group mb-4">
                <label>Product Barcode</label>
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
                <label>Name</label>
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
                  <label>Select Category</label>
                  <select name="category_id" className="form-control"   onChange={changeCategory} onClick={getCategory}
                     value={category} multiple={false}>
                  {categories.map((e, key) => {  
             return( <option key={key} value={e.categoryId}>{e.categoryName}</option>)
})}                 </select>
 {categoryError && (
                <div className="error" style={{color:'red', fontSize:'8px'}}>{categoryError}</div>
              )}
                </div>
                <div className="form-group mb-4">
                <label>Description</label>
                <input
                  type="text"
                  name="productDesc"
                  className="form-control"
                  onChange={(e) => {
                    setProductShortDesc(e.target.value);
                    setProductShortDescError("");
                  }}
                  value={productShortDesc}
                ></input>
                  {productShortDescError && (
                <div className="error" style={{color:'red', fontSize:'8px'}}>{productShortDescError}</div>
              )}
              </div>
              {/* <div className="form-group mb-4">
                <label>Image</label>
                <input
                  type="file"
                  name="file"
                  className="form-control"
                  onChange={(e) => {
              
                 
                    setProductImg(e.target.files[0]);
                    setProductImgError("");}
                    
                  }
                ></input>
                 {productImgError && (
                <div className="error" style={{color:'red', fontSize:'8px'}}>{productImgError}</div>
              )}
              </div> */}
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
              <div className="form-group mb-4">
                <label>Price</label>
                <input
                  type="number"
                  name="productPrice"
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
            
              <div className="form-group mb-4">
                <label>Stock</label>
                <input
                  type="text"
                  name="stock"
                  className="form-control"
                  onChange={(e) => {
                    setStockStatus(e.target.value);
                    if(stockStatus == "In" || stockStatus == "Out" || stockStatus == "in" || stockStatus == "out"){
                    setStockStatusError("");
                    }
                    else{
                      setStockStatusError("Stock Status should be In or Out");
                    }
                  }}
                  value={stockStatus}
                ></input>
                  {stockStatusError && (
                <div style={{color:'red', fontSize:'8px'}}>{stockStatusError}</div>
              )}
              </div>
              <button className="submit_btn" onClick={updateProduct}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
