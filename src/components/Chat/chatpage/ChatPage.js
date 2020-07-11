import React from "react";
import "./ChatPageModule.css";

const ReceivedChat = ({message}) => {

  return (
    <div className="received-message">
      <p className="received-message-text">{message}</p>
    </div>
  );
};
const OutGoingChat = ({message}) => {
  return (
    <div className="outgoing-message">
      <p className="outgoing-message-text">{message}</p>
    </div>
  );
};

function ChatPage({message}) {
  const chats = message.map((obj) => {
    if (obj["userId"] === "K3") {
      return <OutGoingChat message={obj["text"]} />;
    } else {
      return <ReceivedChat message={obj["text"]} />;
    }
  });
  return <div className="chat-page">{message.length > 0 && chats}</div>;
}
export default ChatPage;
