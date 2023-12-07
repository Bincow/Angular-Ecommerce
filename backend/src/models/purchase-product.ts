export interface PurchaseProduct {
    id:string,
    purchaseId: string,
    productId: string,
    quantity: number,
    value: number,
}

export class PurchaseProductClass {
    purchaseId: string;
    productId: string;
    quantity: number;
    value: number;

    constructor(PurchaseProduc: PurchaseProductParam, purchaseId:string){
        this.purchaseId = purchaseId;
        this.productId = PurchaseProduc.productId;
        this.quantity = PurchaseProduc.quantity;
        this.value = PurchaseProduc.value;
    }
}

export interface PurchaseProductParam {
    productId: string,
    quantity: number,
    value: number
}