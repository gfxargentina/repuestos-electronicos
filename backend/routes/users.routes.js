const express = require("express");
const { signin, signup } = require("../controllers/users.controllers");
const {
  signInSchema,
  signUpSchema,
} = require("../middlewares/validationMiddleware");

const router = express.Router();

router.post("/signin", signInSchema, signin); //login
router.post("/signup", signUpSchema, signup); //registro

module.exports = router;
