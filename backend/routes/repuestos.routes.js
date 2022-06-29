const express = require("express");
const {
  getRepuestos,
  nuevoRepuesto,
  actualizarRepuesto,
  eliminarRepuesto,
} = require("../controllers/repuestos.controller");
const auth = require("../middlewares/auth");
const { repuestoSchema } = require("../middlewares/validation");

const router = express.Router();

router.get("/", auth, getRepuestos);

router.post("/", auth, repuestoSchema, nuevoRepuesto);

router.patch("/:id", actualizarRepuesto);

router.delete("/:id", eliminarRepuesto);

module.exports = router;
