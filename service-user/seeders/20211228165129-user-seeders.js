'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Agung',
        profession: 'Admin Micro',
        role: 'admin',
        email: 'm.agung.sutrisno@gmail.com',
        password: await bcrypt.hash('password', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Maey',
        profession: 'Frontend Developer',
        role: 'student',
        email: 'maey@gmail.com',
        password: await bcrypt.hash('password', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
