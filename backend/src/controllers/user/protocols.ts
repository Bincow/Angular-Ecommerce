import { JsonBase } from './../../models/jsonBase';
import User from "../../models/user"

export interface IUsersController{
    handle():Promise<JsonBase>
}

export interface IUsersRepository{
    getUsers():Promise<User[]>
}
