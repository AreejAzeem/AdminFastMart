import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../config/config";
import { Dropdown } from "semantic-ui-react";
import { number } from "react-admin";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { format, parseISO } from "date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { width } from "@mui/system";
import axios from "axios";
import { itCH } from "date-fns/locale";

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

function CreateAdPage({ handleChange, formInputData, handleSubmit }) {
  const [adDescription, setadDescription] = useState("");
  const [adTitle, setadTitle] = useState("");
  const [category, setCategory] = useState("");
  const [adDesc, setadDesc] = useState("");
  const [productPrice, setProductPrice] = useState();
  const [adImg, setadImg] = useState();

  const [values, setValues] = useState(initialFvalues);
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [adTitleError, setadTitleError] = useState("");
  const [adDescriptionError, setadDescriptionError] = useState("");
  const [productPriceError, setProductPriceError] = useState("");
  const [adImgError, setadImgError] = useState("");
  const [adDescError, setadDescError] = useState("");
  const [categoryError, setCategoryError] = useState("");

  const [productDescError, setProductDescError] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");
  const [adType, setAdType] = useState("");
  const [adTypeError, setAdTypeError] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountError, setDiscountError] = useState("");
  const [categoryName, setCategoryName] = useState("");
  var categoryId = "";
  var categoryItems = [];
  // useEffect(() => {
  //  getCategory();
  // }, []);
  const getCategory = async (e) => {
    // console.log("in category");
    // setCategory(e.target.categoryId);
    // console.log(category);
    // let result = await fetch("http://192.168.30.176:4000/categories/category");
    let result = await fetch(config.apiURL + "/categories/category");
    result = await result.json();
    console.log(result);
    setCategories(result["data"]);
    console.log(categories);
  };
  const onBeforeUpload = (image) => {
    // get the file size in bytes
    const sizeInBytes = image.size;
    alert("File size is: " + sizeInBytes);
    return sizeInBytes;
    // get the file size in standard format
  };
  const changeCategory = async (e) => {
    console.log("in category");

    console.log(e.target.value);
    setCategory(e.target.value);
    console.log(category);
    setCategoryError("");
  };
  const sendNotificationAd = async (data) => {
    await axios({
      method: "post",
      url: config.apiURL + "/notifications/forAds",
      data: {
        advertismentTitle: data.advertismentTitle,
        advertismentDesc: data.advertismentDesc,
        advertismentType: data.advertismentType,
        createdDateTime: data.createdDateTime,
        advertismentAttachment: data.advertismentAttachment,
        fcm_token:
          "csq6vUc8QMms8Zi6DbIpbm:APA91bEO9zR_nfVnN3FUOk4ZVaFrPYqhiWgXNN29VC0-02x9mXULtZ7NnhwTb0tAUEAy6qwEkejHEfh88Lmp4f3Z2Az49qCFat3LNEVT9FbVyDcC-zf2qPC1htK9gdGyu4-qY0ESFsD0",
      },
    }).then((res) => {
      console.log(res);
    });
  };
  const sendNotificationOffer = async (data) => {
    console.log(data);
    console.log(categoryName);
    await axios({
      method: "post",
      url: config.apiURL + "/notifications/forOffers",
      data: {
        advertismentTitle: data.advertismentTitle,
        advertismentDesc: data.advertismentDesc,
        advertismentType: data.advertismentType,
        createdDateTime: data.createdDateTime,
        startDate: data.startDate,
        endDate: data.endDate,
        discount: data.discount,
        categoryName: categoryName,
        fcm_token:
          "csq6vUc8QMms8Zi6DbIpbm:APA91bEO9zR_nfVnN3FUOk4ZVaFrPYqhiWgXNN29VC0-02x9mXULtZ7NnhwTb0tAUEAy6qwEkejHEfh88Lmp4f3Z2Az49qCFat3LNEVT9FbVyDcC-zf2qPC1htK9gdGyu4-qY0ESFsD0",
      },
    }).then((res) => {
      console.log(res);
    });
  };

  // const addAdvertisement = async () => {
  //   // categoryItems=getCategory();
  //   // category.map((item, index) => {
  //   //   return (
  //   //     console.log("hbjhjg")
  //   //   );
  //   if(adType=="1"){
  //   if (
  //     adTitle !== "" &&
  //     adDescription !== "" &&
  //     category !== "" &&
  //     startDate !== undefined &&
  //     endDate !== undefined &&
  //     adType!==""&&
  //     discount!==""
  //   ) {
  //     setadTitleError("");
  //     setadDescriptionError("");
  //    setAdTypeError("");
  //     setCategoryError("");
  //     setStartDateError("");
  //     setEndDateError("");
  //     setDiscountError("");

  //   //   const formData = new FormData();
  //   //   formData.append("title", adTitle);
  //   //   formData.append("description", adDescription);
  //   //  formData.append("type", adType);
  //   //   formData.append("category", category);
  //   //  formData.append("startDate", startDate);
  //   //  formData.append("endDate", endDate);
  //   console.log(startDate);
  // //  console.log(startDate.toString());
  //   //  var dateList = startDate.toString().split(" ");
  //  //   console.log(dateList);
  //  var newStartDate = startDate.toLocaleDateString();
  //  var newEndDate = endDate.toLocaleDateString();
  //  console.log(newStartDate);
  //  console.log(newEndDate);
  //     let item = {
  //       title: adTitle,
  //       description: adDescription,
  //       type: "offer",
  //       categoryId: category,
  //       startDate: newStartDate,
  //       endDate: newEndDate,
  //     };

  //     console.log(item);
  //     await axios({
  //       method: "post",
  //       url: config.apiURL + "/advertisments/advertisment",
  //       data: item,
  //       })
  //       .then((response) => {
  //         console.log(response);
  //         if (response.status == 200) {
  //           alert("Advertisement added successfully");
  //           navigate("/marketing");
  //         }
  //         else{
  //           alert("Advertisement not added");
  //         }

  //       })
  //     // let result = await fetch(config.apiURL + "/products/product", {
  //     //   mode: "no-cors",
  //     //   method: "post",
  //     //   body: formData,
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //   },
  //     // });
  //     // console.log(result);
  //     //setProduct(result['data']);

  //     alert("data has been saved");

  //     //  result=await result.json();
  //     //  console.log("after result");
  //     //  console.warn(result);

  //     // else{
  //     //   setadImgError("Image size should be less than 1MB");
  //   }

  //   else {
  //     console.log(discountError);
  //     if (adTitle == "") {
  //       setadTitleError("Title is required");
  //     }
  //     if (adDescription == "") {
  //       setadDescriptionError("Description is required");
  //     }

  //     if (category == "" || category == undefined) {
  //       setCategoryError("Category is required");
  //     }
  //     if (startDate == undefined || startDate == "") {
  //       setStartDateError("Start Date is required");
  //     }
  //     if (endDate == undefined || endDate == "") {
  //       setEndDateError("End Date is required");
  //     }
  //     if(adType==""){
  //       setAdTypeError("*Ad Type is required");
  //     }
  //     if(discount==""){
  //       console.log(discount);
  //       setDiscountError("*Discount is required");
  //     }
  //   }
  // }
  // else if(adType=="2"){
  //   if (
  //     adTitle !== "" &&
  //     adDescription !== "" &&
  //     adType !== "" &&
  //     adImg !== null
  //   ) {
  //     setadTitleError("");
  //     setadDescriptionError("");

  //     setadImgError("");

  //     // const formData = new FormData();
  //     // formData.append("title", adTitle);
  //     // formData.append("description", adDescription);
  //     // formData.append("type", adType);

  //     // formData.append("image", adImg);

  //     // console.log(formData);
  //     let item = {
  //       title: adTitle,
  //       description: adDescription,
  //       type: "ad",
  //       image: adImg,
  //     };
  //     console.log(item);
  //     // let result = await fetch(config.apiURL + "/products/product", {
  //     //   mode: "no-cors",
  //     //   method: "post",
  //     //   body: formData,
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //   },
  //     // });
  //     // console.log(result);
  //     //setProduct(result['data']);

  //     alert("data has been saved");

  //     //  result=await result.json();
  //     //  console.log("after result");
  //     //  console.warn(result);

  //     // else{
  //     //   setadImgError("Image size should be less than 1MB");
  //   }

  //   else {
  //     if (adTitle == "") {
  //       setadTitleError("Title is required");
  //     }
  //     if (adDescription == "") {
  //       setadDescriptionError("Description is required");
  //     }

  //     if (adImg == null) {
  //       setadImgError("Image is required");
  //     }

  //     if(adType==""){
  //       setAdTypeError("*Ad Type is required");
  //     }
  //   }
  // }
  // ;}
  const addAdvertisement = async () => {
    if (adType != "") {
      if (adTitle !== "" && adDescription !== "" && adType !== "") {
        setadTitleError("");
        setadDescriptionError("");
        setCategoryError("");

        setadImgError("");
        setStartDateError("");
        setEndDateError("");
        setAdTypeError("");
        setDiscountError("");
        if (adType == "1") {
          var newStartDate = startDate.toLocaleDateString();
          var newEndDate = endDate.toLocaleDateString();
          console.log(newStartDate);
          console.log(newEndDate);
          var categoryId = category.split(":")[0];
          var categoryName = category.split(":")[1];
          setCategoryName(categoryName);

          let item = {
            title: adTitle,
            description: adDescription,
            type: "offer",
            categoryId: categoryId,
            startDate: newStartDate,
            endDate: newEndDate,
            discount: discount,
          };
          console.log(item);
          await axios({
            method: "post",
            url: config.apiURL + "/advertisments/advertisment",
            data: item,
          }).then((response) => {
            console.log(response);
            if (response.status == 200) {
              alert("Advertisement added successfully");
              sendNotificationOffer(response.data.data);
              navigate("/marketing");
            } else {
              alert("Advertisement not added");
            }
          });
        } else if (adType == "2") {
          console.log("in else if of ad");
          console.log(adImg);
          // let item = {
          //   title: adTitle,
          //   description: adDescription,
          //   type: "ad",
          //   advertismentImg: adImg,
          // };
          // console.log(item);
          if (adImg.size < 1000000) {
            var formData = new FormData();
            // console.log(categoryImg);
            formData.append("title", adTitle);
            formData.append("description", adDescription);
            formData.append("type", "ad");
            formData.append("advertismentImg", adImg);
            console.log(formData.get("advertismentImg"));

            // await fetch(
            //   config.apiURL+"/advertisments/advertisment",
            //   {
            //    // mode:'no-cors',
            //     method: "post",
            //     body: formData,
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //   }

            // ).then((response) => {
            //     console.log(response);
            //     if (response.status == 200) {
            //       alert("Advertisement added successfully");
            //       navigate("/marketing");
            //     } else {
            //       alert("Advertisement not added");
            //     }
            //   });

            await axios({
              method: "post",
              url: config.apiURL + "/advertisments/advertisment",
              data: formData,
            }).then((response) => {
              console.log(response.data.data);
              if (response.status == 200) {
                alert("Advertisement added successfully");
                sendNotificationAd(response.data.data);
                navigate("/marketing");
              } else {
                alert("Advertisement not added");
              }
            });
          } else {
            console.log("in else of ad");
            setadImgError("Image size should be less than 1MB");
          }
        }
      } else {
        if (adType == "1") {
          if (adTitle == "") {
            setadTitleError("Title is required");
          }
          if (adDescription == "") {
            setadDescriptionError("Description is required");
          }
          if (category == "" || category == undefined) {
            setCategoryError("Category is required");
          }
          if (startDate == undefined || startDate == "") {
            setStartDateError("Start Date is required");
          }
          if (endDate == undefined || endDate == "") {
            setEndDateError("End Date is required");
          }
          if (adType == "") {
            setAdTypeError("*Ad Type is required");
          }
          if (discount == "") {
            console.log(discount);
            setDiscountError("*Discount is required");
          }
        } else if (adType == "2") {
          if (adTitle == "") {
            setadTitleError("Title is required");
          }
          if (adDescription == "") {
            setadDescriptionError("Description is required");
          }

          if (adImg == null) {
            setadImgError("Image is required");
          }

          if (adType == "") {
            setAdTypeError("*Ad Type is required");
          }
        }
      }
    } else {
      setAdTypeError("*Ad Type is required");
      if (adTitle == "") {
        setadTitleError("Title is required");
      }
      if (adDescription == "") {
        setadDescriptionError("Description is required");
      }
      if (category == "" || category == undefined) {
        setCategoryError("Category is required");
      }
      if (startDate == undefined || startDate == "") {
        setStartDateError("Start Date is required");
      }
      if (endDate == undefined || endDate == "") {
        setEndDateError("End Date is required");
      }

      if (discount == "") {
        console.log(discount);
        setDiscountError("*Discount is required");
      }
    }
  };

  const onSelectStartDate = (date) => {
    setStartDate(date);
    setStartDateError("");
  };
  const onSelectEndDate = (date) => {
    setEndDate(date);
    setEndDateError("");
  };

  return (
    <>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          className="container-fluid px-4"
          style={{
            width: "60%",
          }}
        >
          <div className="card mt-4">
            <div className="card-header">
              <h4 className="heading">Create Advertisement</h4>
            </div>
            <div className="card-body">
              <div className="form-group mb-3">
                <label>Advertisement Title</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={(e) => {
                    setadTitle(e.target.value);
                    setadTitleError("");
                  }}
                  value={adTitle}
                ></input>
                {adTitleError && (
                  <div
                    className="error"
                    style={{ color: "red", fontSize: "8px" }}
                  >
                    {adTitleError}
                  </div>
                )}
              </div>
              <div className="form-group mb-3">
                <label>Description</label>
                <input
                  type="text"
                  name="sku"
                  className="form-control"
                  onChange={(e) => {
                    setadDescription(e.target.value);
                    setadDescriptionError("");
                  }}
                  value={adDescription}
                ></input>
                {adDescriptionError && (
                  <div
                    className="error"
                    style={{ color: "red", fontSize: "8px" }}
                  >
                    {adDescriptionError}
                  </div>
                )}
              </div>
              {/* radio button */}
              <div
                className="form-group mb-3"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  border: "0.8px solid #e0e0e0",
                  borderRadius: "5px",
                  padding: "8px",
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="radio"
                    value="1"
                    onChange={(e) => {
                      setAdType(e.target.value);
                      setAdTypeError("");
                    }}
                  />
                  <label
                    style={{
                      marginLeft: "10px",
                      color: adType === "1" ? "var(--orangestandard)" : "black",
                    }}
                  >
                    Offer
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="radio"
                    value="2"
                    color="red"
                    onChange={(e) => {
                      setAdType(e.target.value);
                      setAdTypeError("");
                    }}
                  />
                  <label
                    style={{
                      marginLeft: "10px",
                      color: adType === "2" ? "var(--orangestandard)" : "black",
                    }}
                  >
                    Ad
                  </label>
                </div>
              </div>
              {adTypeError && (
                <div
                  style={{
                    color: "red",
                    fontSize: "8px",
                    marginLeft: "270px",
                    marginTop: "-9px",
                    marginBottom: "10px",
                  }}
                >
                  {adTypeError}
                </div>
              )}
              {adType === "2" ? (
                <div className="form-group mb-4">
                  <label>Image</label>
                  <input
                    type="file"
                    name="file"
                    className="form-control"
                    onChange={(e) => {
                      const ImageSize = onBeforeUpload(e.target.files[0]);

                      console.log("line 42" + ImageSize);

                      if (ImageSize < 1000000) {
                        setadImg(e.target.files[0]);
                        setadImgError("");
                      } else {
                        console.log(adImg);
                        setadImg(e.target.files[0]);
                        setadImgError("Image size should be less than 1MB");
                      }
                    }}
                  ></input>
                  {adImgError && (
                    <div
                      className="error"
                      style={{ color: "red", fontSize: "8px" }}
                    >
                      {adImgError}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div
                    className="form-group mb-4"
                    style={{
                      display: "flex",
                      alignItems: "space-between",
                      justifyItems: "space-between",
                      marginLeft: "30px",
                    }}
                  >
                    <div>
                      <label>Start Date</label>
                      <DatePicker
                        placeholderText="Enter Start Date"
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        onChange={(date) => {
                          if (date > Date.now()) {
                            //
                            // date=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
                            //date=  date.toLocaleDateString();

                            console.log("date is greater than today");
                            console.log(date);
                            //  var  date1=date.toString();
                            console.log(date);
                            setStartDateError("");
                            setStartDate(date);

                            console.log("hiiiiiiii");
                          } else {
                            console.log("date is less than today");
                            setStartDateError(
                              "Date should be greater than today"
                            );
                          }
                        }}
                      />
                      {startDateError && (
                        <div
                          className="error"
                          style={{ color: "red", fontSize: "8px" }}
                        >
                          {startDateError}
                        </div>
                      )}
                    </div>
                    {/* <div>
                      <label>Start Date</label>
                      <LocalizationProvider
                       dateAdapter={AdapterDayjs}
                      > 
                        <DesktopDatePicker
                        style={{width:"100%",
                        height:"0px",}}
                        color="green"
                         label="Date desktop"
                         inputFormat="MM/DD/YYYY"
                         value={startDate}
                        
                         renderInput={(params) => <TextField {...params} />}
                          onChange={(newValue) => {
                            if (newValue > Date.now()) {
                              console.log("date is greater than today"+newValue);
                              setStartDateError("");

                              setStartDate(newValue);
                            } else {
                              console.log("date is less than today");
                              setStartDateError(
                                "Date should be greater than today"
                              );
                            }
                          }}
                         />

                      </LocalizationProvider>
                      </div>
                      {startDateError !== "" ? (
                        <div
                          className="error"
                          style={{ color: "red", fontSize: "8px" }}
                        >
                          {startDateError}
                        </div>
                      ) : null
                      } */}
                    <div
                      style={{
                        marginLeft: "10px",
                      }}
                    >
                      <label>End Date</label>
                      <DatePicker
                        placeholderText="Enter End Date"
                        dateFormat="dd/MM/yyyy"
                        // onSelect={onSelectEndDate}
                        selected={endDate}
                        onChange={(date) => {
                          if (date > startDate) {
                            console.log("date is greater than start");
                            // date=date.toLocaleDateString();
                            setEndDate(date);
                            setEndDateError("");
                            console.log(endDate);
                          } else {
                            console.log("date is less than today");
                            setEndDateError(
                              "Date should be greater than start date"
                            );
                          }
                        }}
                      />
                      {endDateError != "" ? (
                        <div
                          className="error"
                          style={{ color: "red", fontSize: "8px" }}
                        >
                          {endDateError}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <label>Select Category</label>
                    <select
                      name="category_id"
                      className="form-control"
                      onChange={changeCategory}
                      onClick={getCategory}
                      value={category}
                      multiple={false}
                    >
                      {categories.map((e, key) => {
                        return (
                          <option
                            key={key}
                            value={e.categoryId + ":" + e.categoryName}
                          >
                            {e.categoryName}
                          </option>
                        );
                      })}
                    </select>
                    {categoryError !== "" ? (
                      <div
                        className="error"
                        style={{ color: "red", fontSize: "8px" }}
                      >
                        {categoryError}
                      </div>
                    ) : null}
                  </div>
                  <div className="form-group mb-3">
                    <label>Discount</label>
                    <input
                      type="number"
                      name="discount"
                      value={discount}
                      className="form-control"
                      onChange={(e) => {
                        setDiscount(e.target.value);
                        setDiscountError("");
                      }}
                    ></input>
                    {discountError && (
                      <div
                        className="error"
                        style={{ color: "red", fontSize: "8px" }}
                      >
                        {discountError}
                      </div>
                    )}
                  </div>
                </div>
              )}
              {/* {///////fjfjjfjfjfj} */}

              <button
                type="submit"
                className="submitbtn"
                onClick={addAdvertisement}
              >
                Submit
              </button>
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
                name="adTitle"
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
      </div>
    </>
  );
}

export default CreateAdPage;
