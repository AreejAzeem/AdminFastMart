import React, { useState } from "react";
import "./categoryDrawer.css";
import config from "../../../../config/config";
import { UploadFile } from "@mui/icons-material";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

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
  const[categoryImg,setCategoryImg]=useState();
  const[categoryDesc,setCategoryDesc]=useState('');
  const [categoryNameError, setCategoryNameError]=useState('');
  const [categoryImgError, setCategoryImgError]=useState('');
  const[categoryDescError, setCategoryDescError]=useState('');
  const navigate=useNavigate();
  const onBeforeUpload=(image)=> {
    // get the file size in bytes
    const sizeInBytes = image.size;
    alert("File size is: " + sizeInBytes);
    return sizeInBytes;
    // get the file size in standard format
   
}
  const addCategory=async(event)=>{
    event.preventDefault();
    console.log(categoryDescError);
    if(categoryName!=='' && categoryImg!='' && categoryDesc!=''){
     
      setCategoryDescError('');
      setCategoryImgError('');
      setCategoryNameError('');
      console.log(categoryDescError)
      const Imagesize=onBeforeUpload(categoryImg);
      console.log("line 42"+ Imagesize);
    if(Imagesize<1000000){
      setCategoryImgError('');
    console.log(categoryName,categoryImg,categoryDesc);
    // const adminId=JSON.parse(localStorage.getItem("admin"))._id;
     console.log(JSON.stringify({categoryName,categoryImg,categoryDesc}))
    
    const formData=new FormData();
    
    formData.append('categoryName',categoryName);
    console.log(formData.get('categoryName'));
    formData.append('categoryImg',categoryImg);
    console.log(formData.get('categoryImg'));
    formData.append('categoryDesc',categoryDesc);
    const catObj={"categoryName":categoryName,
    "categoryImg":categoryImg,
    "categoryDesc":categoryDesc};
    console.log(catObj);
 
  // let result= await axios.post(`${config.apiURL}/categories/category`,
  //   catObj,
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }

  // )
  //   .then((res)=>{
  //     console.log(res);
  //     if(res.data.status===200){
  //       alert("category added successfully");
  //     }
  //     else{
  //       alert("category not added");
  //     }
  //   })
   
   
    // let result= await fetch(config.apiURL+"/categories/category",{
    //   mode:'no-cors',
    //   method:'post',
    //   body:formData,
    //   headers:{
    //     "Content-Type":"application/json",
    //   },
    // });
    await axios ({
      method: 'post',
      url: config.apiURL+"/categories/category",
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((res)=>{
      console.log(res);
      if(res.status===200){
        alert("category added successfully");
        window.location.reload();
      }
      else{
        alert("category not added");
      }
    })
    .catch((err)=>{
      console.log(err.response.data.message);
      if(err.response.data.message==="category validation failed: categoryName: Category already in Exists."){
        setCategoryNameError("Category already in Exists");

      }
    })

   
  }
  else{
    setCategoryImgError("File size should be less than 1Mb");
  }
  }
  else{
  console.log("please fill all the fields");
    if(!categoryName){
      setCategoryNameError("Please enter category name");

    }
   if(!categoryImg){
    console.log("in category img error");
      setCategoryImgError("Please select category image");
    
    }
    if(!categoryDesc){
      setCategoryDescError("Please enter category description");
    }
  }
  
    
  }
    //  result=await result.json();
    //  console.log("after result");
    //  console.warn(result);
  
  
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
                    onChange={(e)=>{setCategoryName(e.target.value)
                    setCategoryNameError('')}}
                    value={categoryName}
                    
                  ></input>
              {categoryNameError!=='' ? <span style={{color:'red', fontSize:'8px'}}>{categoryNameError}</span>:null}
      {/* {categoryName==='' ? <span style={{color:'red', fontSize:'8px'}}>Correct input required</span>:null} */}
                </div>
            <div className="form-group mb-4">
                  <label>Image</label>
                  <input
                    type="file"
                    name="file"
                    className="form-control"
                    onChange={(e)=>{
                      setCategoryImg(e.target.files[0])

                    setCategoryImgError('')}}
                
                    
                    
                  ></input>
                                   {categoryImgError!=="" ? <span style={{color:'red', fontSize:'8px'}}>{categoryImgError}</span>:null}

                </div>
                <div className="form-group mb-4">
                  <label>Description</label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    onChange={(e)=>{setCategoryDesc(e.target.value)
                    setCategoryDescError('')}}
                    value={categoryDesc}
                  ></input>
                  {categoryDescError !=="" ? <span style={{color:'red', fontSize:'8px'}}>{categoryDescError}</span>:null}

                  
                
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
