import express from 'express';
import { ProductsController } from '../controllers/product/productsController';
import { MongoProductRepository } from '../repositories/products/mongo-products';
import { ApiErrorMsg, ApiResponse } from '../utils/apiMessages';
import { ErrorMsg } from '../utils/errorMessages';

const router = express.Router();

router.post("/product", async (req, res) => {
    const productController = new ProductsController(new MongoProductRepository());
    let apiResponse:any;
    const { method, ...request } = req.body;
    try {
        switch(method){
            case 'GetProducts':
                apiResponse = await productController.handle();
                break;

            case 'InsertProduct':
                apiResponse = await productController.insertProduct({ body: request });
                break;

            case 'UpdateProduct':
                apiResponse = await productController.updateProduct({ body: request });
                break;

            case 'DeleteProduct':
                apiResponse = await productController.deleteProduct({ body: request });
                break;
            
            case 'GetProductsById':
                apiResponse = await productController.getProductsById({ body: request });
                break;

            default:
                apiResponse = { statusCode: 400, body: new ApiResponse(false, ApiErrorMsg.EX001)};
                break;
        }
    } catch (error) {
        apiResponse = { statusCode: 500, body: new ApiResponse(false, ErrorMsg.default)};
    }

    const { body, statusCode } = apiResponse;

    console.log(`method: ${method}, \nstatus: ${statusCode}!`)
    res.status(statusCode).send(body);
});

module.exports = router;
