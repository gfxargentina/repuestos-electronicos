const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    //recibe el token del cliente
    const token = req.headers.authorization.split(" ")[1];
    //si el token es menor a 500 caracteres el token es nuestro si es mayor a 500 es de google auth
    const isCustomAuth = token.length < 500;

    //para guardar la data del token
    let decodedData;

    if (token && isCustomAuth) {
      //verifica nuestro propio token
      decodedData = jwt.verify(token, process.env.SECRET_JWT_SEED);
      //guarda el token para despues usarlo en el auth middleware
      req.userId = decodedData?.id;
    } else {
      //token para trabajar con google auth
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
    res.send("No esta Autorizado");
  }
};

module.exports = auth;
