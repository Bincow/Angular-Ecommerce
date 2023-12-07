import { Purchase } from "../../models/purchase";
import { PurchaseProduct } from "../../models/purchase-product";

export const MongoCollection = 'purchases';
export type MongoUser = Omit<Purchase, "id">;

export const MongoCollectionFlex = 'purchases-products';
export type MongoFlex = Omit<PurchaseProduct, "id">;