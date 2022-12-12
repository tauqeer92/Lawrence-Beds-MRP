import express, { Express, Request, Response } from "express";
import createMaterialHandler, { getMaterialHandler } from "../controllers/materials.controller";

// const app = express()


// app.get('/yoo', (req: Request, res: Response) => {
//   res.send('yoo');
// });
// app.get("/material", getMaterialHandler);
// const materialRoutes = (app: Express) => {
//     app.get("/material", getMaterialHandler); // Why does req and res need to be specified here? Is it because we want a response?
//     // app.post('/creatematerial', createMaterialHandler)
    
// }


// export default materialRoutes