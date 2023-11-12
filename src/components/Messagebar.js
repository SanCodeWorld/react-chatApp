import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import MessageLine from "./MessageLine";

const Messagebar = ({ messages, name }) => {
  console.log(messages);
  return (
    // <div className="messages-bar">
    <ScrollToBottom className="messages-bar">
      {messages.map((msg, i) => (
        <div key={i}>
          <MessageLine msg={msg} name={name} />
        </div>
      ))}
    </ScrollToBottom>
    // </div>
  );
};

export default Messagebar;
