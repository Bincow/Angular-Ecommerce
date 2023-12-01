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
  
class Purchase {
    constructor(
        public id: number,
        public userId: number,
        public products: PurchaseProduct[],
        public paymentType: PaymentType,
        public situation: PurchaseSituation,
        public totalValue: number,
        public address: string
    ) {}
}

export default Purchase;

