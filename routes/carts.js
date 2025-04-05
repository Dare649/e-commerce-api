import express from 'express';
import {
    addProductToCart,
    getCart
} from '../controllers/Cart.js';

const router = express.Router();


router.get('/', getCart);

router.post('/addToCart', addProductToCart);


export default router;