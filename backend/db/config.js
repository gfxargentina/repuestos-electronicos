const mongoose = require("mongoose");

const dbConection = async () => {
  try {
    await mongoose.connect(process.env.DB);

    console.log("DB Mongo Atlas Conectada");
  } catch (error) {
    console.log(error);
    throw new error("No se puede conectar a la DB");
  }
};

module.exports = {
  dbConection,
};
