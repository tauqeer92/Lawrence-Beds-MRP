import { Mattress } from "../models/mattress.model";

export const getAllMattresses = async () => {
    return Mattress.find()
}

export const createMattress = async (input: any) => {
    return await Mattress.create(input)
}