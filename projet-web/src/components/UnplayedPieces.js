import React from "react";
import Piece from "./Piece";
import { initialPieces } from "./GameConfig";
import "../App.css";

/* Affichage des pièces pas encore jouées (hors plateau) et gestion de la sélection */
const UnplayedPieces = ({ pieces, onSelectPiece, selectedPiece }) => {
  const allPieceIds = Object.keys(initialPieces);

  return (
    <div className="unplayed-pieces">
      {allPieceIds.map((id) => {
        const piece = pieces[id]; // Map les pièces jouées et emplacements vides
        return (
          <div
            key={id}
            className={`piece-slot ${selectedPiece === id ? "selected" : ""}`}
            onClick={() => piece && onSelectPiece(id)} // Sélection seulement si pièce disponible
          >
            {piece ? <Piece {...piece} /> : null}
          </div>
        );
      })}
    </div>
  );
};

export default UnplayedPieces;