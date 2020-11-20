'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Parks', [
      {parkName: 'Six Flags', city: 'Dallas', provinceState: 'Texas', country: 'USA', opened: new Date('1946-03-01'), size: 'Big', description: 'Amusement Park', createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Parks', null, {})
  }
};
