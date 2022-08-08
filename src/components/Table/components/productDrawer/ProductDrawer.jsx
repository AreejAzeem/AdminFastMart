import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./productDrawer.css";
import config from "../../../../config/config";
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

function ProductDrawer({ handleChange, formInputData, handleSubmit }) {
  const [productSKU, setProductSKU] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [productShortDesc, setProductShortDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImg, setProductImg] = useState();
  const [stockStatus, setStockStatus] = useState("");
  const [values, setValues] = useState(initialFvalues);
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  var categoryId = "";
  var categoryItems = [];
  // useEffect(() => {
  //  getCategory();
  // }, []);
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
  };

  const addProduct = async () => {
    // categoryItems=getCategory();
    // category.map((item, index) => {
    //   return (
    //     console.log("hbjhjg")
    //   );
    console.warn(
      productSKU,
      productName,
      category,
      productShortDesc,
      productImg,
      stockStatus,
      productPrice
    );
    const adminId = JSON.parse(localStorage.getItem("admin"))._id;
    console.log(
      JSON.stringify({
        productSKU,
        productName,
        category,
        productShortDesc,
        productImg,
        adminId,
      })
    );
    const formData = new FormData();
    formData.append("productSKU", productSKU);
    formData.append("productName", productName);
    formData.append("category", category);
    formData.append("productShortDesc", productShortDesc);
    formData.append("productPrice", productPrice);
    formData.append("productImg", productImg);
    formData.append("stockStatus", stockStatus);

    console.log(
      "in form data" + formData.get("productName") + formData.get("productImg")
    );
    let result = await fetch(config.apiURL + "/products/product", {
      mode: "no-cors",
      method: "post",
      body: formData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(result);
    //setProduct(result['data']);
    
    alert("data has been saved");
    //  navigate('/products')

    //  result=await result.json();
    //  console.log("after result");
    //  console.warn(result);
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
                }}
                value={productName}
              ></input>
            </div>

            <div className="form-group mb-3">
              <label>Product SKU</label>
              <input
                type="text"
                name="sku"
                className="form-control"
                onChange={(e) => {
                  setProductSKU(e.target.value);
                }}
                value={productSKU}
              ></input>
            </div>
            <div className="form-group mb-4">
              <label>Image</label>
              <input
                type="file"
                name="file"
                className="form-control"
                onChange={(e) => {
                  setProductImg(e.target.files[0]);
                }}
              ></input>
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
            </div>
            <div className="form-group mb-3">
              <label>Price</label>
              <input
                type="text"
                name="price"
                className="form-control"
                onChange={(e) => {
                  setProductPrice(e.target.value);
                }}
                value={productPrice}
              ></input>
            </div>
            <div className="form-group mb-3">
              <label>Stock</label>
              <input
                type="text"
                name="stock"
                className="form-control"
                onChange={(e) => {
                  setStockStatus(e.target.value);
                }}
                value={stockStatus}
              ></input>
            </div>
            <div className="form-group mb-3">
              <label>Description</label>
              <textarea
                type="text"
                name="description"
                className="form-control"
                onChange={(e) => {
                  setProductShortDesc(e.target.value);
                }}
                value={productShortDesc}
              ></textarea>
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
