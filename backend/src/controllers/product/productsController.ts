import Product from '../../models/product';
import { ErrorMsg } from '../../utils/errorMessages';
import { HttpRequest, HttpResponse } from '../protocols';
import { IProductsController, IProductsRepository } from './protocols';

export class ProductsController implements IProductsController {
    constructor(private readonly productsRepository: IProductsRepository) {}

    async handle(): Promise<HttpResponse<Product[]>> {
        try {
            const products = await this.productsRepository.getProducts();

            return {
                statusCode: 200,
                body: products,
            };
        } catch (error) {
            return this.baseError();
        }
    }

    async insertProduct(request: HttpRequest<Omit<Product, "id">>): Promise<HttpResponse<Product>> {
        try {
            if (!request.body) 
                throw new Error(ErrorMsg.EX001); 
            
            const product = await this.productsRepository.insertProduct(request.body);
            
            return {
                statusCode: 201,
                body: product,
            };
        } catch (ex:any) {
            return this.baseError(ex.message);
        }
    }

    async updateProduct(request: HttpRequest<Product>): Promise<HttpResponse<Product>> {
        throw new Error('Method not implemented.');
    }
    
    async deleteProduct(request: HttpRequest<Product>): Promise<HttpResponse<Product>> {
        throw new Error('Method not implemented.');
    }
    
    baseError<T>(message?: string): HttpResponse<T> {
        return { statusCode: 400, body: message ? message : 'Tente novamente mais tarde' };
    }
}
