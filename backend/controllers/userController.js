const bcrypt = require("bcryptjs");
const express = require('express')
const User = require("../models/UserModel");
const { BadRequestError, UnAuthenticatedError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

//@desc Register
//@route POST /api/v1/user/register
//access Public
const registerUser = async (req, res) => {
  const {email} = req.body
  const checkUser = await User.findOne({ email });

  if(checkUser){
    throw new BadRequestError('Email Is Already Used')
  }

  const user = await User.create({ ...req.body });
  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    imageUrl:user.imageUrl,
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
    _id: user.id,
    name: user.name,
    email: user.email,
    imageUrl:user.imageUrl,
    token,
  });
};

//@desc GetUser
//@route POST /api/v1/user/me
//access Private
const getUser = async (req, res) => {
  res.status(StatusCodes.OK).json(req.user);
};


//@desc UpdateProfile
//@route POST /api/v1/user/profile
//access Private
const updateProfile = async (req, res) => {

  let {
    user: { id: userId },
    body: { name, email,password},
  } = req;

  console.log(userId) 
  
  if (!email) {
    throw new BadRequestError("Provide Valid Credentials");
  }


  const user = await User.findById(userId);
  
  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  
  // const checkPassword = await user.comparePassword(password);
  
  // if (!checkPassword) {
  //   throw new BadRequestError("Invalid Password");
  // }
  
  const token = user.createJWT();
  // req.body.password = await bcrypt.hash(password, salt);
  
  // const image = photo ? photo.path:user.photo

  // user.email = email
  // user.name = name
  // user.photo = image
  // user._id = userId

  // user.isNew = false
  // await user.save()
  
  
  const updateProfile = await User.findByIdAndUpdate(
    { _id: userId },
    {
      ...req.body,
    },
    {
      new: true,
      runValidators: true,
    }
    );

    
  res.status(StatusCodes.OK).json(updateProfile);
  };

module.exports = {
  registerUser,
  loginUser,
  getUser,
  updateProfile,
};
