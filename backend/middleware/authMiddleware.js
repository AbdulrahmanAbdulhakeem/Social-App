const jwt = require("jsonwebtoken");
const { UnAuthenticatedError } = require("../errors");
const User = require("../models/UserModel");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError("UnAuthorized");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(payload.id).select("-password");
  } catch (error) {
    throw new UnAuthenticatedError("UnAuthorized access");
  }

  next();
};

module.exports = authMiddleware;
