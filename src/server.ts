import {PrismaClient} from '@prisma/client';
import express from 'express';
import {router} from './routes';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(router);

app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));
