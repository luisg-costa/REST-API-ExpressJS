import multer from 'multer';
import multerConfig from '../config/multer';
import File from '../models/File';

const upload = multer(multerConfig).single('file');

class FileController {
  store(req, res) {
    return upload(req, res, async (err) => {
      try {
        if (err) return res.status(400).json({ errors: [err.code] });
        const { originalname, filename } = req.file;
        const { flavours_id } = req.body;
        const file = await File.create({ originalname, filename, flavours_id });
        return res.status(200).json(file);
      } catch (e) {
        return res.status(400).json({ errors: 'Flavour not found' });
      }
    });
  }
}

export default new FileController();
