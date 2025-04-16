import React, { useEffect, useState } from 'react';

/* Etablit le classement avec les données */
const CreateRanking = () => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    // Récupération des données
    fetch('http://localhost:5000/api/games')
      .then((response) => response.json())
      .then((data) => {
        const sortedGames = data
          .map((game) => ({
            ...game,
            moveCount: game.moveCount,
            duration: game.duration,
          }))
          .sort((a, b) => {
            if (a.moveCount === b.moveCount) {
              return a.duration - b.duration; // Classification en durée si même nombre de coups
            }
            return a.moveCount - b.moveCount; // Classification par nombre de coups
          });

        setRanking(sortedGames);
      })
      .catch((error) => {
        console.error("Error fetching the games data:", error);
      });
  }, []);

  return (
    <div className='ranking'>
      <table>
        <thead>
          <tr>
            <th>Classement</th>
            <th>Joueurs</th>
            <th>Gagnant</th>
            <th>Nombre de coups</th>
            <th>Durée de la partie (s)</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((game, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{game.player1} vs {game.player2}</td>
              <td>{game.winner}</td>
              <td>{game.moveCount}</td>
              <td>{(() => {
                const duration = game.duration/1000;
                return Math.floor(duration / 60) > 0
                    ? `${Math.floor(duration / 60)} min ${(duration % 60).toFixed(0)} s`
                    : `${(duration % 60).toFixed(0)} s`;
              })()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreateRanking;
