const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api");

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statuscodes = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
