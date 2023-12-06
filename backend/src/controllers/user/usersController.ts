import { IUsersController, IUsersRepository } from './protocols';
export class UsersController implements IUsersController{
    constructor(private readonly getUsersRepository:IUsersRepository){}

    async handle() {
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