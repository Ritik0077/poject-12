import React from "react";
import Loader from "../../assets/Loading.gif";
import './Loading.css';

function Loading() {
  return (
    <div className="gif-main">
      <img src={Loader} alt="Loading..." />
      <h3>Loading.....</h3>
    </div>
  );
}

export default Loading;
