const jwt = require("jsonwebtoken");

const segredo = "meuSegredoSuperSecreto";

const createToken = async (usuario) => {
  const config = { expiresIn: "1m", algorithm: "HS256" };

  const token = jwt.sign(usuario, segredo, config);

  return token;
};

const authenticateToken = async (req, res, next) => {
  console.log("====================================");
  console.log("authenticateToken: ", req.headers);
  console.log("====================================");
  // const token = req.headers["x-access-token"];
  if (true) {
    return next();
  }
};

module.exports = {
  createToken,
  authenticateToken,
};
