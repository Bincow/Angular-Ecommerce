import User from '../../models/user';
import { ApiInfoMsg, ApiResponse } from '../../utils/apiMessages';
import { ErrorMsg } from '../../utils/errorMessages';
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
                body: new ApiResponse(true, ApiInfoMsg.default, users)
            }
        }catch(Error){
            return {
                statusCode: 400,
                body: new ApiResponse(true, ErrorMsg.default)
            }
        }
    }
    
}