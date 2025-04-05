import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';  
import productsRoutes from './routes/products.js';
import cartRoutes from './routes/carts.js';

const app = express();
const PORT = 5000;

// Enable CORS for all origins
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// API Routes
app.use('/api/products', productsRoutes);
app.use('/api/carts', cartRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
