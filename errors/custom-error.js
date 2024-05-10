class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(this.message);
    this.statusCode = statusCode;
  }
}

module.exports = CustomAPIError;
