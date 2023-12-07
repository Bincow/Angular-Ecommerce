import validator from 'validator';
import { DeleteProductParams, GetProductByIdParams, Product, ProductParams, ProductValidated, UpdateProductParams } from '../models/product';
import { GetUserByLoginParams } from '../models/user';
import { ErrorMsg } from './errorMessages';
import bcrypt from 'bcrypt';
import { GetPurchasesByUserIdParams, InsertPurchaseParams, PurchaseSituation, PurchaseValidated } from '../models/purchase';
import { PurchaseProductParam } from '../models/purchase-product';

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

    //#region User
    static GetUserByLoginValidator(user?: GetUserByLoginParams): GetUserByLoginParams {
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
    //#endregion

    //#region Purchase
    static InsertPurchaseValidator(param?: InsertPurchaseParams): { products: PurchaseProductParam[], purchaseValidated: PurchaseValidated } {
        const requiredFields = ["userId","products","paymentType","totalValue","address"];
    
        if (!param) throw new Error(ErrorMsg.EX001);
    
        for (const field of requiredFields) {
            if (!param[field as keyof GetPurchasesByUserIdParams])
                throw new Error(ErrorMsg.EX002.replace('{0}', field));
        }
       
        const products = param.products;
        const purchaseValidated = new PurchaseValidated(param, PurchaseSituation.Create);

        return { products, purchaseValidated };
    }

    static GetPurchasesByUserIdValidator(param?: GetPurchasesByUserIdParams): GetPurchasesByUserIdParams {
        const requiredFields = ["userId"];
    
        if (!param) throw new Error(ErrorMsg.EX001);
    
        for (const field of requiredFields) {
            if (!param[field as keyof GetPurchasesByUserIdParams])
                throw new Error(ErrorMsg.EX002.replace('{0}', field));
        }
        
        return param;
    }
    //#endregion

}