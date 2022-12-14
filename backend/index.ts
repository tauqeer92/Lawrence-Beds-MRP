import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import mongoose from 'mongoose'
import materialRoutes from './routes/materials.route'
import mattressRoutes from './routes/mattresses.route';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// Middleware

app.use(cors());
app.use(express.json())

// Routes

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});


materialRoutes(app)
mattressRoutes(app)


mongoose.connect(process.env.MONGO_URI ?? '')
  .then(() => {
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error.message))


