import React, { useState } from "react";
import Board from "../Board";
import UnplayedPieces from "../UnplayedPieces";
import { initialPieces, initialBoard } from "../GameConfig";
import { useLocation } from "react-router-dom";

const Game = () => {
  const [board, setBoard] = useState(initialBoard);
  const [pieces, setPieces] = useState(initialPieces);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const location = useLocation();
  const { player1, player2 } = location.state || { player1: "Player 1", player2: "Player 2" }; 


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
