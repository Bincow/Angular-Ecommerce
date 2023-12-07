import { PurchaseProduct, PurchaseProductParam } from "./purchase-product";

enum PaymentType {
    CreditCard = 0,
    DebitCard = 1,
    Pix = 2,
    Boleto = 3
}

export enum PurchaseSituation {
    Create = 0,
    Preparing = 1,
    SentToDistributor = 2,
    SentToClient = 3,
    Delivered = 4,
    Error = 5
}
  
export interface Purchase {
    id: string,
    userId: string,
    paymentType: PaymentType,
    situation: PurchaseSituation,
    totalValue: number,
    address: string
}

export class PurchaseWProducts {
    id: string;
    userId: string;
    products: {
        purchaseReference:string,
        productId: string,
        quantity: number,
        value: number,
    }[];
    paymentType: PaymentType;
    situation: PurchaseSituation;
    totalValue: number;
    address: string;

    constructor(param:Purchase, products:ProductList[]){
        this.id = param.id
        this.userId = param.userId;
        this.products = products;
        this.paymentType = param.paymentType;
        this.totalValue =param.totalValue;
        this.address = param.address;
        this.situation = param.situation;
    }
}
export class ProductList{
    purchaseReference:string;
    productId: string;
    quantity: number;
    value: number;

    constructor(purchaseReferenceId:string,productId:string,quantity:number,value:number){
        this.purchaseReference = purchaseReferenceId
        this.productId = productId;
        this.quantity = quantity;
        this.value =value;
    }
}



export class PurchaseValidated{
    userId: string;
    paymentType: PaymentType;
    situation: PurchaseSituation;
    totalValue: number;
    address: string;

    constructor(param:InsertPurchaseParams, situation:PurchaseSituation){
        this.userId = param.userId;
        this.paymentType = param.paymentType;
        this.totalValue =param.totalValue;
        this.address = param.address;
        this.situation = situation;
    }
}

//#region Params
export interface GetPurchasesByUserIdParams{
    userId: string
}

export interface InsertPurchaseParams{
    userId: string,
    products: PurchaseProductParam[],
    paymentType: PaymentType,
    totalValue: number,
    address: string
}
//#endregion

