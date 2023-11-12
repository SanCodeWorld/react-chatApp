import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import Namebar from "./Namebar";
import Inputbar from "./Inputbar";
import Messagebar from "./Messagebar";

let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "https://express-chatapp.onrender.com/";

  var location1 = window.location.search;

  useEffect(() => {
    const { name, room } = queryString.parse(location1);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    console.log(name, room);

    socket.emit("join", { name, room });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [location1, ENDPOINT]);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages([...messages, msg]);
    });
  }, [messages]);

  // sendMessage function
  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };

  return (
    <div className="chatRoom">
      <Namebar name={name} room={room} />
      <Messagebar messages={messages} name={name} />
      <Inputbar
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default Chat;
