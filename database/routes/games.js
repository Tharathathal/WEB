const express = require('express');
const router = express.Router();

module.exports = (db) => {
  // Create the games table if it doesn't exist
  db.run(`
    CREATE TABLE IF NOT EXISTS games (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      player1 TEXT NOT NULL,
      player2 TEXT NOT NULL,
      winner TEXT NOT NULL,
      moveCount INTEGER NOT NULL,
      duration INTEGER NOT NULL
    )
  `);

  // Route to save a game result
  router.post('/', (req, res) => {
    const { player1, player2, winner, moveCount, duration } = req.body;

    if (!player1 || !player2 || !winner || moveCount === undefined || duration === undefined) {
      return res.status(400).json({ error: 'Il manque des données de la partie' });
    }

    const stmt = db.prepare(`
      INSERT INTO games (player1, player2, winner, moveCount, duration)
      VALUES (?, ?, ?, ?, ?)
    `);

    stmt.run(player1, player2, winner, moveCount, duration, function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Échec de l'ajout à la BDD" });
      }

      res.json({ message: 'Partie enregistrée', gameId: this.lastID });
    });

    stmt.finalize();
  });

  // Route to fetch all games
  router.get('/', (req, res) => {
    db.all(`SELECT * FROM games ORDER BY moveCount ASC`, (err, rows) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Impossible de récupérer les données" });
      }
      res.json(rows);
    });
  });

  return router;
};
