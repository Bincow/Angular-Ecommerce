import User from '../../models/user';
import { HttpResponse } from '../protocols';
import { IUsersController, IUsersRepository } from './protocols';
export class UsersController implements IUsersController{
    constructor(private readonly getUsersRepository:IUsersRepository){}

    async handle():Promise<HttpResponse<User[]>> {
        try
        {
            const users = await this.getUsersRepository.getUsers();

            return {
                statusCode: 200,
                body:users
            }
        }catch(Error){
            return {
                statusCode: 400,
                body:"deu merda"
            }
        }
    }
    
}