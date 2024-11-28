
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());  // Allow requests from all domains (for testing)

// Use the user routes for API requests
app.use('/api/users', userRoutes);

// Serve static frontend files (if using static HTML)
app.use(express.static(path.join(__dirname, '../frontend')));

// Default route for frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/views/index.html'));
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
