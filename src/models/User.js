import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';
import databaseConfig from '../config/database';

const sequelize = new Sequelize(databaseConfig);

export default class User extends Model {
  passwordIsValid(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

User.init({
  name: {
    type: Sequelize.STRING,
    defaultValue: '',
    validate: {
      len: {
        args: [3, 255],
        msg: 'Name must have 3 to 255 characters',
      },
    },
  },
  email: {
    type: Sequelize.STRING,
    defaultValue: '',
    unique: {
      msg: 'Email already exists',
    },
    validate: {
      isEmail: {
        msg: 'Please insert a valid email',
      },
    },
  },
  password_hash: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  password: {
    type: Sequelize.VIRTUAL,
    defaultValue: '',
    validate: {
      len: {
        args: [8, 50],
        msg: 'Password must have 8 to 50 characters',
      },
    },
  },
}, {
  sequelize,
  modelName: 'User',
});

User.addHook('beforeSave', async (user) => {
  if (user.password) {
    user.password_hash = await bcrypt.hash(user.password, 8);
  }
});
