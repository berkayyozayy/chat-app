import React from "react";
import { InboxBodyContainer } from "./styled";
import User from "../img/user-profile-image.jpg";


const InboxBody = ({ data }) => {
  // console.log("data >>>>>>", data);

  return (
    <InboxBodyContainer>
      <div className="main-header">
        <p className="text">Gelen Mesajlar</p>
        <div className="message-infos">8 Kisiden 10 Mesaj</div>
      </div>

      <div className="messages">
        {data &&
          data.map((obj, index) => {
            return (
              <div className="inbox-message">
                <div className="user-image">
                  <img src={User} alt="user-image" />
                </div>
                <div className="user-name">
                  <p>{obj.user["_id"]}</p>
                </div>
                <div className="inbox-body-message">
                  <p>{obj.text}</p>
                </div>
                <div className="time">
                  <p>3 Dk Once</p>
                </div>
              </div>
            );
          })}
      </div>
    </InboxBodyContainer>
  );
};

export default InboxBody;
