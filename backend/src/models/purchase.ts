import { PurchaseProduct } from "./purchase-product";

enum PaymentType {
    CreditCard = 0,
    DebitCard = 1,
    Pix = 2,
    Boleto = 3
}

enum PurchaseSituation {
    Create = 0,
    Preparing = 1,
    SentToDistributor = 2,
    SentToClient = 3,
    Delivered = 4,
    Error = 5
}
  
export interface Purchase {
    id: number,
    userId: number,
    products: PurchaseProduct[],
    paymentType: PaymentType,
    situation: PurchaseSituation,
    totalValue: number,
    address: string
}

