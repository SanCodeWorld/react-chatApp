import React from "react";

const MessageLine = ({ msg, name }) => {
  let byCurrentUser = false;

  let trimmedName = name.trim().toLowerCase();

  if (trimmedName === msg.user) {
    byCurrentUser = true;
  }
  return (
    <>
      {byCurrentUser ? (
        <div className="right-msg">
          <p>{msg.user}</p>
          <div>{msg.text}</div>
        </div>
      ) : (
        <div className="left-msg">
          <div>{msg.text}</div>
          <p>{msg.user}</p>
        </div>
      )}
    </>
  );
};

export default MessageLine;
