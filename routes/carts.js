import express from 'express';
import {
    addToCart,
    getCart,
    getCartItemCount
} from '../controllers/Cart.js';

const router = express.Router();


router.get('/', getCart);

router.post('/addToCart', addToCart);

router.get('/count', getCartItemCount);

export default router;