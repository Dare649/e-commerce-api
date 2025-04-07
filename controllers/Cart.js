


let cart = []; // In-memory cart

// Add product to cart
export const addToCart = (req, res) => {
    const { productId, quantity } = req.body;

    // Check if product already exists in cart
    const existingProduct = cart.find(item => item.productId === productId);

    if (existingProduct) {
        // If product exists, update quantity
        existingProduct.quantity += quantity;
    } else {
        // If product doesn't exist, add new item to cart
        cart.push({ productId, quantity });
    }

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
