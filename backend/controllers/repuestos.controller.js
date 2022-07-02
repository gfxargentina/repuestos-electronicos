const Repuestos = require("../models/repuestos.model");
const cloudinary = require("../utils/cloudinary");

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
  const { repuesto, modelo, categoria, descripcion, vendido } = req.body;

  //si no se agrega un archivo tira un error
  if (!req.file) {
    return res.send("Porfavor seleccione una imagen para subir");
  }

  try {
    //se sube el archivo a cloudinary que viene por el request.file
    const cloudinary_image = await cloudinary.uploader.upload(req.file.path, {
      folder: "repuestos",
    });

    //crea una nueva instancia Repuestos
    const nuevoRepuesto = new Repuestos({
      repuesto,
      imagen: {
        public_id: cloudinary_image.public_id,
        url: cloudinary_image.secure_url,
      },
      modelo,
      categoria,
      descripcion,
      vendido,
      //viene del auth middleware
      usuario: req.userId,
    });
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

const eliminarRepuesto = async (req, res) => {
  const repuestoId = req.params.id;

  const usuario = req.userId;

  try {
    const repuesto = await Repuestos.findById(repuestoId);

    if (!repuesto) {
      return res
        .status(404)
        .json({ msg: "No existe ningun repuesto con ese id" });
    }

    if (repuesto.usuario !== usuario) {
      return res
        .status(401)
        .json({ msg: "No esta autorizado a eliminar este repuesto" });
    }

    await Repuestos.findByIdAndDelete(repuestoId);

    res.json({ msg: "El repuesto fue eliminado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hubo un problema tratando de eliminar el repuesto, comuniquese con el administrador",
    });
  }
};

module.exports = {
  getRepuestos,
  nuevoRepuesto,
  actualizarRepuesto,
  eliminarRepuesto,
};
