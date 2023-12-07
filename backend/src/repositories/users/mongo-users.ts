import { MongoCollection, MongoUser } from './protocols';
import { ObjectId } from "mongodb";
import { MongoClient } from "../../database/mongo";
import { IUsersRepository } from '../../controllers/user/protocols';
import User, { GetUserByLoginParams } from '../../models/user';
import bcrypt from 'bcrypt';

export class MongoUserRepository implements IUsersRepository{
    async getUserByLogin(params: GetUserByLoginParams): Promise<User> {
        const {login, password} = await params;
        
        const user = await MongoClient.db.collection<MongoUser>(MongoCollection).findOne({ login: login });
       
        if(!user || !await bcrypt.compare(password, user.password))
            throw new Error('Login/Senha invalidos');

        const { _id, ...rest } = user;
        return { id: _id.toHexString(), ...rest}
    }
   
}