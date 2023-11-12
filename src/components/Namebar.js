import React from "react";
import { Link } from "react-router-dom";

const Namebar = ({ name, room }) => {
  return (
    <div className="namebar">
      <div className="user">
        <span>{name}</span>
        <span>{room}</span>
      </div>
      <div className="back">
        <Link to="/">back</Link>
      </div>
    </div>
  );
};

export default Namebar;
