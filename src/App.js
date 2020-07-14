import React, { useState, useEffect } from "react";
import "./App.css";
import fire from "./db/app";
import firebase from "firebase";
import ChatBody from "./components/Chat/ChatBody";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Inbox from "./components/Inbox/index";
import Login from './components/Login/Login';

function App() {
  let path = "Messages";
  let chatRef = "Messages/200-K3";
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const messagesRef = fire
      .database()
      .ref(path)
      .on("value", (snapshot) => {
        const fetchedData = [];
        const lastMessages = [];
        const fetchedMessages = [];

        snapshot.forEach((messageData) => {
          const messagesArr = [];
          messageData.forEach((message) => {
            messagesArr.push(message.val());
          });
          fetchedData.push(messagesArr);
        });
        fetchedData.map((messages) => {
          lastMessages.push(messages.pop());
        });
        lastMessages.sort((x, y) => (x.createdAt > y.createdAt ? 1 : -1));
        setArr(lastMessages);

        const chatBodyRef = fire
          .database()
          .ref(chatRef)
          .on("value", (snapshot) => {
            let infos = snapshot.val();
            for (const [key, value] of Object.entries(infos)) {
              const text = value.text;
              const userId = value.user["_id"];
              let obj = {};
              obj["userId"] = userId;
              obj["text"] = text;
              fetchedMessages.push(obj);
            }
          });
        setMessages(fetchedMessages);
      });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    let inputText = e.target.value;
    setInput(inputText);
  };

  const sendMessage = (event) => {
    if (input.trim().length === 0) {
      return;
    }
    console.warn('s')
    let messagesData = {
      _id: generateRandomID(),
      user: { _id: "K3" },
      text: input.trim(),
      createdAt: getServerTime(),
    };
    fire
      .database()
<<<<<<< HEAD
      .ref(chatRef)
      .push(messagesData)
      .then((res) => {})
=======
      // HATA BURADAYMIŞ
      .ref(chatRef)
      .push(messagesData)
      .then((res) => console.warn(res))
>>>>>>> fdc9d345fa450504eb796040bbef50f5b6cff12a
      .catch((error) => {
        //error callback
        console.warn("error ", error);
      });
    event.preventDefault();
  };
  const getServerTime = () => {
    return firebase.database.ServerValue.TIMESTAMP;
  };
  function generateRandomID(length = 8) {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const keyPressHandler = (e) => {
    if (e.keyCode === 13) {
      sendMessage();
    }
  };
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/inbox" component={() => <Inbox data={arr} />} />
          <Route
            exact
            path="/chat"
            component={() => (
              <ChatBody
                message={messages}
                handleChange={handleChange}
                sendMessage={sendMessage}
                keyPressHandler={keyPressHandler}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
