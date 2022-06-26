const express = require("express");

require("dotenv").config();
const { dbConection } = require("./db/config");
const cors = require("cors");
const helmet = require("helmet");

const repuestosRoutes = require("./routes/repuestos.routes");
const userRoutes = require("./routes/users.routes");

const app = express();

dbConection();

app.use(cors());
app.use(helmet());

app.use(express.json());

//rutas
app.use("/repuestos", repuestosRoutes);
app.use("/user", userRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Servidor Corriendo en el puerto ${process.env.PORT}`);
});
