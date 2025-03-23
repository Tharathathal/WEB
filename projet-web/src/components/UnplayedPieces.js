import React from "react";
import Piece from "./Piece";
import "../App.css";

/* Affichage des pièces pas encore jouées (hors plateau) et gestion de la sélection */
const UnplayedPieces = ({ pieces, onSelectPiece, selectedPiece }) => {
  return (
    <div className="unplayed-pieces">
      {Object.entries(pieces).map(([id, piece]) => (
        <div
          key={id}
          className={`piece-slot ${selectedPiece === id ? "selected" : ""}`}
          onClick={() => onSelectPiece(id)}
        >
          {piece ? <Piece {...piece} /> : null} {/* Garde les emplacements vides */}
        </div>
      ))}
    </div>
  );
};

export default UnplayedPieces;
