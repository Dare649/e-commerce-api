

// controllers/cart.js

let cart = []; // In-memory cart

// Add product to cart
export const addToCart = (req, res) => {
    const { productsId } = req.body;  

    // Check if productsId is provided
    if (!productsId) {
        return res.status(400).json({
            success: false,
            message: "Product ID is required.",
        });
    }

    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.productsId === productsId);

    if (existingProduct) {
        // If the product is already in the cart, notify the user
        return res.status(400).json({
            success: false,
            message: "This product is already in your cart.",
        });
    }

    // If the product doesn't exist in the cart, add it with quantity 1
    cart.push({ productsId, quantity: 1 });

    // Return the updated cart
    res.status(200).json({
        success: true,
        message: "Product added to cart successfully!",
        data: cart,
    });
};


// Get all products in the cart
export const getCart = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Retrieved cart items successfully!",
        data: cart,
    });
};


export const getCartItemCount = (req, res) => {
    const cart = req.cart || []; // Assuming cart is an array of products in the request object

    if (!Array.isArray(cart)) {
        return res.status(400).json({
            success: false,
            message: "Invalid cart data",
        });
    }

    // Count unique products
    const uniqueProducts = new Set(cart.map(item => item.productsId)).size;

    res.status(200).json({
        success: true,
        message: "Retrieved unique product count successfully!",
        uniqueProducts, // This will give the total number of unique products
    });
};


