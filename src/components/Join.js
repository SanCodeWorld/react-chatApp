import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <form className="form" name="joinRoom" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="enter name..."
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="enter room..."
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      />

      <Link
        onClick={(e) => {
          return !name || !room ? e.preventDefault() : null;
        }}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button tabIndex={0}>JOIN</button>
      </Link>
    </form>
  );
};

export default Join;
