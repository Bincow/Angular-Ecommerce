import validator from 'validator';
import { DeleteProductParams, GetProductByIdParams, Product, ProductParams, ProductValidated, UpdateProductParams } from '../models/product';
import { GetUserByLoginParams } from '../models/user';
import { ErrorMsg } from './errorMessages';
import bcrypt from 'bcrypt';

export class Mapper{
    
    //#region Product
    static ProductValidator(product?: ProductParams): ProductValidated
    {
        const requiredFields = ["name","price","quantity"]

        if (!product) 
            throw new Error(ErrorMsg.EX001); 

        for(const field of requiredFields){
            if(!product[field as keyof ProductParams])
                throw new Error(ErrorMsg.EX002.replace('{0}',field));  
        }

        if(product.price <= 0)
            throw new Error(ErrorMsg.EX003);   

        return new ProductValidated(product);
    }

    static UpdateProductValidator(product?: UpdateProductParams): UpdateProductParams
    {
        const requiredFields = ["id"]
         
        if (!product) 
            throw new Error(ErrorMsg.EX001); 

        for(const field of requiredFields){
            if(!product[field as keyof UpdateProductParams])
                throw new Error(ErrorMsg.EX002.replace('{0}',field));  
        }

        if(product.price <= 0)
            throw new Error(ErrorMsg.EX003);  
        
        return product;
    }

    static DeleteProductValidator(product?:DeleteProductParams): DeleteProductParams
    {
        const requiredFields = ["id"]
         
        if (!product) 
            throw new Error(ErrorMsg.EX001); 

        for(const field of requiredFields){
            if(!product[field as keyof DeleteProductParams])
                throw new Error(ErrorMsg.EX002.replace('{0}',field));  
        }
        
        return product;
    }

    static GetProductsValidator(product?: GetProductByIdParams): GetProductByIdParams
    {
        const requiredFields = ["ids"]

        if (!product) 
            throw new Error(ErrorMsg.EX001); 

        for(const field of requiredFields){
            if(!product[field as keyof GetProductByIdParams])
                throw new Error(ErrorMsg.EX002.replace('{0}',field));  
        }

        return product;
    }
    //#endregion

    static async GetUserByLoginValidator(user?: GetUserByLoginParams): Promise<GetUserByLoginParams> {
        const requiredFields = ["login", "password"];
    
        if (!user) throw new Error(ErrorMsg.EX001);
    
        for (const field of requiredFields) {
            if (!user[field as keyof GetUserByLoginParams])
                throw new Error(ErrorMsg.EX002.replace('{0}', field));
        }

        if(!validator.isEmail(user.login))
            throw new Error(ErrorMsg.EX004);
        
        return user;
    }
    

}