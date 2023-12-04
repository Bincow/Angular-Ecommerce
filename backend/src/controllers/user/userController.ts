import { IGetUsersController, IGetUsersRepository } from './protocols';
export class GetUsersController implements IGetUsersController{
    constructor(private readonly getUsersRepository:IGetUsersRepository){}

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