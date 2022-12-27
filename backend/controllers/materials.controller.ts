import express, {Request, Response } from "express";
import mongoose from "mongoose";
import { Material } from "../models/material.model";
import createMaterial from '../service/materials.service'
import { getAllMaterials } from "../service/materials.service";

const MaterialController = {
	Index: async (req: Request, res: Response) => {
		const materials = await getAllMaterials()
		res.json({materials})
		console.log(materials)
    },

	Create: async (req: Request, res: Response) => {
		const material_data = {name: req.body.name, price: req.body.price, description: req.body.description}
		const material = await createMaterial(material_data)
		res.json({material_data})

    }
}

export default MaterialController