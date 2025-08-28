const express = require("express");
const server = express();
const db = require("../src/database/db");

const PORT = 3000 || "localhost";

server.get("/", (req, res) => {
  return res.send("APi de missões especiais\n Status: Rodando!");
});

server.listen(PORT, () => {
  console.log(`Acesse http://localhost:${PORT}`);
});
