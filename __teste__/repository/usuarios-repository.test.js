const {
  getUsuarios,
  createUsuarios,
  findUsuario
} = require("../../repository/usuarios-repository");

const countUsuarios = 5;

test("get all usuarios", async () => {
  const allUsuarios = await getUsuarios();
  expect(allUsuarios.length).toBe(countUsuarios);
});

test("get all usuarios add new user", async () => {
  const usuario = {
    nome: "teste 23456",
    email: "teste23456@gmail.com",
    senha: "123456",
  };
  await createUsuarios(usuario);

  const allUsuarios = await getUsuarios();

  expect(allUsuarios.length).toBe(6);
});


test("get new user", async () => {
  const usuario = {
    nome: "teste 23456",
    email: "teste23456@gmail.com",
    senha: "123456",
  };
  const usuario_result = await findUsuario(usuario.email);

  expect(usuario_result.nome.toLowerCase()).toBe(usuario.nome.toLowerCase());
});