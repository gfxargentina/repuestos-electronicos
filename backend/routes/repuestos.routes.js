const express = require("express");
const {
  getRepuestos,
  nuevoRepuesto,
  actualizarRepuesto,
  eliminarRepuesto,
} = require("../controllers/repuestos.controller");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", auth, getRepuestos);

router.post("/", auth, nuevoRepuesto);

router.patch("/:id", auth, actualizarRepuesto);

router.delete("/:id", auth, eliminarRepuesto);

module.exports = router;
