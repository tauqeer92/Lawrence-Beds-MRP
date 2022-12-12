import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import mongoose from 'mongoose'
// import materialRoutes from './routes/materials.route'
import createMaterialHandler, { getMaterialHandler } from "./controllers/materials.controller";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// app.use('/api', materialRoutes)

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
app.get('/yoo', (req: Request, res: Response) => {
  res.send('Hi')
});
app.get("/material", getMaterialHandler);
app.post('/create', createMaterialHandler, (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
app.get('/hello', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});


// materialRoutes(app)

mongoose.connect(process.env.MONGO_URI ?? '')
  .then(() => {
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error.message))


