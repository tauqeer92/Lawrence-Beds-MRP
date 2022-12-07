import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import mongoose from 'mongoose'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

mongoose.connect(process.env.MONGO_URI ?? '')
  .then(() => {
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error.message))


