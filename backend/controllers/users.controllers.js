const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users.model');

//registro
const signup = async (req, res) => {
  const {
    nombre,
    apellido,
    telefono,
    domicilio,
    ciudad,
    email,
    provincia,
    confirmPassword,
    password,
  } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: 'El usuario ya existe' });

    if (password !== confirmPassword)
      return res
        .status(400)
        .json({ message: 'La contraseña no son iguales, verifique porfavor' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      nombre: `${nombre} ${apellido}`,
      telefono,
      email,
      domicilio,
      ciudad,
      provincia,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.SECRET_JWT_SEED,
      { expiresIn: '1h' }
    );

    res.status(200).json({ result, token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: 'Algo Salio mal, contactese con el Administrador' });
  }
};

//login
const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    //busca el usuario en la bd por el email
    const existingUser = await User.findOne({ email });

    //si el usuario no existe tira error
    if (!existingUser)
      return res.status(404).json({ message: 'El usuario no existe' });

    //verifica que el password sea el mismo que la request
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    //si el password no es el mismo tira error
    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Credenciales invalidas' });

    //crea el token
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.SECRET_JWT_SEED,
      { expiresIn: '4h' }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Algo Salio Mal, contactese con el administrador' });
  }
};

module.exports = {
  signin,
  signup,
};
