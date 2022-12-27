import express, {Express, Request, Response} from "express"
import MattressController from "../controllers/mattresses.controller";

const mattressRoutes = (app: any) => {
    app.get("/mattress", MattressController.Index);
    app.post("/createmattress", MattressController.Create);
}

export default mattressRoutes;