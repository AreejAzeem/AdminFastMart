import React, {useState} from "react";
import "./categoryP.css";
import Search from "../../components/search/Search";
import Category from "../../components/select/Category.jsx";
import CategoryTable from "../../components/Table/components/CategoryTable";
import { Drawer } from "@mui/material";
import CategoryDrawer from "../../components/Table/components/CategoryDrawer/CategoryDrawer";
import TablePaginateCategory from "../../components/Table/components/TablePagination/TablePaginateCategory";
function CategoryP() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
    <div className="category">
    <div className="categoryWrapper">
      <h2 className="category_title">Categories</h2>
      <div className="category_searchContainer">
        <div className="category_searchField">
          <Search placeholder="search by category type" />
        </div>
        <div className="category_Field">
          <Category />
        </div>
        <div className="add_category">
          <button className="addCategory_btn"  onClick={() => setIsDrawerOpen(true)}>+ Add Category
         </button>
        </div>
      </div>
      <div className="category_table">
              <TablePaginateCategory />
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
