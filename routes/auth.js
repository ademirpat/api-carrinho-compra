const express = require("express");
const {
  getUsuarios,
  createUsuarios,
  findUsuario,
  updatedUsuario,
} = require("../repository/usuarios-repository");
const { compared } = require("../helps/criptografar");
const { createToken } = require("../helps/jwt");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  const usuario = await findUsuario(email, "password");

  if (!usuario) {
    res.status(401).json({});
    return;
  }

  const valid = await compared(senha, usuario.password);

  if (valid) {
    const usuario_auth = await findUsuario(email);

    const token = await createToken(usuario_auth);

    const message = { token, usuario: usuario_auth };

    res.status(200).json(message);
  } else {
    res.status(401).json({});
  }
});

router.post("/create", async (req, res) => {
  const dataToInsert = req.body;

  if (!dataToInsert.nome || !dataToInsert.email) {
    res.status(400).send("Nome ou preço do produto não foi informado(a).");
    return;
  }

  //Validar usuario existente
  if ((await findUsuario(dataToInsert.email)) != null) {
    res.status(400).send("Uusario já cadastrado!");
    return;
  }

  // Trocar o json do usuario pelo token JTW
  const new_usuario = await createUsuarios(dataToInsert);

  if (new_usuario.id === undefined) {
    res.status(500).send(new_usuario);
  }

  res.status(201).send(new_usuario);
});

module.exports = router;
