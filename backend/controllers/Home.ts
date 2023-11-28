import { Request,Response } from "express"

const user = {
    Username: "jooj",
    Password: "123",
    UserType: 0
}

export const index = (request:Request, respose:Response) =>{

    respose.json(user);

}