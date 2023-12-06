import { IProductsController, IProductsRepository } from './protocols';
export class ProductsController implements IProductsController{
    constructor(private readonly productsRepository:IProductsRepository){}

    async handle() {
        try
        {
            const users = await this.productsRepository.getProducts();

            return {
                statusCode: 200,
                body:users
            }
        }catch(Error){
            return {
                statusCode: 400,
                body:"deu merda"
            }
        }
    }
    
}