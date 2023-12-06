import User from "../../models/user"
import { HttpResponse } from "../protocols"

export interface IUsersController{
    handle():Promise<HttpResponse<User[]>>
}

export interface IUsersRepository{
    getUsers():Promise<User[]>
}
