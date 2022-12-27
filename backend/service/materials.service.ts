import express, {Request, Response } from "express";
import  {Material} from "../models/material.model";

export const getAllMaterials = async () => {
  return Material.find()
}

const createMaterial = async (input: any) => {
    return await Material.create(input)
}


export default createMaterial