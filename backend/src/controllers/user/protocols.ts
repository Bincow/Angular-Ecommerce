import User, { GetUserByLoginParams } from "../../models/user"
import { HttpRequest, HttpResponse } from "../protocols"

export interface IUsersController{
    getUserByLogin(request: HttpRequest<GetUserByLoginParams>):Promise<HttpResponse<User>>;
}

export interface IUsersRepository{
    getUserByLogin(params: GetUserByLoginParams): Promise<User>;
}
