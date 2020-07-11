import React from "react";
import "./HeaderModule.css";

function Header() {
  return (
    <div className="header">
      <div className="left">
        <img src={require("../img/img.png")} alt="profile" />
      </div>
      <div className="right">
        <div className="username">Fatma Tutkan</div>
        <div className="user-location">Istanbul,Bakirkoy</div>
      </div>
    </div>
  );
}
export default Header;
