import Product from "../../models/product";

export const MongoCollection = 'products';
export type MongoUser = Omit<Product, "id">;