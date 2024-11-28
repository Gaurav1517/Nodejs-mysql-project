

const express = require('express');
const router = express.Router();
const db = require('../models/db'); // Adjust the path if necessary

// Fetch all users from the database (GET request)
router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching users', error: err });
        }
        res.json(results);  // Send the data back as JSON
    });
});

// Add a new user to the database (POST request)
router.post('/', (req, res) => {
    const { name, email } = req.body;

    // Ensure name and email are provided
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    // Insert the new user into the database
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.execute(query, [name, email], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error adding user', error: err });
        }
        res.status(201).json({
            message: 'User added successfully',
            user: { id: result.insertId, name, email }
        });
    });
});

module.exports = router;
