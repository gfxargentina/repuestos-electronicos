//creditos a https://jasonwatmore.com/post/2020/07/22/nodejs-express-api-request-schema-validation-with-joi
const Joi = require("joi");

function signInSchema(req, res, next) {
  // create schema object
  const signinSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  //   // schema options
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
  };

  //   // validate request body against schema
  const { error, value } = signinSchema.validate(req.body, options);

  if (error) {
    // on fail return comma separated errors
    next(`Validation error: ${error.details.map((x) => x.message).join(", ")}`);
  } else {
    //     // on success replace req.body with validated value and trigger next middleware function
    req.body = value;
    next();
  }
}

function signUpSchema(req, res, next) {
  const signupSchema = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    telefono: Joi.string().required(),
    domicilio: Joi.string().required(),
    ciudad: Joi.string().required(),
    provincia: Joi.string().required(),
    email: Joi.string().email().required(),
    confirmPassword: Joi.string().min(8).required(),
    password: Joi.string().min(8).required(),
  });

  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
  };

  const { error, value } = signupSchema.validate(req.body, options);

  if (error) {
    next(`Validation error: ${error.details.map((x) => x.message).join(", ")}`);
  } else {
    req.body = value;
    next();
  }
}

module.exports = {
  signInSchema,
  signUpSchema,
};
