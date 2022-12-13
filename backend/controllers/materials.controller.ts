import express, {Request, Response } from "express";
import mongoose from "mongoose";
import { Material } from "../models/material.model";
import createMaterial from '../service/materials.service'
import { getMaterial } from "../service/materials.service";

export const getMaterialHandler = async (req: Request, res: Response) => {
	const materials = await getMaterial()
	res.json({materials})
}



const createMaterialHandler = async (req: Request, res: Response) => {
	const material_data = {name: req.body.name, price: req.body.price, description: req.body.description}
	const material = await createMaterial(material_data)
	res.json({material_data})
}



export default createMaterialHandler