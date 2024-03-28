const { ValidationError } = require("yup");
const { loginValidator } = require("../validators/user.validators");
const formErrorsResponse = require("../responses/formerrors.response");
const { userModel } = require("../database/init");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const { createResponse } = require("../responses/single.response");

const login = async (request, response) => {
  try {
    const { email, password } = await loginValidator.validate(request.body, {
      abortEarly: false,
    });

    const user = await userModel.findOne({ where: { email } });

    if (!user) {
      response.status(401).send("");
      return;
    }

    const encryptedPassword = user.password;
    const isValid = await bcrypt.compare(password, encryptedPassword);

    if (!isValid) {
      response.status(401).send("");
      return;
    }
    const privateKey = atob(process.env.PRIVATE_JWT_KEY);
    const token = jwt.sign({ userId: user.id }, privateKey, {
      algorithm: "RS256",
      expiresIn: "4h",
    });

    response.json(
      createResponse("jwt_token", "login", {
        token,
        userId: user.id,
        email: user.email,
      })
    );
  } catch (e) {
    if (e instanceof ValidationError) {
      response.status(400).json(formErrorsResponse(e));
      return;
    }
    throw e;
  }
};

module.exports = { login };