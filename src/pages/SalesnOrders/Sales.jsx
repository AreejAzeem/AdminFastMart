import React from "react";
import Search from "../../components/search/Search";
import TablePaginate from "../../components/Table/components/TablePagination/TablePaginate";
import Price from "../../components/select/Price";
import "./sales.css"
function Sales() {
  return (
    <div  className="Sales" style={{width:"100%"}}>
     <div className="salesWrapper">
     <h2 className="sales_title">Sales</h2>
     <div className="sales_searchContainer"  >
          <div className="sales_searchContainer_wrapper" style={{justifyContent:"space-evenly"}}>
            <div className="sales_searchField">
              <Search placeholder="Search Product" />
            </div>
            <div className="orderslimit_Field">
              <Price />
            </div>
            <div className="download_sales">
              <button
                className="downloadSales_btn"
               
              >
                Download Sales
              </button>
            </div>
            </div>
          </div>
          <div className="sales_table">
            <TablePaginate/>
          </div>
    </div>
    </div>
    
  );
}

export default Sales;
