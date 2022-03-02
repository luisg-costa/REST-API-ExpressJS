import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
      if (!users) {
        return res.status(400).json({
          errors: ['Users not found'],
        });
      }
      return res.status(200).json(users);
    } catch (e) {
      return res.status(404).json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ['User not found'],
        });
      }
      const { id, name, email } = user;
      return res.status(200).json({ id, name, email });
    } catch (e) {
      return res.status(404).json(null);
    }
  }

  async create(req, res) {
    try {
      const user = await User.create(req.body);
      const { id, name, email } = user;
      return res.status(201).json({ id, name, email });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.userId) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Invalid user ID'],
        });
      }
      const updatedUser = await user.update(req.body);
      const { id, name, email } = updatedUser;
      return res.status(200).json({ id, name, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.userId) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Invalid user ID'],
        });
      }
      user.destroy();
      return res.status(200).json({
        id: user.id,
        name: user.name,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
