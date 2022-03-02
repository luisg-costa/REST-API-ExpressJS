import Sequelize, { Model } from 'sequelize';
import databaseConfig from '../config/database';
import urlConfig from '../config/url';

const sequelize = new Sequelize(databaseConfig);

export default class File extends Model {}

File.init({
  originalname: {
    type: Sequelize.STRING,
    defaultValue: '',
    validate: {
      notEmpty: {
        msg: 'File must have name',
      },
    },
  },
  filename: {
    type: Sequelize.STRING,
    defaultValue: '',
    notEmpty: {
      msg: 'File must have name',
    },
  },
  url: {
    type: Sequelize.VIRTUAL,
    get() {
      return `${urlConfig.url}/img/${this.getDataValue('filename')}`;
    },
  },
}, {
  sequelize,
  modelName: 'File',
});
