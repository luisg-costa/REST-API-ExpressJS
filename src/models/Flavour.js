import Sequelize, { Model } from 'sequelize';
import databaseConfig from '../config/database';
import File from './File';

const sequelize = new Sequelize(databaseConfig);

export default class Flavour extends Model {
  static associate(model) {
    this.hasMany(model, { foreignKey: 'flavours_id' });
  }
}

Flavour.init({
  name: {
    type: Sequelize.STRING,
    defaultValue: '',
    validate: {
      len: {
        args: [1, 255],
        msg: 'Name must have 1 to 255 characters.',
      },
    },
    unique: {
      msg: 'Name must be unique. You already have this flavour name',
    },
  },
  available: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  ingredients: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false,
    validate: {
      notNull: {
        msg: 'You need to enter the ice cream ingredients.',
      },
    },
  },
  description: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false,
    validate: {
      notNull: {
        msg: 'You need to give description to ice cream.',
      },
    },
  },
  format: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false,
    validate: {
      notNull: {
        msg: 'You need to give ice cream format.',
      },
    },
  },
  suggestions: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false,
    validate: {
      notNull: {
        msg: 'You need to enter a food pair to ice cream.',
      },
    },
  },
}, {
  sequelize,
  modelName: 'Flavour',
});

Flavour.associate(File);
