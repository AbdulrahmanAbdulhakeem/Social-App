const bcrypt = require("bcryptjs");
const User = require("../models/UserModel");
const { BadRequestError, UnAuthenticatedError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

//@desc Register
//@route POST /api/v1/user/register
//access Public
const registerUser = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    _id:user.id,
    name: user.name,
    email: user.email,
    token,
  });
};

//@desc Login
//@route POST /api/v1/user/login
//access Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Provide Valid Credentials");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  const checkPassword = await user.comparePassword(password);

  if (!checkPassword) {
    throw new BadRequestError("Invalid Credential");
  }

  const token = user.createJWT();

  res.status(StatusCodes.OK).json({
    _id:user.id,
    user: user.name,
    email: user.email,
    token,
  });
};

//@desc GetUser
//@route POST /api/v1/user/me
//access Private
const getUser = async (req, res) => {
  res.status(StatusCodes.OK).json(req.user);
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
