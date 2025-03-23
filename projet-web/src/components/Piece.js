import React from 'react';
import '../App.css';

/* Gestion de l'affichage des pièces en fonction de leurs caractéristiques */
const Piece = ({ color, shape, height, hollow }) => {
  let iconClass = "";
  if (shape === "carrée" && hollow === "pleine") {
    iconClass = "fas fa-square";
  } else if (shape === "carrée" && hollow === "creuse") {
    iconClass = "far fa-square";
  } else if (shape === "ronde" && hollow === "pleine") {
    iconClass = "fas fa-circle";
  } else {
    iconClass = "far fa-circle";
  }

  return (
    <div
      className={`piece ${color} ${shape} ${height} ${hollow}`}
      title={`Pièce: ${color}, ${shape}, ${height}, ${hollow}`}
    >
      <i className={iconClass} />
    </div>
  );
};

export default Piece;