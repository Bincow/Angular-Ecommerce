import User, { GetUserByLoginParams } from '../../models/user';
import { ApiInfoMsg, ApiResponse } from '../../utils/apiMessages';
import { ErrorMsg } from '../../utils/errorMessages';
import { Mapper } from '../../utils/jsonValidators';
import { HttpRequest, HttpResponse, baseError } from '../protocols';
import { IUsersController, IUsersRepository } from './protocols';
export class UsersController implements IUsersController{
    constructor(private readonly usersRepository:IUsersRepository){}
    
    async getUserByLogin(request: HttpRequest<GetUserByLoginParams>): Promise<HttpResponse<User>> { 
        try {

            const userValidated = Mapper.GetUserByLoginValidator(request.body);
            const user = await this.usersRepository.getUserByLogin(userValidated);

            return { statusCode: 200, body: new ApiResponse(true, ApiInfoMsg.default, user) };
        } catch (ex:any) {
            return baseError(ex.message);
        }
    }

    
}