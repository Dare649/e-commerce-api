import fs from 'fs';
import path from 'path';

// Helper function to load mock data
const loadProducts = () => {
  const filePath = path.join(process.cwd(), 'products.json');
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

// Get all products
export const getAllProducts = (req, res) => {
  try {
    const products = loadProducts();
    res.status(200).json({
      success: true,
      data: products,
      message: 'Products retrieved successfully!'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to retrieve products' });
  }
};

// Get product by ID
export const getProductById = (req, res) => {
  try {
    const products = loadProducts();
    const product = products.find(p => p.id === parseInt(req.params.id));
    
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.status(200).json({
      success: true,
      data: product,
      message: 'Product retrieved successfully!'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to load product' });
  }
};
