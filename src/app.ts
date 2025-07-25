import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import createRouter from 'express-file-routing';
import { PrismaClient } from '@prisma/client';

const main = async () => {
  dotenv.config;

  const app = express();
  const prisma = new PrismaClient();

  app.use(cors());
  app.use(express.json);
  app.use(morgan('dev'));

  const router = express.Router();

  await createRouter(router, {
    directory: path.join(__dirname, 'routes'),
  });

  await prisma.$connect();
  console.log('berhasil koneksi ke MongoDB');

  app.use('/api', router);

  app.listen(4999, () => {
    console.log('Server started on port 4999');
  });
};
main();
