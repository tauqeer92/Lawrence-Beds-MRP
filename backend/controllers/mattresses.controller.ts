import express, {Request, Response} from "express";
import mongoose from "mongoose"
import { Mattress } from "../models/mattress.model";
import { getAllMattresses } from "../service/mattresses.service";
import { createMattress } from "../service/mattresses.service";


const MattressController = {
    Index: async (req:Request, res: Response) => {
        const mattresses = await getAllMattresses()
        res.json({mattresses})
    },

    Create: async (req: Request, res: Response) => {
        const mattress_data = {name: req.body.name, size: req.body.size, type: req.body.type, 
            cost: req.body.cost, price: req.body.price, description: req.body.description}
        const mattress = await createMattress(mattress_data)
        res.json({mattress_data})
    }
}

export default MattressController