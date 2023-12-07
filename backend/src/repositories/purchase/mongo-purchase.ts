import { MongoCollection, MongoCollectionFlex, MongoFlex, MongoUser } from './protocols';
import { ObjectId } from "mongodb";
import { MongoClient } from "../../database/mongo";
import { IPurchasesRepository } from '../../controllers/purchase/protocols';
import { PurchaseValidated, Purchase, GetPurchasesByUserIdParams } from '../../models/purchase';
import { PurchaseProduct } from '../../models/purchase-product';

export class MongoPurchaseRepository implements IPurchasesRepository{

    async insertPurchase(params: PurchaseValidated): Promise<Purchase> {
        const {insertedId} = await MongoClient.db
        .collection(MongoCollection)
        .insertOne(params);

        const purchase = await MongoClient.db
        .collection<MongoUser>(MongoCollection)
        .findOne({ _id: insertedId });

        if(!purchase)
            throw new Error('Compra não efetuada');

        const { _id, ...rest } = purchase;
        return { id: _id.toHexString(), ...rest}
    }
    
    async insertPurchaseProducts(params: PurchaseProduct[]): Promise<PurchaseProduct[]> {
        try {
            const { insertedIds } = await MongoClient.db
                .collection(MongoCollectionFlex)
                .insertMany(params);
    
            const objectIds: ObjectId[] = Object.values(insertedIds).map((id) => new ObjectId(id as any));
    
            const purchaseProduct = await MongoClient.db
                .collection<MongoFlex>(MongoCollectionFlex)
                .find({ _id: { $in: objectIds } })
                .toArray();
    
            if (!purchaseProduct || purchaseProduct.length === 0) {
                throw new Error('Produtos não encontrados');
            }
    
            return purchaseProduct.map(({ _id, ...rest }) => ({ id: _id.toHexString(), ...rest }));
        } catch (error) {
            console.error('Erro ao inserir produtos de compra:', error);
            throw error;
        }
    }   
    
    async getPurchasesByUserId(params: GetPurchasesByUserIdParams): Promise<Purchase[]> {

        const purchases = await MongoClient.db
            .collection<MongoUser>(MongoCollection)
            .find({ userId: params.userId })
            .toArray();

        if (!purchases || purchases.length === 0)
            throw new Error('Nenhuma compra encontrada para o usuário.');
        
        return purchases.map(({ _id, ...rest }) => ({ id: _id.toHexString(), ...rest }));
    }
    
   
}