import React from "react";
import send from "../Assets/SENDsvg.png";

const Inputbar = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="input-bar">
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <button className="send-button" onClick={(e) => sendMessage(e)}>
        <img src={send} alt="send" />
      </button>
    </form>
  );
};

export default Inputbar;
