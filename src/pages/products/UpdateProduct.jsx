import { React, useState, useEffect } from "react";
import "./UpdateProduct.css";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import config from "../../config/config";
function UpdateCategory() {
    const [productSKU, setProductSKU] = useState("");
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [productShortDesc, setProductShortDesc] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImg, setProductImg] = useState("");
    const [stockStatus, setStockStatus] = useState("");
    const [categories, setCategories]=useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
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

    // const data = { categoryName, categoryImg, categoryDesc };
    // console.log(JSON.stringify({ categoryName, categoryImg, categoryDesc }));
    var formData = new FormData();
    // console.log(categoryImg);
      formData.append('productSKU',productSKU);
      formData.append('productName',productName);
      formData.append('category',category);
      formData.append('productShortDesc',productShortDesc);
      formData.append('productPrice',productPrice);
      formData.append('productImg',productImg);
      formData.append('stockStatus',stockStatus);
      console.log(formData.get('category'));
    console.log(id);
    await fetch(
      config.apiURL+"/products/product/" + id,
      {
        mode:'no-cors',
        method: "post",
        body: formData,
        headers: {
          "Content-Type": "application/json",
        },
      }
     
    );
    //  result = await result.json();
    //  console.log("result" + result);
    // // console.log("after result");
    // console.warn(result);
    //   navigate('/products');
  };
  return (
    <div>
      <div className="container-fluid px-4">
        <div className="body_wrapper">
          <div className="card mt-4">
            <div className="card-header">
              <h4 className="display-4 heading" style={{ textAlign: "center", fontSize:"20px" }}>
                Update Category
              </h4>
            </div>
            <div
              className="card-body"
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              <div className="form-group mb-4">
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
                <label>Name</label>
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
                  <label>Select Category</label>
                  <select name="category_id" className="form-control"   onChange={changeCategory} onClick={getCategory}
                     value={category} multiple={false}>
                  {categories.map((e, key) => {  
             return( <option key={key} value={e.categoryId}>{e.categoryName}</option>)
})}                 </select>
                </div>
                <div className="form-group mb-4">
                <label>Description</label>
                <input
                  type="text"
                  name="productDesc"
                  className="form-control"
                  onChange={(e) => {
                    setProductShortDesc(e.target.value);
                  }}
                  value={productShortDesc}
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
              <div className="form-group mb-4">
                <label>Price</label>
                <input
                  type="number"
                  name="productPrice"
                  className="form-control"
                  onChange={(e) => {
                    setProductPrice(e.target.value);
                  }}
                  value={productPrice}
                ></input>
              </div>
            
              <div className="form-group mb-4">
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

export default UpdateCategory;
