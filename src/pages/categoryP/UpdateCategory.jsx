import { React, useState, useEffect } from "react";
import "./UpdateCategory.css";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import config from "../../config/config";
function UpdateCategory() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImg, setCategoryImg] = useState("");
  const [categoryDesc, setCategoryDesc] = useState("");
  const [categoryNameError, setCategoryNameError]=useState('');
  const [categoryImgError, setCategoryImgError]=useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const onBeforeUpload=(image)=> {
    // get the file size in bytes
    const sizeInBytes = image.size;
    alert("File size is: " + sizeInBytes);
    return sizeInBytes;
    // get the file size in standard format
   
}
  useEffect(() => {
    // fetch(`${config.apiURL}/category/:${id}`,

    //   { method: "GET" ,
    //   headers: {
    //     "Content-Type": "application/json",
    //   }   }   
    //   )
    //   .then((res) => {res.json()
    //   console.log(res);})
    //   .then((data) => {
    //     console.log(data);
    //     // setCategoryName(data.categoryName);
    //     // setCategoryImg(data.categoryImg);
    //     // setCategoryDesc(data.categoryDesc);
    //   });

  }, []);


  const updateCategory = async () => {
    if(categoryName!=='' && categoryImg!='' ){
      const Imagesize=onBeforeUpload(categoryImg);
      console.log("line 42"+ Imagesize);
    if(Imagesize<1000000){

      setCategoryImgError('');
    const data = { categoryName, categoryImg, categoryDesc };
    console.log(JSON.stringify({ categoryName, categoryImg, categoryDesc }));
    var formData = new FormData();
    console.log(categoryImg);
      formData.append('categoryName',categoryName);
      formData.append('categoryImg',categoryImg);
      formData.append('categoryDesc',categoryDesc);
     console.log(formData.entries[0]);
    console.log(id);
    let result = await fetch(
      config.apiURL+"/categories/category/" + id,
      {
        mode:'no-cors',
        method: "post",
        body: formData,
        headers: {
          "Content-Type": "application/json",
        },
      }
     
    );
  
    console.log("result" + result);
    // console.log("after result");
    // console.warn(result);
      navigate('/category');}
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
      }
      

  };
  return (
    <div>
      <div className="container-fluid px-4">
        <div className="body_wrapper">
          <div className="card mt-4">
            <div className="card-header">
              <h4 className="display-4 heading" style={{ textAlign: "center" }}>
                Update Category
              </h4>
            </div>
            <div
              className="card-body"
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              <div className="form-group mb-4">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={(e) => {
                    setCategoryName(e.target.value);
                    setCategoryNameError('')
                  }}
                  value={categoryName}
                ></input>
                  {categoryNameError!=='' ? <span style={{color:'red', fontSize:'8px'}}>{categoryNameError}</span>:null}

              </div>
              <div className="form-group mb-4">
                <label>Image</label>
                <input
                  type="file"
                  name="file"
                  className="form-control"
                  onChange={(e) => {
                    setCategoryImg(e.target.files[0]);
                    setCategoryImgError('')
                  }}
                ></input>
             {categoryImgError!=="" ? <span style={{color:'red', fontSize:'8px'}}>{categoryImgError}</span>:null}

              </div>
              <div className="form-group mb-4">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  className="form-control input"
                  onChange={(e) => {
                    setCategoryDesc(e.target.value);
                  }}
                  value={categoryDesc}
                ></input>
              </div>
              <button className="submit_btn" onClick={updateCategory}>
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
