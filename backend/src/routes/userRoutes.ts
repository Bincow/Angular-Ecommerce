import express from 'express';
import { ProductsController } from '../controllers/product/productsController';
import { MongoProductRepository } from '../repositories/products/mongo-products';

const router = express.Router();

router.post("/user", async (req, res) => {
    const productController = new ProductsController(new MongoProductRepository());
    let apiResponse;

    if (req.body.method === 'InsertProduct') {
        apiResponse = await productController.insertProduct({ body: req.body });
    } else {
        apiResponse = await productController.handle();
    }

    const { body, statusCode } = apiResponse;

    console.log(`body: ${body}, \nstatus: ${statusCode}!`)
    res.status(statusCode).send(body);
});

module.exports = router;
