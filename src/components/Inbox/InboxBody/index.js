import React from "react";
import { InboxBodyContainer } from "./styled";
import User from "../img/user-profile-image.jpg";


const InboxBody = ({ data, onLastMessagePressed }) => {
  // console.log("data >>>>>>", data);
  console.warn(data)
  return (
    <InboxBodyContainer>
      <div className="main-header">
        <p className="text">Gelen Mesajlar</p>
        <div className="message-infos">8 Kisiden 10 Mesaj</div>
      </div>

      <div className="messages">
        {data.map((obj, index) => {
            let hours = '', minutes = '', date = '';
            if(obj.createdAt){
              let dateObj = new Date(obj.createdAt);
              hours = dateObj.getHours();
              hours = hours < 10 ? '0'+hours : hours;
              minutes = dateObj.getMinutes();
              minutes = minutes < 10 ? '0'+minutes : minutes;
              date = hours+':'+minutes;
            }

            return (
              <div className="inbox-message" key={index} onClick={() => onLastMessagePressed(obj.path)}>
                <div className="user-image">
                  <img src={User} alt="user-image" />
                </div>
                <div className="user-name">
                  <p>{""}</p>
                </div>
                <div className="inbox-body-message">
                  <p>{obj.lastMessage}</p>
                </div>
                <div className="time">
                <p>{' '+ date}</p>
                </div>
              </div>
            );
          })}
      </div>
    </InboxBodyContainer>
  );
};

export default InboxBody;
