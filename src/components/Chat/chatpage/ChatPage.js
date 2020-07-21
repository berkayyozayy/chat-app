import React, {useEffect} from "react";
import "./ChatPageModule.css";
import ReactDOM from 'react-dom';

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
  const coachIds = ['K1','K2','K3','K4'];
  const chats = message.map((obj) => {
    if (coachIds.includes(obj.user['_id'])) {
      return <OutGoingChat message={obj["text"]} />;
    } else {
      return <ReceivedChat message={obj["text"]} />;
    }
  });
  return <div className="chat-page">{message.length > 0 && chats}</div>;
}
export default ChatPage;
