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


