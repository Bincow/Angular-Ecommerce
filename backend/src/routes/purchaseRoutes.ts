import express from 'express';
import { PurchasesController } from '../controllers/purchase/purchaseController';
import { MongoPurchaseRepository } from '../repositories/purchase/mongo-purchase';
import { ApiErrorMsg, ApiResponse } from '../utils/apiMessages';
import { ErrorMsg } from '../utils/errorMessages';

const router = express.Router();

router.post("/purchase", async (req, res) => {
    const purchasesController = new PurchasesController(new MongoPurchaseRepository());
    let apiResponse;

    try {
        const { method, ...request } = req.body;
        
        switch(method){
            case 'InsertPurchase':
                apiResponse = await purchasesController.insertPurchase({ body: request });
                break;

            case 'GetPurchasesByUserId':
                apiResponse = await purchasesController.getPurchasesByUserId({ body: request });
                break;

            default:
                apiResponse = { statusCode: 400, body: new ApiResponse(false, ApiErrorMsg.EX001)};
                break;
        }
    } catch (error) {
        apiResponse = { statusCode: 500, body: new ApiResponse(false, ErrorMsg.default)};
    }

    const { body, statusCode } = apiResponse;

    console.log(`body: ${body}, \nstatus: ${statusCode}!`)
    res.status(statusCode).send(body);
});

module.exports = router;
