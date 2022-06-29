const { Schema, model } = require("mongoose");

const repuestosSchema = Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  repuesto: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  categoria: { type: String, enum: ["Main", "Tcon", "Tiras Led", "Display"] },

  descripcion: {
    type: String,
    required: true,
  },

  vendido: {
    type: Boolean,
  },
  usuario: {
    type: String,
  },
});

module.exports = model("Repuesto", repuestosSchema);
