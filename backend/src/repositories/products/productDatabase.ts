
import { IProductsRepository } from "../../controllers/product/protocols";
import { MongoClient } from "../../database/mongo";
import Product from "../../models/product";

export class MongoProductRepository implements IProductsRepository{
    async getProducts(): Promise<Product[]> {
        const products = await MongoClient.db
        .collection<Omit<Product, "id">>('products')
        .find({})
        .toArray();
        
        return products.map(({_id, ...rest}) => ({...rest, id: _id.toHexString()}));
    }

}