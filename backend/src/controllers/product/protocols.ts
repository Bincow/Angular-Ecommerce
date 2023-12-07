import { HttpRequest, HttpResponse } from './../protocols';
import { DeleteProductParams, GetProductByIdParams, Product, ProductParams, ProductValidated, UpdateProductParams } from './../../models/product';


export interface IProductsController{
    handle():Promise<HttpResponse<Product[]>>
    insertProduct(request: HttpRequest<ProductParams>):Promise<HttpResponse<Product>>;
    updateProduct(request: HttpRequest<UpdateProductParams>):Promise<HttpResponse<Product>>;
    deleteProduct(request: HttpRequest<DeleteProductParams>):Promise<HttpResponse<Product>>;
    getProductsById(request: HttpRequest<GetProductByIdParams>):Promise<HttpResponse<Product[]>>;
}

export interface IProductsRepository{
    getProducts():Promise<Product[]>
    insertProduct(params: ProductValidated): Promise<Product>;
    updateProduct(params: UpdateProductParams): Promise<Product>;
    deleteProduct(params: DeleteProductParams): Promise<Product>;
    getProductsById(params: GetProductByIdParams): Promise<Product[]>;
}
