import React, { useState, useRef } from "react";
import Board from "./Board";
import UnplayedPieces from "./UnplayedPieces";
import { initialPieces, initialBoard } from "./GameConfig";
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
  const [moveCount, setMoveCount] = useState(1);
  const startTime = useRef(Date.now());

  /* Fonction vérifiant les conditions de victoire */
  const checkWin = (board, row, col) => {
    if (!board[row][col]) return false;
  
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
      return;
    }
  };

  /* Fonction gérant la phase du jeu à la pose d'une pièce */
  const handlePlacePiece = (row, col) => {
    if (gamePhase === "win") return;
    if (!selectedPiece) return;
    if (board[row][col] !== null) return;

    const newBoard = [...board];
    newBoard[row][col] = pieces[selectedPiece];
    setBoard(newBoard);

    const updatedPieces = { ...pieces };
    delete updatedPieces[selectedPiece];
    setPieces(updatedPieces);

    if (checkWin(newBoard, row,col)){
      setGamePhase("win");
      const endTime = Date.now(); // End time when the game ends
      const duration = endTime - startTime.current; // Duration in milliseconds

      // Envoie les résultats à la BDD
      fetch('http://localhost:5000/api/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          player1,
          player2,
          winner: currentPlayer,
          moveCount,
          duration
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log('Partie enregistrée !', data))
        .catch((err) => console.error('Erreur de sauvegarde :', err));
      
      return;
    }

    setSelectedPiece(null);
    setGamePhase("pick");
    setMoveCount(prev => prev + 1);
    setCurrentPlayer(currentPlayer === player1 ? player2 : player1);
  };

  return (
    <div className="game">
      <h1>Quarto</h1>
      <UnplayedPieces pieces={pieces} onSelectPiece={handleSelectPiece} selectedPiece={selectedPiece} />
      <div className="game-message">
        {gamePhase === "win"
          ? `${currentPlayer === player1 ? player2 : player1} a gagné en ${moveCount} coups ! Fin de la partie`
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
