enum ProductType {
   Transparent = 0,
   Filled = 1,
   Holographic = 2,
   Anime = 3,
   Simple = 4,
}
  
class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public quantity: number,
        public types: ProductType[],
        public image: string 
    ) {}
}

export default Product;