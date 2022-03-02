module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'flavours',
      'name',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    );
  },

  async down(queryInterface) {},
};
