import React from "react";
import "./search.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
export default function Search({setSearchInput, placeholder}) {
  const [inputText, setInputText] = useState("");
 
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    console.log("in line 8 "+lowerCase)
    setInputText(lowerCase);
    setSearchInput(lowerCase);
  };
  return (
    <div className="search_contain">
      {/* <input placeholder={placeholder} className="search_input" style={{borderRadius:"7px"}}/> */}
      <TextField
      className="search_input"
          id="outlined-basic"
          variant="outlined"
          fullWidth
       
          label={placeholder}
          onChange={inputHandler}
        />
    </div>
  );
}
