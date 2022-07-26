const express = require('express');
const {
  getRepuestos,
  nuevoRepuesto,
  actualizarRepuesto,
  eliminarRepuesto,
} = require('../controllers/repuestos.controller');
const auth = require('../middlewares/auth');
const { repuestoSchema } = require('../middlewares/validation');
const upload = require('../utils/multer');

const router = express.Router();

router.get('/', getRepuestos);

router.post('/', auth, upload.single('imagen'), repuestoSchema, nuevoRepuesto);

router.patch('/:id', auth, actualizarRepuesto);

router.delete('/:id', auth, eliminarRepuesto);

module.exports = router;
