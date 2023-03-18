import React from "react";
import "./style.css";

function Body(props) {
  return <body className="wrapper">{props.children}</body>;
}

export default Body;
