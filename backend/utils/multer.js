const multer = require('multer');

//modulo path para manejar las rutas tanto relativas como absolutas de nuestra PC
// y de nuestro proyecto
const path = require('path');

//multer config
module.exports = multer({
  //para decirle a multer donde guardaremos el archivo, en este caso lo dejo vacio porque el archivo
  //sera subido a cloudinary
  storage: multer.diskStorage({}),
  //funcion para controlar que archivos son aceptados
  fileFilter: (req, file, cb) => {
    //originalname es el nombre del archivo en la computadora del usuario
    let ext = path.extname(file.originalname);

    // La función debe llamar a `cb` usando una variable del tipo boolean
    // para indicar si el archivo debería ser aceptado o no
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
      // Para rechazar el archivo es necesario pasar `false`, de la siguiente forma:
      cb(
        new Error(
          'El formato de arhivo para la imagen no esta soportado, tiene que subir una imagen con extension jpg, jpeg o png'
        ),
        false
      );
      return;
    }

    // Para aceptar el archivo es necesario pasar `true`, de la siguiente forma:
    cb(null, true);
  },
});
