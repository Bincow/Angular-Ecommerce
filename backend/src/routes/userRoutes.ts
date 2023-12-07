import express from 'express';
import { UsersController } from '../controllers/user/usersController';
import { MongoUserRepository } from '../repositories/users/mongo-users';
import { ApiErrorMsg, ApiResponse } from '../utils/apiMessages';
import { ErrorMsg } from '../utils/errorMessages';

const router = express.Router();

router.post("/user", async (req, res) => {
    const userController = new UsersController(new MongoUserRepository());
    let apiResponse;

        try {
            const { method, ...request } = req.body;
            
            switch(method){
                case 'GetUserByLogin':
                    apiResponse = await userController.getUserByLogin({ body: request });
                    break;
    
                default:
                    apiResponse = { statusCode: 400, body: new ApiResponse(false, ApiErrorMsg.EX001)};
                    break;
            }
        } catch (error) {
            apiResponse = { statusCode: 500, body: new ApiResponse(false, ErrorMsg.default)};
        }
    
    const { body, statusCode } = apiResponse;

    console.log(`body: ${body}, \nstatus: ${statusCode}!`)
    res.status(statusCode).send(body);
});

module.exports = router;
