import { GetProfileById, Profile } from "../../models/profile";
import User, { GetUserByLoginParams } from "../../models/user"
import { HttpRequest, HttpResponse } from "../protocols"

export interface IUsersController{
    getUserByLogin(request: HttpRequest<GetUserByLoginParams>):Promise<HttpResponse<{ user: User; profile: Profile; }>>;
}

export interface IUsersRepository{
    getUserByLogin(params: GetUserByLoginParams): Promise<User>;
    getProfileByLogin(params: GetProfileById): Promise<Profile>;

}
