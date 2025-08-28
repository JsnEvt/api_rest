// essas instrucoes serviram para alterar o campo email da tabela de alunos
// usando o migrate/sequelize.

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn(
    'alunos',
    'email',
    {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  ),
  down: () => { },
};
