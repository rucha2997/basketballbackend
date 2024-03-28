const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const { userModel } = require("../database/init");

/**
 *
 * @param {import("express").Request} request
 * @param {*} response
 * @param {*} next
 */
const authenticationMiddleware = async (request, response, next) => {
  let authToken = request.headers.authorization;
  if (!authToken) {
    next();
    return;
  }
  try {
    authToken = authToken.replace("Bearer ", "");
    const privateKey = atob(process.env.PRIVATE_JWT_KEY);
    const { userId } = jwt.verify(authToken, privateKey, {
      algorithm: "RS256",
    });
    const user = await userModel.findByPk(userId);
    request.user = user;
  } catch (e) {
    console.log(e);
  }

  next();
};

module.exports = authenticationMiddleware;