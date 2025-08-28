const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./src/database/database.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Conectado ao banco de dados SQLite.");
});
