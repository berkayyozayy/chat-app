import React, { useState } from "react";
import { InboxBodyContainer } from "./styled";
import User from "../img/user-profile-image.jpg";
import { Button } from "reactstrap";
import fakeData from "../../../data/fakeData.json";
import Modal from "react-modal";
import GroupChat from './GroupChat'


const InboxBody = ({ data, onLastMessagePressed }) => {
  const [fakeDataState, setFakeDataState] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setFakeDatas = () => {
    let data = {}
    for (const [key, value] of Object.entries(fakeData)) {
      const fakeDataName = value.name;
      const fakeDataId = value.id;
      let obj = {};
      obj["name"] = fakeDataName;
      obj["checked"] = false;
      data[fakeDataId] = obj
    }
    setFakeDataState(data);
    console.log("Fake Data Array is : ", data);
  };

  return (
    <InboxBodyContainer>
      <div className="main-header">
        <p className="text">Gelen Mesajlar</p>
        <div className="message-infos">8 Kisiden 10 Mesaj</div>
        <div className="start-group-chat">
          <Button
            color="info"
            className="button-group-chat"
            onClick={() => {
              setModalIsOpen(true);
              setFakeDatas(fakeData);
            }}
          >
            Grup Konusmasi Baslat
            <GroupChat data={fakeDataState} />
          </Button>
          <Button
            onClick={() => {
              setModalIsOpen(true);
              setFakeDatas(fakeData);
            }}
           className="one-to-one-button" color="success">Bire-bir Gorusme Baslat</Button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={{
              overlay: {
                position: "absolute",
                width: "400px",
                height: "500px",
              },
              content: {
                position: "absolute",
                border: "1px solid #ccc",
                overflow: "auto",
                padding: "20px",
              },
            }}
          >
            <h4>Kisiler</h4>
            <GroupChat 
             data={fakeDataState} />
          </Modal>
        </div>
      </div>

      <div className="messages">
        {data.map((obj, index) => {
          let hours = "",
            minutes = "",
            date = "";
          if (obj.createdAt) {
            let dateObj = new Date(obj.createdAt);
            hours = dateObj.getHours();
            hours = hours < 10 ? "0" + hours : hours;
            minutes = dateObj.getMinutes();
            minutes = minutes < 10 ? "0" + minutes : minutes;
            date = hours + ":" + minutes;
          }

          return (
            <div
              className="inbox-message"
              key={index}
              onClick={() => onLastMessagePressed(obj.path)}
            >
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
                <p>{" " + date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </InboxBodyContainer>
  );
};

export default InboxBody;
