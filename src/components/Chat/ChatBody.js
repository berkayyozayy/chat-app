import React, {useEffect, useState} from "react";
import "./ChatBodyModule.css";
import Header from "./header/Header";
import ChatPage from "./chatpage/ChatPage";
import Footer from "./footer/Footer";
import Divider from "./divider/Divider";
import fire from "../../db/app";
import firebase from "firebase";

import {firebaseFunctions} from '../../utils'

function ChatBody({ history }) {
  
  const [path] = useState(history.location.state.path);
  const [coachId] = useState(history.location.state.coachId);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    firebase.database().ref(path).limitToLast(50).on('value', messages => setChatMessages(messages));
  }, [])

  function setChatMessages(messages) {
    let newMessages = [];
    messages.forEach(message => {
        newMessages.push(message.val())
    });
    // newMessages.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1);
    setMessages(newMessages);
  }

  const handleChange = (e) => setInput(e.target.value)

  const sendMessage = (event) => {
    if (input.trim().length === 0) {
      return;
    }
    let messagesData = {
      _id: firebaseFunctions.generateRandomID(),
      user: { _id: coachId},
      text: input.trim(),
      createdAt: firebaseFunctions.getServerTime(),
    };
    fire
      .database()
      .ref(path)
      .push(messagesData)
      .then((res) => {})
      .catch((error) => {
        //error callback
        console.warn("error ", error);
      });
    event.preventDefault();
  };

  const keyPressHandler = (e) => {
    if (e.keyCode === 13) {
      sendMessage();
    }
  };
  
  return (
    <div className="chat-container">
      <Header path={path} />
      <Divider />
      <ChatPage message={messages} />
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
