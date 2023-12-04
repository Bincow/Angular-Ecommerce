import express from 'express';
import { config } from "dotenv"

import { MongoUserRepository } from './repositories/users/userDatabase';
import { GetUsersController } from './controllers/user/userController';
import { MongoClient } from './database/mongo';



const main = async () => {
    config();
    
    const app = express();
    const port = process.env.PORT || 3001;

    await MongoClient.connect();

    app.get("/user", async(req, res) => {
        const userRepository = new MongoUserRepository;
        const userController = new GetUsersController(userRepository);
        const {body, statusCode} = await userController.handle();
        res.send(body).status(statusCode);
        }
    );

    app.listen(port, () => { console.log(`Servidor Ligado, \nPorta: ${port}!`)} );
}
main()

