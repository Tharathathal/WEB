const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Setup de la base de données
const dbPath = path.resolve(__dirname, 'games.db');
const db = new sqlite3.Database(dbPath);

// Etablit route (permet l'avoir plusieurs BDD si voulu)
const gameRoutes = require('./routes/games')(db);
app.use('/api/games', gameRoutes);

// Lance le serveur
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
