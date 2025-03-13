import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const PlayersNames = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/game", { state: { player1, player2 } });
  };

  return (
    <div className="players-names">
      <h1>Choississez vos noms de joueur</h1>
      <form className="names-form" onSubmit={handleSubmit}>
        <input
            className="player-input"
            type="text"
            placeholder="Joueur 1"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
            required
        />
        <input
            className="player-input"
            type="text"
            placeholder="Joueur 2"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
            required
        />
        <button className="submit-button" type="submit">Démarrer le jeu</button>
      </form>
    </div>
  );
};

export default PlayersNames;
