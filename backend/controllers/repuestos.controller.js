const Repuestos = require("../models/repuestos.model");

const getRepuestos = async (req, res) => {
  try {
    const repuestos = await Repuestos.find();

    res.status(200).json(repuestos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//TODO: ultimosRepuestos un get que traiga solo los ultimos 10 repuestos

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

const actualizarRepuesto = async (req, res) => {
  const repuestoId = req.params.id;

  const usuario = req.userId;

  try {
    const repuesto = await Repuestos.findById(repuestoId);

    if (!repuesto) {
      return res.status(404).json({ msg: "No existe el repuesto con ese id" });
    }

    if (repuesto.usuario !== usuario) {
      return res
        .status(401)
        .json({ msg: "No esta autorizado a editar este repuesto" });
    }

    const repuestoEditado = req.body;

    const repuestoActualizado = await Repuestos.findByIdAndUpdate(
      repuestoId,
      repuestoEditado,
      //con esta opcion devuelve el documento modificado
      { new: true }
    );
    res.status(200).json({ repuestoActualizado });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hubo un problema para actualizar, hable con el administrador",
    });
  }
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
