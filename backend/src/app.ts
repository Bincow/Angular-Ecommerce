import express from 'express';
import { config } from "dotenv"

import { MongoUserRepository } from './repositories/users/userDatabase';
import { UsersController } from './controllers/user/usersController';
import { MongoClient } from './database/mongo';
import { MongoProductRepository } from './repositories/products/productDatabase';
import { ProductsController } from './controllers/product/productsController';



const main = async () => {
    config();
    
    const app = express();
    const port = process.env.PORT || 3001;

    await MongoClient.connect();
    app.use(express.json())

    app.get("/user", async(req, res) => {
        const userRepository = new MongoUserRepository;
        const userController = new UsersController(userRepository);
        const {body, statusCode} = await userController.handle();
        res.send(body).status(statusCode);
        }
    );

    app.get("/product", async(req, res) => {
        const productRepository = new MongoProductRepository;
        const productController = new ProductsController(productRepository);
        const {body, statusCode} = await productController.handle();
        res.send(body).status(statusCode);
        }
    );
    app.post("/product", async(req, res) => {
        const productRepository = new MongoProductRepository;
        const productController = new ProductsController(productRepository);
        const {body, statusCode} = await productController.insertProduct({
            body: req.body
        });
        res.send(body).status(statusCode);
        }
    );

    app.listen(port, () => { console.log(`Servidor Ligado, \nPorta: ${port}!`)} );
}
main()

