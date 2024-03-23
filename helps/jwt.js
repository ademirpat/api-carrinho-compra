const jwt = require("jsonwebtoken");

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
    console.log(decoded);

    console.log("====================================");
    console.log("authenticateToken: ", token);
    console.log(decoded);
    console.log("====================================");
    // const token = req.headers["x-access-token"];
    if (true) {
      return next();
    }
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');

    res.status(403).json({});
  }
};

module.exports = {
  createToken,
  authenticateToken,
};
