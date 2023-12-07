import { GetPurchasesByUserIdParams, InsertPurchaseParams, Purchase, PurchaseValidated } from "../../models/purchase";
import { PurchaseProduct, PurchaseProductClass } from "../../models/purchase-product";
import { HttpRequest, HttpResponse } from "../protocols"

export interface IPurchasesController{
    insertPurchase(request: HttpRequest<InsertPurchaseParams>):Promise<HttpResponse<Purchase>>;
    getPurchasesByUserId(request: HttpRequest<GetPurchasesByUserIdParams>):Promise<HttpResponse<Purchase[]>>;
}

export interface IPurchasesRepository{
    insertPurchase(params: PurchaseValidated):Promise<Purchase>;
    insertPurchaseProducts(params: PurchaseProductClass[]):Promise<PurchaseProduct[]>;
    getPurchasesByUserId(params: GetPurchasesByUserIdParams): Promise<Purchase[]>;
}
