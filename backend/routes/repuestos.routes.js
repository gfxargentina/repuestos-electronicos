const express = require("express");
const {
  getRepuestos,
  nuevoRepuesto,
  actualizarRepuesto,
  eliminarRepuesto,
} = require("../controllers/repuestos.controller");
const router = express.Router();

router.get("/", getRepuestos);

router.post("/", nuevoRepuesto);

router.patch("/:id", actualizarRepuesto);

router.delete("/:id", eliminarRepuesto);

module.exports = router;
