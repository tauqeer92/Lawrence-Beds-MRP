import  {Material} from "../models/material.model";
import { DocumentDefinition } from "mongoose";

export const getMaterial = async () => {
    await Material.find()
}

const createMaterial = async (input: any) => {
    try {
        return await Material.create(input) // This where it should be checked and validated
    } catch(e: any){
        throw new Error(e)
    }
}


export default createMaterial