import { HttpRequest, HttpResponse } from './../protocols';
import { Product } from './../../models/product';


export interface IProductsController{
    handle():Promise<HttpResponse<Product[]>>
    insertProduct(request: HttpRequest<Omit<Product, "id">>):Promise<HttpResponse<Product>>;
    updateProduct(request: HttpRequest<Product>):Promise<HttpResponse<Product>>;
    deleteProduct(request: HttpRequest<Product>):Promise<HttpResponse<Product>>;
}

export interface IProductsRepository{
    getProducts():Promise<Product[]>

    insertProduct(params: Omit<Product, "id">): Promise<Product>;
    updateProduct(product: Product): Promise<Product>;
    deleteProduct(product: Product): Promise<Product>;
}
