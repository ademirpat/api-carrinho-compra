const jwt = require("jsonwebtoken");
const { findUsuario } = require("../repository/usuarios-repository");

const segredo = "meuSegredoSuperSecreto";

const createToken = async (usuario) => {
  const config = { expiresIn: "1m", algorithm: "HS256" };

  const token = jwt.sign(usuario, segredo, config);

  return token;
};

const authenticateToken = async (req, res, next) => {
  const authorization = req.headers["authorization"];
  const token = authorization && authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, segredo);

    const usuario = await findUsuario(decoded.email);

    if (usuario) {
      res.auth = usuario;

      next();
    } else {
      res.status(403).json({});
    }
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");

    res.status(403).json({});
  }
};

module.exports = {
  createToken,
  authenticateToken,
};
