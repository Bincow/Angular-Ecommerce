import { ProductList } from './../../models/purchase';
import { InsertPurchaseParams, Purchase, GetPurchasesByUserIdParams, PurchaseWProducts } from "../../models/purchase";
import { PurchaseProduct, PurchaseProductClass } from "../../models/purchase-product";
import { ApiInfoMsg, ApiResponse } from "../../utils/apiMessages";
import { Mapper } from "../../utils/jsonValidators";
import { HttpRequest, HttpResponse, baseError } from "../protocols";
import { IPurchasesController, IPurchasesRepository } from "./protocols";


export class PurchasesController implements IPurchasesController{
    constructor(private readonly purchasesRepository:IPurchasesRepository){}

    async insertPurchase(request: HttpRequest<InsertPurchaseParams>): Promise<HttpResponse<Purchase>> {
        try {

            const {products, purchaseValidated} = Mapper.InsertPurchaseValidator(request.body);

            const purchase = await this.purchasesRepository.insertPurchase(purchaseValidated);
            
            const purhcaseProductList:PurchaseProductClass[] = products.map(prop => new PurchaseProductClass(prop, purchase.id));

            const purhcaseProduct = await this.purchasesRepository.insertPurchaseProducts(purhcaseProductList);
            const productList: ProductList[] =  purhcaseProduct.map((prop) => new ProductList(prop.id, prop.productId, prop.quantity, prop.value));

            const purchaseWProduct: PurchaseWProducts = new PurchaseWProducts(purchase,productList)

            return { statusCode: 200, body: new ApiResponse(true, ApiInfoMsg.default, purchaseWProduct) };
        } catch (ex:any) {
            return baseError(ex.message);
        }
    }

    async getPurchasesByUserId(request: HttpRequest<GetPurchasesByUserIdParams>): Promise<HttpResponse<Purchase[]>> {
        try {

            const purchaseParam = Mapper.GetPurchasesByUserIdValidator(request.body);

            const purchase = await this.purchasesRepository.getPurchasesByUserId(purchaseParam);

            return { statusCode: 200, body: new ApiResponse(true, ApiInfoMsg.default, purchase) };
        } catch (ex:any) {
            return baseError(ex.message);
        }
    }
    
   

    
}