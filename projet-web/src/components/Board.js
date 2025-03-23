import React from "react";
import Piece from "./Piece";
import "../App.css";

/* Affichage et gestion du plateau */
const Board = ({ board, onPlacePiece }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((piece, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="board-cell"
            onClick={() => onPlacePiece(rowIndex, colIndex)}
          >
            {piece && <Piece {...piece} />} {/* Affiche les pièces sur le plateau*/}
          </div>
        ))
      )}
    </div>
  );
};

export default Board;

