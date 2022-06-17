const express = require("express");
require("dotenv").config();
const { dbConection } = require("./db/config");
const cors = require("cors");

const app = express();

dbConection();

app.use(cors());

app.use(express.json());

//rutas

app.listen(process.env.PORT || 5000, () => {
  console.log(`Servidor Corriendo en el puerto ${process.env.PORT}`);
});
