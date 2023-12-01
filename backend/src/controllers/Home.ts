import { Request,Response } from "express"
import User from "../models/user";

const user:User = {
    id:1,
    password: "123",
    login: "jooj",
    type: 0,
}

export const index = (request:Request, respose:Response) =>{
    
    respose.json(user);

}