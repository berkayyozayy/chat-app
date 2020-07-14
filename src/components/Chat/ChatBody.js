import React, {useEffect} from "react";
import "./ChatBodyModule.css";
import Header from "./header/Header";
import ChatPage from "./chatpage/ChatPage";
import Footer from "./footer/Footer";
import Divider from "./divider/Divider";
import fire from "../../db/app";
import firebase from "firebase";

function ChatBody({ message, handleChange, sendMessage, keyPressHandler }) {

  return (
    <div className="chat-container">
      <Header />
      <Divider />
      <ChatPage message={message} />
      <Divider />
      <Footer
        handleChange={handleChange}
        handleSubmit={sendMessage}
        keyPressHandler={keyPressHandler}
      />
    </div>
  );
}

export default ChatBody;
