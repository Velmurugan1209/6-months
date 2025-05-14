'use strict';
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("User1",[{
       id : 1 ,
      name:"bob",
      age : 27 ,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id : 2 ,
      name : 'elina',
      age : 35 ,
      createdAt : new Date(),
      updatedAt: new Date()
    }
  ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
