enum ProductType {
   Transparent = 0,
   Filled = 1,
   Holographic = 2,
   Anime = 3,
   Simple = 4,
}
  
export interface Product {
    id: number,
    name: string,
    price: number,
    quantity: number,
    types: ProductType[],
    image: string 
}

export default Product;