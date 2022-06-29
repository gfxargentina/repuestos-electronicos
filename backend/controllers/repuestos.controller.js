const Repuestos = require("../models/repuestos.model");

const getRepuestos = async (req, res) => {
  try {
    const repuestos = await Repuestos.find();

    res.status(200).json(repuestos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const nuevoRepuesto = async (req, res) => {
  const repuesto = req.body;

  const nuevoRepuesto = new Repuestos({
    ...repuesto,
    //viene del auth middleware
    usuario: req.userId,
  });

  try {
    await nuevoRepuesto.save();

    res.status(201).json(nuevoRepuesto);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const actualizarRepuesto = (req, res) => {
  res.json("Actualiza un Repuesto");
};

const eliminarRepuesto = (req, res) => {
  res.json("Elimina un Repuesto");
};

module.exports = {
  getRepuestos,
  nuevoRepuesto,
  actualizarRepuesto,
  eliminarRepuesto,
};
