import express, {Request, Response } from "express";
import  {Material} from "../models/material.model";

export const getAllMaterials = async () => {

  const materials = Material.find()
  console.log(materials)
  return materials
}

const createMaterial = async (input: any) => {
    return await Material.create(input)
}


export default createMaterial