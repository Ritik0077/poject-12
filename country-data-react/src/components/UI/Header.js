import React from "react";
import image from "../../assets/asia.png";

const Header = () => {
  return (
    <header className="center">
      <img src={image} alt='loading...' style={{ height: "68px", width: "68px" }} />
      <h2>Asian Countries</h2>
    </header>
  );
};

export default Header;
