import React from "react";
import "./price.css";

function Price() {
  return (
    
      <select className="price_select">
        <option value="0">Price</option>
        <option value="1">Low to Medium</option>
        <option value="2">Medium to High</option>
      </select>
   
  );
}

export default Price;
