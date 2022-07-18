import React from "react";
import "./search.css";
export default function Search({placeholder}) {
  return (
    <div className="search_contain">
      <input placeholder={placeholder} className="search_input" style={{borderRadius:"7px"}}/>
    </div>
  );
}
