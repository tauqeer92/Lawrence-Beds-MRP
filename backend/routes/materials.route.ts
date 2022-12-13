import express, { Express, Request, Response } from "express";
import createMaterialHandler, { getMaterialHandler } from "../controllers/materials.controller";


const materialRoutes = (app: any) => {
    app.get("/material", getMaterialHandler);
    app.post('/creatematerial', createMaterialHandler);
}


// const materialRoutes = (app: Express) => {
//     app.get("/material", getMaterialHandler); // Why does req and res need to be specified here? Is it because we want a response?
//     // 
    
// }


export default materialRoutes