import React from "react";
import "./FooterModule.css";

function Footer({ input, handleChange, handleSubmit, keyPressHandler }) {

  return (
    <div className="footer">
      <div className="message">
          <input
            onKeyDown={keyPressHandler}
            type="text"
            name="input"
            value={input}
            onChange={handleChange}
            placeholder="Mesajınızı Buraya Yazınız..."
            className="input-textarea"
          ></input>
      </div>
      <div className="send-button">
        <img
          src={require("../icons/send-button.svg")}
          alt="send-button"
          onClick={handleSubmit}
        ></img>
      </div>
    </div>
  );
}
export default Footer;
