
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

    async insertProduct(params: Omit<Product, "id">): Promise<Product> {
        const {insertedId} = await MongoClient.db
        .collection('products')
        .insertOne(params);

        const product = await MongoClient.db
        .collection<Omit<Product, "id">>('products')
        .findOne({ _id: insertedId });

        if(!product)
            throw new Error('produto não inserido');

        const { _id, ...rest } = product;

        return { id: _id.toHexString(), ...rest}
    }

    async updateProduct(product: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }

    async deleteProduct(product: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    

}