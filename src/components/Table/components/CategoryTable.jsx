import { React, useState, useEffect } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./CategoryTable.css";
import RoundChild from "./RoundChild";
import { Link } from "react-router-dom";
import EditPopup from "./EditPopup/EditPopup";
import UpdateCategory from "../../../pages/categoryP/UpdateCategory";
import config from "../../../config/config";

const productData = [
  {
    id: 1,
    parent: "candy",
    children: ["drinks", "water", "fizzy", "milkpack"],
  },
  {
    id: 2,
    parent: "candy",
    children: ["drinks", "water", "fizzy", "milkpack"],
  },
  {
    id: 3,
    parent: "candy",
    children: ["drinks", "water", "fizzy", "milkpack"],
  },
  {
    id: 4,
    parent: "candy",
    children: ["drinks", "water", "fizzy", "milkpack"],
  },
  {
    id: 5,
    parent: "candy",
    children: ["drinks", "water", "fizzy", "milkpack"],
  },
  {
    id: 6,
    parent: "candy",
    children: ["drinks", "water", "fizzy", "milkpack"],
  },
  {
    id: 7,
    parent: "candy",
    children: ["drinks", "water", "fizzy", "milkpack"],
  },
];
function loopf() {
  console.log(productData.children);
  // for (var i = 0; i < productData.children.; i++) {

  //   <RoundChild name={productData.children[i]} />;
  // }
}
function CategoryTable() {
  const [category, setCategory] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImg, setCategoryImg] = useState("");
  const [categoryDesc, setCategoryDesc] = useState("");
  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    // let result = await fetch("http://192.168.30.176:4000/categories/category");
    // let result = await fetch("http://localhost:5000/categories/category");
     let result = await fetch(config.apiURL+"/categories/category");

    result = await result.json();
    console.log(result);
    setCategory(result["data"]);
  };
  console.warn("categories", category);
  ///delete category
  const deleteCategory = async (id) => {
    console.warn("hi deleteee" + id);
    let result = await fetch(
      
      config.apiURL+"/categories/category/"+id,
      {
        method: "delete",
      }
    );
    result = await result.json();
    if (result) {
      alert("Record Deleted");
      setCategory(category.filter((item) => item.categoryId !== id));
    }
  };

  // const updateCategory = async(categoryId) => {
  //   setButtonPopup(false)
  //   //    console.log(JSON.stringify({categoryName,categoryImg,categoryDesc}));
  //   //    const formData=new FormData();
  //   // formData.append('categoryName',categoryName);
  //   //  formData.append('categoryImg',categoryImg);
  //   //   formData.append('categoryDesc',categoryDesc);
  //   //     let result=await fetch(`http://localhost:4000/categories/category/${categoryId}`,{
  //   //       method:'Put',
  //   //       body:formData,
  //   //       headers:{
  //   //         "Content-Type":"application/json"
  //   //       }
  //   //     });

  //   //  result=await result.json();
  //   //  console.log("after result");
  //   //  console.warn(result);
  // };
  // useEffect(() => {
  //   fetch('http://192.168.30.176:4000/categories/category')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCategory(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="table_container">
      <table className="table_category">
        <thead
          style={{
            width: "100%",
            backgroundColor: "#f5f2f0",
            height: "2.5em",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <tr>
            <th>ID</th>
            <th>Icon</th>
            <th>Parent</th>
            <th>Chidren</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody
          style={{
            width: "100%",
            textAlign: "center !important",
            backgroundColor: "white",
            border: "1px solid #ddd",
          }}
        >
          {category.map((item, index) => {
            {
              /* var url="http://192.168.30.176:4000"; */
            }
            var url = config.apiURL;
            return (
              <tr key={item.categoryId}>
                <td>{index + 1}</td>
                <td>
                  <div style={{ backgroundColor: "white", width: "3px" }}>
                    <img
                      style={{ width: "40px", borderRadius: "5px" }}
                      src={url + item.categoryImg}
                      alt=""
                    />
                  </div>
                </td>
                <td>{item.categoryName}</td>
                <td>
                  {
                    <>
                      <RoundChild name={item.categoryName} />
                    </>
                  }
                </td>
                <td>{<VisibilityOutlinedIcon />}</td>
                <td>
                  <div>
                    <Link to={"/updatecategory/" + item.categoryId}>
                      <ModeEditOutlineIcon
                        style={{
                          margin: "3px",
                          color: "#de751f",
                          cursor: "pointer",
                        }}
                      />
                    </Link>

                    <DeleteOutlineIcon
                      onClick={() => deleteCategory(item.categoryId)}
                      style={{ cursor: "pointer", color: "red" }}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryTable;
