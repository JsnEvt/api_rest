import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [5, 200],
              msg: 'Nome precisa ter entre 5 e 200 caracteres.',
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validade: {
            len: {
              args: [3, 255],
              msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'E-mail precisa ser unico.',
          },
          validate: {
            isEmail: {
              msg: 'E-mail invalido',
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validade: {
            isInt: {
              msg: 'Idade precisa ser um numero inteiro.',
            },
          },
        },
        peso: {
          type: Sequelize.STRING,
          defaultValue: '',
          validade: {
            isFloat: {
              msg: 'Peso precisa ser um numero inteiro ou de ponto flutuante.',
            },
          },
        },
        altura: {
          type: Sequelize.STRING,
          defaultValue: '',
          validade: {
            isFloat: {
              msg: 'Altura precisa ser um numero inteiro ou de ponto flutuante.',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associations(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
