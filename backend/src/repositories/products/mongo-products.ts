import { MongoCollection, MongoUser } from './protocols';
import { ObjectId } from "mongodb";
import { IProductsRepository } from "../../controllers/product/protocols";
import { MongoClient } from "../../database/mongo";
import Product, { DeleteProductParams, GetProductByIdParams, ProductParams, ProductValidated, UpdateProductParams } from "../../models/product";


export class MongoProductRepository implements IProductsRepository{
    
    async getProducts(): Promise<Product[]> {
        const products = await MongoClient.db
        .collection<MongoUser>(MongoCollection)
        .find({})
        .toArray();
        
        return products.map(({_id, ...rest}) => ({ id: _id.toHexString(), ...rest}));
    }

    async insertProduct(params: ProductValidated): Promise<Product> {
        const {insertedId} = await MongoClient.db
        .collection(MongoCollection)
        .insertOne(params);

        const product = await MongoClient.db
        .collection<MongoUser>(MongoCollection)
        .findOne({ _id: insertedId });

        if(!product)
            throw new Error('Produto não inserido');

        const { _id, ...rest } = product;
        return { id: _id.toHexString(), ...rest}
    }

    async updateProduct(params: UpdateProductParams): Promise<Product> {
        const {id, ...restParam} = params;

        await MongoClient.db.collection(MongoCollection).updateOne(
            { _id: new ObjectId(id) },
            { $set:{...restParam} }
            );

        const product = await MongoClient.db
        .collection<MongoUser>(MongoCollection)
        .findOne({ _id: new ObjectId(id) });

        if(!product)
            throw new Error('Produto não atualizado');

        const { _id, ...rest } = product;
        return { id: _id.toHexString(), ...rest}
    }
    
    async deleteProduct(params: DeleteProductParams): Promise<Product> {
        const {id} = params;
        
        const product = await MongoClient.db.collection<MongoUser>(MongoCollection).findOne({ _id: new ObjectId(id) });
        if(!product)
            throw new Error('Produto não encontrado');

        const {deletedCount} = await MongoClient.db.collection(MongoCollection).deleteOne({ _id: new ObjectId(id) });
        if (!deletedCount) 
            throw new Error('Produto não deletado');
        
        const { _id, ...rest } = product;
        return { id: _id.toHexString(), ...rest}
    }

    async getProductsById(params: GetProductByIdParams): Promise<Product[]> {
        const {ids} = params;
        const objectIds: ObjectId[] = ids.map(id => new ObjectId(id));

        const products = await MongoClient.db.collection<MongoUser>(MongoCollection).find({ _id:{ $in: objectIds } },).toArray();;
        if(!products)
            throw new Error('Produtos não encontrado');

        return products.map(({_id, ...rest}) => ({ id: _id.toHexString(), ...rest}));
    }

}