import { Product } from './../../models/product';
import { JsonBase } from './../../models/jsonBase';

export interface IProductsController{
    handle():Promise<JsonBase>
}

export interface IProductsRepository{
    getProducts():Promise<Product[]>
}
