import React from "react";
import Piece from "./Piece";
import "./UnplayedPieces.css";

const UnplayedPieces = ({ pieces, onSelectPiece, selectedPiece }) => {
  return (
    <div className="pieces-tray">
      {Object.entries(pieces).map(([id, piece]) => (
        <div
          key={id}
          className={`piece-slot ${selectedPiece === id ? "selected" : ""}`}
          onClick={() => onSelectPiece(id)}
        >
          {piece ? <Piece {...piece} /> : null} {/* Keep slot even if empty */}
        </div>
      ))}
    </div>
  );
};

export default UnplayedPieces;
