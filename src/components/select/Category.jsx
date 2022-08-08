import React from "react";
import "./category.css";

function Category() {
  return (
        <select className="category-select">
        <option value="0">Category</option>
        <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Nissan</option>
        <option value="5">Toyota</option>
        <option value="6">Volvo</option>
      </select>
   
  );
}

export default Category;
