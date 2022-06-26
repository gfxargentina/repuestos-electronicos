const { shema, model } = require("mongoose");

const RepuestosSchema = shema({});

module.exports = model("Repuesto", RepuestosSchema);
