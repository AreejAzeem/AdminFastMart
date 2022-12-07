import React, {useState} from "react";
import "./categoryP.css";
import Search from "../../components/search/Search";
import Category from "../../components/select/Category.jsx";
import CategoryTable from "../../components/Table/components/CategoryTable";
import { Drawer } from "@mui/material";
import CategoryDrawer from "../../components/Table/components/CategoryDrawer/CategoryDrawer";
import TablePaginateCategory from "../../components/Table/components/TablePagination/TablePaginateCategory";
import { BiSearch  } from 'react-icons/bi';
import config from "../../config/config";

function CategoryP() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchInput, setSearchInput]=useState("");
  const [category, setCategory]=useState("");
  const [searchClicked, setSearchClicked]=useState(false);
console.log("in line 16 "+searchInput);
  const getFilteredData=async()=>{
    let result = await fetch(config.apiURL+`/categories/category?categoryName=${searchInput}`);
    result = await result.json();
    console.log(result);
    if(result["data"]){
      setSearchClicked(true);
    setCategory(result["data"]);}
  }
  return (
    <>
    <div className="category">
    <div className="categoryWrapper">
      <h2 className="category_title">Categories</h2>
      <div className="category_searchContainer">
        <div className="category_searchField">
          <Search placeholder="search by name" setSearchInput={setSearchInput} 
          className="category_searchInput" 
         />
           <BiSearch size={30} color="orange"className="category_searchField_searchbtn"
           onClick={getFilteredData}/>
        </div>
        {/* <div className="category_Field">
          <Category />
        </div> */}
        <div className="add_category">
          <button className="addCategory_btn"  onClick={() => setIsDrawerOpen(true)}>+ Add Category
         </button>
        </div>
      </div>
      <div className="category_table">
              <TablePaginateCategory filteredData={category} setSearchClicked={setSearchClicked} />
  {/* <CategoryTable/> */}
      </div>
    </div>
    </div>
    <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <CategoryDrawer/>
      </Drawer>
      </>
  );
}

export default CategoryP;
