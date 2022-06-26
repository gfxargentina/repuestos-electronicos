const getRepuestos = (req, res) => {
  res.json("Trae todos los respuestos");
};

const nuevoRepuesto = (req, res) => {
  res.json("Crea un nuevo repuesto");
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
