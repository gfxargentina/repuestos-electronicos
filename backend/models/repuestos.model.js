const { Schema, model } = require("mongoose");

const repuestosSchema = Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  imagen: {
    public_id: {
      type: String,
      required: true,
    },

    url: {
      type: String,
      required: true,
    },
  },
  repuesto: {
    type: String,
    required: true,
    trim: true,
  },
  modelo: {
    type: String,
    required: true,
    trim: true,
  },
  categoria: { type: String, enum: ["Main", "Tcon", "Tiras Led", "Display"] },

  descripcion: {
    type: String,
    required: true,
    trim: true,
  },

  vendido: {
    type: Boolean,
  },
  usuario: {
    type: String,
  },
});

module.exports = model("Repuesto", repuestosSchema);
