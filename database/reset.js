const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'games.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS games`);
  db.run(`
    CREATE TABLE games (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      player1 TEXT NOT NULL,
      player2 TEXT NOT NULL,
      winner TEXT NOT NULL,
      moveCount INTEGER NOT NULL,
      duration INTEGER NOT NULL
    )
  `, () => {
    console.log("Database reset complete.");
    db.close();
  });
});
