require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "123456",
    database: "HML_CarrinhoCompra",
    host: "127.0.0.1",
    dialect: "mariadb",
    port: "3333"
  },
  test: {
    username: "root",
    password: "123456",
    database: "TesteCarrinhoCompra",
    host: "127.0.0.1",
    dialect: "mariadb",
    port: "3333"
  },
  production: {
    username: "root",
    password: "123456",
    database: "HML_CarrinhoCompra",
    host: "127.0.0.1",
    dialect: "mariadb",
  },
};
