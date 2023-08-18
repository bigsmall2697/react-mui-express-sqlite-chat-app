'use strict';

module.exports = {
  async up(queryInterface, { DataTypes }) {
    await queryInterface.createTable("test", {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      artifact_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_valid: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("test");
  },
};
