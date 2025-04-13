const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Database setup
const dbPath = path.resolve(__dirname, 'games.db');
const db = new sqlite3.Database(dbPath);

// Use routes
const gameRoutes = require('./routes/games')(db);
app.use('/api/games', gameRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
