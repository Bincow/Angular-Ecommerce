
import { IGetUsersRepository } from "../../controllers/user/protocols";
import User from "../../models/user";

export class MongoUserRepository implements IGetUsersRepository{
    async getUsers(): Promise<User[]> {
        return [
            {
            id: 10,
            login:'jhei@gmail.com',
            password: '1234',
            type: 0
            },
        ];
    }

}