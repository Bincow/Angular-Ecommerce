enum ProductType {
   Transparent = 0,
   Filled = 1,
   Holographic = 2,
   Anime = 3,
   Simple = 4,
}

export interface Product {
    id: string,
    name: string,
    price: number,
    quantity: number,
    types: ProductType[],
    image: string 
}

//#region InsertProduct
export interface ProductParams {
    name: string,
    price: number,
    quantity: number,
    types: ProductType[],
    image: string 
}

export class ProductValidated {
    name: string;
    price: number;
    quantity: number;
    types?: ProductType[];
    image?: string ;


    constructor(param: ProductParams) {
        this.name = param.name;
        this.price = param.price;
        this.quantity = param.quantity;
        this.types = param.types;
        this.image = param.image;
    }
}
//#endregion
//#region UpdateProduct
export interface UpdateProductParams {
    id:string,
    name: string,
    price: number,
    quantity: number,
    types: ProductType[],
    image: string 
}
//#endregion
//#region DeleteProduct
export interface DeleteProductParams {
    id:string,
}
//#endregion
//#region DeleteProduct
export interface GetProductByIdParams {
    ids:string[],
}
//#endregion

export default Product;