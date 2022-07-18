import React, { useState } from "react";
import "./categoryDrawer.css";
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

function CategoryDrawer() {
  const[categoryName,setCategoryName]=useState('');
  const[categoryImg,setCategoryImg]=useState('');
  const[categoryDesc,setCategoryDesc]=useState('');
  const addCategory=async()=>{
    console.warn(categoryName,categoryImg,categoryDesc);
    // const adminId=JSON.parse(localStorage.getItem("admin"))._id;
    // console.log(JSON.stringify({categoryName,categoryImg,categoryDesc,adminId}))
    const formData=new FormData();
    formData.append('categoryName',categoryName);
    formData.append('categoryImg',categoryImg);
    formData.append('categoryDesc',categoryDesc);
    console.log("in form data"+formData.categoryName);
    let result=await fetch(config.apiURL+"/categories/category",{
      mode: 'no-cors',
      method:'post',
      body:formData,
      headers:{
        "Content-Type":"application/json"
      }
    });
    console.log(result);
     alert("data has been saved");
     
    //  result=await result.json();
    //  console.log("after result");
    //  console.warn(result);
  }
  
  // const [values, setValues] = useState(initialFvalues);
  // const handleInputChange = (e) => {
  //   const [name, value] = e.target;
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  // };
  return (
    <>
     <div className="container-fluid px-4">
        <div className="card mt-4">
          <div className="card-header">
            <h4 className="display-4 heading" style={{fontSize:"2rem",fontWeight:"bold",opacity:"0.8"}}>Add Category</h4>
          </div>
          <div className="card-body">
           <div className="form-group mb-4">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={(e)=>{setCategoryName(e.target.value)}}
                    value={categoryName}
                  ></input>
                </div>
            <div className="form-group mb-4">
                  <label>Image</label>
                  <input
                    type="file"
                    name="file"
                    className="form-control"
                    onChange={(e)=>{setCategoryImg(e.target.files[0])}}
                    
                  ></input>
                </div>
                <div className="form-group mb-4">
                  <label>Description</label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    onChange={(e)=>{setCategoryDesc(e.target.value)}}
                    value={categoryDesc}
                  ></input>
                </div>
                {/* <div className="form-group mb-4">
                  <label>Status</label>
                  <input
                    type="checkbox"
                    name="description"
                    className="form-control"
                  ></input>
                </div> */}
               
                <button type="submit" className="submitbtn" onClick={addCategory}>Submit</button>
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

export default CategoryDrawer;
