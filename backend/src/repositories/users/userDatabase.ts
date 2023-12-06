
import { IUsersRepository } from "../../controllers/user/protocols";
import User from "../../models/user";

export class MongoUserRepository implements IUsersRepository{
    async getUsers(): Promise<User[]> {
        return [
            {
            id: "10",
            login:'jhei@gmail.com',
            password: '1234',
            type: 0
            },
        ];
    }

}