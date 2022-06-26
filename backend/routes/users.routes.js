const express = require("express");
const { signin, signup } = require("../controllers/users.controllers");
const { signInSchema } = require("../middlewares/validationMiddleware");

const router = express.Router();

router.post("/signin", signInSchema, signin); //login
router.post("/signup", signup); //registro

module.exports = router;
