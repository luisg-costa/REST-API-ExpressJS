module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('flavours', [{
      name: 'White Chocolat',
      available: true,
      ingredients: 'White chocolat, milk',
      description: 'Tastes very good',
      format: 'Cup',
      suggestions: 'Pairs well with pancakes',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Blueberry',
      available: true,
      ingredients: 'blueberry, milk',
      description: 'Tastes very good',
      format: 'Cup',
      suggestions: 'Pairs well with pancakes',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Mint',
      available: true,
      ingredients: 'mint, milk',
      description: 'Tastes very good',
      format: 'Cup',
      suggestions: 'Pairs well with pancakes',
      created_at: new Date(),
      updated_at: new Date(),
    },
    ], {});
  },

  async down() {},
};
