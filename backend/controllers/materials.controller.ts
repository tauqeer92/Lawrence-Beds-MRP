import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { Material } from "../models/material.model";
import createMaterial from '../service/materials.service'
import { getMaterial } from "../service/materials.service";

export const getMaterialHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		Material.find((err, price) => {
			res.json({price:price})
		})
	} catch (e) {

	}
}



const createMaterialHandler = async (req: Request, res: Response, next: NextFunction) => { // 36.29
	try {
		const material = await createMaterial(req.body) // don't we need to specify fields? Is req.body from the middleware schema?
	} catch (e) {

	}
}



export default createMaterialHandler