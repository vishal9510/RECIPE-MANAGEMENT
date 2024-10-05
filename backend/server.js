const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();




// Connect to Database
connectDB();

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json());

// Import Routes
const router = require('./routes/auth');
const recipeRoutes = require('./routes/recipeRoutes');

// Use Routes
app.use('/api/auth', router);
app.use('/api/recipes', recipeRoutes);


// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

