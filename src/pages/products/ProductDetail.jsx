import React, { useState, useEffect } from "react";
import "./productDetail.css";
import { Link, useParams } from "react-router-dom";
import config from "../../config/config";

function ProductDetail() {
  const [produc, setProduc] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log("In Details");
    getProduc();
    console.log(produc);
  }, []);
  const getProduc = async () => {
    // let result = await fetch("http://192.168.30.176:4000/categories/category");
    let result = await fetch(config.apiURL + "/products/product/" + id);
    result = await result.json();
    console.log(result);
    await setProduc(result["data"]);
    //console.log(product);
  };
  var url = config.apiURL;
  return (
    <div className="product_detail">
      <div className="product_detailWrapper">
        <div className="product_detail_head">
          <h2>Product Detail</h2>
        </div>
        <div
          className="product_detail_body"
          style={{ display: "flex !important" }}
        >
          <div className="product_img">
            <img src={url + produc.productImg} alt="" className="img_product" />
          </div>
          <div className="product_detail_des">
            <div className="product_title">
              <h3 style={{ fontWeight: "bold" }}>{produc.productName}</h3>
            </div>
            <div className="product_price">
              <h3 style={{ fontWeight: "bold" }}>
                {"Rs " + produc.productPrice}
              </h3>
            </div>
            <div className="product_stock_quantity">
              <div className="stock">
                <h5
                  style={{
                    fontSize: " 1rem",
                    textOpacity: "4",
                    color: "rgba(14,159,110)",
                    marginBottom: "0rem",
                    padding: "1.5px",
                  }}
                >
                  {"Stock : " + produc.stockStatus}
                </h5>
              </div>
              {/* <div className="quantity">
                <h5 style={{ color: "rgba(112,114,117)", padding: "2.5px" }}>
                  Quantity: 200
                </h5>
              </div> */}
            </div>
            <div className="product_des">
              <p
                style={{
                  color: "rgba(112,114,117)",
                  textAlign: "justify",
                  marginTop: "3%",
                }}
              >
                {produc.productDesc}
              </p>
            </div>
            <div className="product_catgry">
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  marginRight: "3%",
                }}
              >
                Category :
              </h5>
              <h5 style={{ color: "rgba(112,114,117)" }}>
                {produc.category === undefined
                  ? ""
                  : produc.category.categoryName}
              </h5>
            </div>
            <Link to="/products">
              <button className="Product_btn">Back to Product</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
