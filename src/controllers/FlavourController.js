import Flavour from '../models/Flavour';
import File from '../models/File';

class FlavourController {
  async index(req, res) {
    try {
      const flavours = await Flavour.findAll({
        attributes: ['id', 'name', 'available', 'ingredients', 'description', 'format', 'suggestions'],
        order: [['id', 'DESC'], [File, 'id', 'DESC']],
        include: {
          model: File,
          attributes: ['url', 'filename'],
        },
      });
      return res.status(200).json(flavours);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) return res.status(400).json({ errors: ['You need to enter an valid flavour ID. Like url/flavours/id'] });
      const flavour = await Flavour.findByPk(req.params.id, {
        attributes: ['id', 'name', 'available', 'ingredients', 'description', 'format', 'suggestions'],
        order: [['id', 'DESC'], [File, 'id', 'DESC']],
        include: {
          model: File,
          attributes: ['url', 'filename'],
        },
      });
      if (!flavour) return res.status(400).json({ errors: ['Flavour not found'] });
      return res.status(200).json(flavour);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async create(req, res) {
    try {
      const flavour = await Flavour.create(req.body);
      if (!req.body.available) return res.status(201).json({ flavour, available: 'This ice cream is set unavailable because you dont send that parameter' });
      return res.status(201).json(flavour);
    } catch (e) {
      return res.status(400).json(e.errors.map((err) => err.message));
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) return res.status(400).json({ errors: ['You need to enter an valid flavour ID. Like url/flavours/id'] });
      const flavourExist = await Flavour.findOne({ where: { id: req.params.id } });
      if (!flavourExist) return res.status(400).json({ errors: ['Flavour not found'] });
      const { id, name, available } = await flavourExist.update(req.body);
      return res.status(200).json({ id, name, available });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) return res.status(400).json({ errors: ['You need to enter an valid flavour ID. Like url/flavours/id'] });
      const flavourExist = await Flavour.findByPk(req.params.id);
      if (!flavourExist) return res.status(400).json({ errors: ['Flavour not found'] });
      const { id, name } = await flavourExist.destroy();
      return res.status(200).json({
        id, name, delected: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}
export default new FlavourController();
