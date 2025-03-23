import React, { useState } from "react";
import Board from "../Board";
import UnplayedPieces from "../UnplayedPieces";
import { initialPieces, initialBoard } from "../GameConfig";
import { useLocation } from "react-router-dom";

/* Page où se déroule la partie */
const Game = () => {
  /* Acquisition des noms des joueurs */
  const location = useLocation();
  const { player1, player2 } = location.state || { player1: "Player 1", player2: "Player 2" };

  /* Définition des variables */
  const [board, setBoard] = useState(initialBoard.map(row => [...row]));
  const [pieces, setPieces] = useState(initialPieces);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(player1);
  const [gamePhase, setGamePhase] = useState("pick");

  /* Fonction vérifiant les conditions de victoire */
  const checkWin = (board, row, col) => {
    if (!board[row][col]) return false;
  
    const piece = board[row][col];
    const properties = ["color", "shape", "height", "hollow"];
  
    const checkLine = (line) => {
      return properties.some((prop) => 
        line.every((p) => p && p[prop] === line[0][prop])
      );
    };
  
    const rowPieces = board[row];
    const colPieces = board.map((r) => r[col]);
    const mainDiagonal = board.map((r, i) => board[i][i]);
    const antiDiagonal = board.map((r, i) => board[i][board.length - 1 - i]);
  
    return (
      checkLine(rowPieces) || 
      checkLine(colPieces) || 
      (row === col && checkLine(mainDiagonal)) || 
      (row + col === board.length - 1 && checkLine(antiDiagonal))
    );
  };
  
  /* Fonction gérant la phase du jeu à la sélection d'une pièce */
  const handleSelectPiece = (pieceId) => {
    if (gamePhase === "win") return;

    if (gamePhase === "pick") {
      setSelectedPiece(pieceId);
      setGamePhase("place");
    } else {
      alert("Pose la pièce sur le plateau !")
    }
  };

  /* Fonction gérant la phase du jeu à la pose d'une pièce */
  const handlePlacePiece = (row, col) => {
    if (gamePhase === "win") return;
    if (!selectedPiece) return;

    const newBoard = [...board];
    newBoard[row][col] = pieces[selectedPiece];
    setBoard(newBoard);

    const updatedPieces = { ...pieces };
    delete updatedPieces[selectedPiece];
    setPieces(updatedPieces);

    if (checkWin(newBoard, row,col)){
      setGamePhase("win");
      return;
    }

    setSelectedPiece(null);
    setGamePhase("pick");
    setCurrentPlayer(currentPlayer === player1 ? player2 : player1);
  };

  return (
    <div className="game">
      <h1>Quarto</h1>
      <UnplayedPieces pieces={pieces} onSelectPiece={handleSelectPiece} selectedPiece={selectedPiece} />
      <div className="game-message">
        {gamePhase === "win"
          ? `${currentPlayer === player1 ? player2 : player1} a gagné ! Fin de la partie`
          : gamePhase === "pick"
            ? `${currentPlayer}, choisis une pièce à donner à ${currentPlayer === player1 ? player2 : player1}`
            : `${currentPlayer === player1 ? player2 : player1}, place ta pièce sur le plateau`
        }
      </div>
      <Board board={board} onPlacePiece={handlePlacePiece} />
    </div>
  );
};

export default Game;
