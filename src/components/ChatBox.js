import React from "react";
import { useSelector } from "react-redux";
import Message from "./Message";
import SendMessage from "./SendMessage";

function ChatBox() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="chat-back">
      <div className="chatbox">
        <div className="users-info">
          <span>Email: {user.email}</span>
        </div>
        <Message />
        <SendMessage />
      </div>
    </div>
  );
}

export default ChatBox;
