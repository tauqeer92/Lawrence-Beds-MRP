import { Request, Response, NextFunction } from "express";
import {AnyZodObject} from 'zod'

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next:NextFunction)=>{ // why is it double
    try{
        schema.parse({ // what is parse for?
            body: req.body,
            query: req.query,
            params: req.params
        })
    }catch(e: any){
        return res.status(400).send(e.errors);
    }
}

export default validate