"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "usuarios",
      [
        {
          id: 1,
          nome: "chico 12345",
          email: "chico2wallison@gmail.com",
          createdAt: "2024-02-17 12:40:13",
          updatedAt: "2024-02-17 12:40:13",
          password: "",
        },
        {
          id: 2,
          nome: "chico wallison",
          email: "franciscowallison@gmail.com",
          createdAt: "2024-02-17 12:40:40",
          updatedAt: "2024-02-17 12:40:40",
          password: "",
        },
        {
          id: 3,
          nome: "chico wallison",
          email: "chicoteste123@gmail.com",
          createdAt: "2024-03-23 12:46:48",
          updatedAt: "2024-03-23 12:46:48",
          password: "123456",
        },
        {
          id: 4,
          nome: "chico wallison",
          email: "dfghjkliiiii@gmail.com",
          createdAt: "2024-03-23 13:48:10",
          updatedAt: "2024-03-23 13:48:10",
          password:
            "$2b$10$6j3bbGNnufdEf0w23L59d.SWouBXEZSEpKA6ydveh07dvQmyEBJiy",
        },
        {
          id: 5,
          nome: "TESTE wallison",
          email: "franciscowallison123@gmail.com",
          createdAt: "2024-04-06 11:39:53",
          updatedAt: "2024-04-06 11:39:53",
          password:
            "$2b$10$xAdwZLKVhh9YOfg2DbLedeJ4oT.cT0eIpCfm0yaxE.4tyxI/ICl76",
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("usuarios", null, {});
  },
};
