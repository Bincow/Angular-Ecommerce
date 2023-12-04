import { JsonBase } from './../../models/jsonBase';
import User from "../../models/user"

export interface IGetUsersController{
    handle():Promise<JsonBase>
}

export interface IGetUsersRepository{
    getUsers():Promise<User[]>
}
