module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('flavours', 'format', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('flavours', 'suggestions', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('flavours', 'format');
    await queryInterface.removeColumn('flavours', 'suggestions');
  },
};
