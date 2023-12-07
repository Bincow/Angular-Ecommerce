import { DeleteProductParams, GetProductByIdParams, Product, ProductParams, UpdateProductParams } from './../../models/product';
import { ErrorMsg } from '../../utils/errorMessages';
import { Mapper } from '../../utils/jsonValidators';
import { HttpRequest, HttpResponse } from '../protocols';
import { IProductsController, IProductsRepository } from './protocols';
import { ApiInfoMsg, ApiResponse } from '../../utils/apiMessages';

export class ProductsController implements IProductsController {
    constructor(private readonly productsRepository: IProductsRepository) {}
    
    async handle(): Promise<HttpResponse<Product[]>> {
        try {

            const products = await this.productsRepository.getProducts();

            return { statusCode: 200, body: new ApiResponse(true, ApiInfoMsg.default, products) };
        } catch (error) {
            return this.baseError();
        }
    }

    async insertProduct(request: HttpRequest<ProductParams>): Promise<HttpResponse<Product>> {
        try {

            let productValidated = Mapper.ProductValidator(request.body);
            const product = await this.productsRepository.insertProduct(productValidated);
            
            return { statusCode: 200, body: new ApiResponse(true, ApiInfoMsg.default, product) };
        } catch (ex:any) {
            return this.baseError(ex.message);
        }
    }

    async updateProduct(request: HttpRequest<UpdateProductParams>): Promise<HttpResponse<Product>> {
        try {

            let productValidated = Mapper.UpdateProductValidator(request.body);
            const product = await this.productsRepository.updateProduct(productValidated);

            return { statusCode: 200, body: new ApiResponse(true, ApiInfoMsg.default, product) };
        } catch (ex:any) {
            return this.baseError(ex.message);
        }
    }
    
    async deleteProduct(request: HttpRequest<DeleteProductParams>): Promise<HttpResponse<Product>> {
        try {

            let productValidated = Mapper.DeleteProductValidator(request.body);
            const product = await this.productsRepository.deleteProduct(productValidated);

            return { statusCode: 200, body: new ApiResponse(true, ApiInfoMsg.default, product) };
        } catch (ex:any) {
            return this.baseError(ex.message);
        }
    }
    
    async getProductsById(request: HttpRequest<GetProductByIdParams>): Promise<HttpResponse<Product[]>> {
        try {

            let productValidated = Mapper.GetProductsValidator(request.body);
            const products = await this.productsRepository.getProductsById(productValidated);

            return { statusCode: 200, body: new ApiResponse(true, ApiInfoMsg.default, products) };
        } catch (ex:any) {
            return this.baseError(ex.message);
        }
    }

    baseError<T>(message?: string): HttpResponse<T> {
        return { statusCode: 400, body: new ApiResponse(false, message ? message : ApiInfoMsg.default)};
    }
}
