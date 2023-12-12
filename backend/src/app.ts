import express from 'express';
import { config } from "dotenv"
import cors from 'cors';

import { MongoUserRepository } from './repositories/users/mongo-users';
import { UsersController } from './controllers/user/usersController';
import { MongoClient } from './database/mongo';
import { MongoProductRepository } from './repositories/products/mongo-products';
import { ProductsController } from './controllers/product/productsController';


const main = async () => {
    config();
    
    const app = express();
    const port = process.env.PORT || 3001;

    await MongoClient.connect();
    const userRoutes = require('./routes/userRoutes');
    const productRoutes = require('./routes/productRoutes');
    const purchaseRoutes = require('./routes/purchaseRoutes');

    app.use(express.json())
    app.use(cors())
    app.use('/api', userRoutes);
    app.use('/api', productRoutes);
    app.use('/api', purchaseRoutes);
    app.listen(port, () => { console.log(`Servidor Ligado, \nPorta: ${port}!`)} );
}
main()

