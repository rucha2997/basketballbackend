const { v4: uuidv4 } = require("uuid");
const { errorResponse } = require("../responses/single.response");
const errorMiddleware = (error, request, response, next) => {
  const id = uuidv4();
  console.error(error, request.body, request.url, id, "error");
  response.status(500).json(errorResponse(id));
};

module.exports = errorMiddleware;