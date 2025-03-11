import React from 'react';
import './Piece.css';

const Piece = ({ color, shape, height, hollow }) => {
  let iconClass = "";
  if (shape === "square" && hollow === "filled") {
    iconClass = "fas fa-square";
  } else if (shape === "square" && hollow === "hollow") {
    iconClass = "far fa-square";
  } else if (shape === "circle" && hollow === "filled") {
    iconClass = "fas fa-circle";
  } else {
    iconClass = "far fa-circle";
  }

  return (
    <div
      className={`piece ${color} ${shape} ${height} ${hollow}`}
      title={`Piece: ${color}, ${shape}, ${height}, ${hollow}`}
    >
      <i className={iconClass} />
    </div>
  );
};

export default Piece;
