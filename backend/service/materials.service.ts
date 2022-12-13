import express, {Request, Response } from "express";
import  {Material} from "../models/material.model";
import { DocumentDefinition } from "mongoose";

export const getMaterial = async () => {
  return Material.find()

}

const createMaterial = async (input: any) => {
    
        return await Material.create(input)
}


export default createMaterial