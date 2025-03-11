import React, { useState } from "react";
import Board from "../Board";
import UnplayedPieces from "../UnplayedPieces";
import { initialPieces, initialBoard } from "../GameConfig";

const Game = () => {
  const [board, setBoard] = useState(initialBoard);
  const [pieces, setPieces] = useState(initialPieces);
  const [selectedPiece, setSelectedPiece] = useState(null);

  // Select a piece from the tray
  const handleSelectPiece = (pieceId) => {
    setSelectedPiece(pieceId);
  };

  // Place the selected piece on the board
  const handlePlacePiece = (row, col) => {
    if (!selectedPiece) return; // Ensure a piece is selected

    const newBoard = [...board];
    newBoard[row][col] = pieces[selectedPiece]; // Place selected piece
    setBoard(newBoard);

    const updatedPieces = { ...pieces };
    delete updatedPieces[selectedPiece]; // Remove piece from tray
    setPieces(updatedPieces);

    setSelectedPiece(null); // Reset selection
  };

  return (
    <div className="game">
      <h1>Quarto</h1>
      <UnplayedPieces pieces={pieces} onSelectPiece={handleSelectPiece} selectedPiece={selectedPiece} />
      <Board board={board} onPlacePiece={handlePlacePiece} />
    </div>
  );
};

export default Game;
