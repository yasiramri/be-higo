import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import createRouter from 'express-file-routing';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';
import { PrismaClient } from '../generated/mongo_db';

const main = async () => {
  dotenv.config();

  const app = express();
  const router = express.Router();
  const prisma = new PrismaClient();

  await createRouter(router, {
    directory: path.join(__dirname, 'routes'),
  });

  await prisma.$connect();
  console.log('berhasil koneksi ke MongoDB');

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use('/api', router);

  app.listen(4999, () => {
    console.log('Server started on port 4999');
  });
};
main();
