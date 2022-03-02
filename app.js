import dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import flavourRoutes from './src/routes/flavourRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import fileRoutes from './src/routes/fileRoutes';

const whiteList = [
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(helmet());
    this.app.use(cors(corsOptions));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(path.resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/token', tokenRoutes);
    this.app.use('/flavours', flavourRoutes);
    this.app.use('/files', fileRoutes);
  }
}

export default new App().app;
