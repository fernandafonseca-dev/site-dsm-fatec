const dotenv = require("dotenv");
dotenv.config({ quiet: true });

const express = require("express");

const path = require("path");

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, function () {
  console.log(`Rodadndo em http://localhost:${PORT}`);
});

const puplicPath = path.join(__dirname, "public");
const pagesPath = path.join(puplicPath, "pages");

app.use("/assets", express.static(path.join(puplicPath, "assets")));

app.get("/", function (req, res) {
  res.sendFile(path.join(pagesPath, "index.html"));
});

app.get("/login", function (req, res) {
  res.sendFile(path.join(pagesPath, "login.html"));
});

app.get("/cadastro", function (req, res) {
  res.sendFile(path.join(pagesPath, "cadastro.html"));
});

app.use(function (req, res){
   res.status(404).sendFile(path.join(pagesPath, "404.html"));
});


