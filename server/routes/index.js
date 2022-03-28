// import modules
const express = require("express");
const route = express.Router();

const {
  validateRegister,
  validateLogin,
} = require("../middlewares/validateRequests");

const { authCheck } = require("../middlewares/validateAuth");
const { registerUser, login } = require("../controllers/");
const { fetchTheme } = require("../controllers/theme");

route.post("/register", validateRegister, registerUser);
route.post("/login", validateLogin, login);
route.get("/themes", authCheck, fetchTheme);

module.exports = route;
