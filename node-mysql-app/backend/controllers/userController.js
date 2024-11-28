const db = require('../models/db');

exports.getAllUsers = (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.addUser = (req, res) => {
    const { name, email } = req.body;
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err, results) => {
        if (err) throw err;
        res.json({ message: 'User added', userId: results.insertId });
    });
};

exports.updateUser = (req, res) => {
    const { name, email } = req.body;
    const { id } = req.params;
    const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(sql, [name, email, id], (err) => {
        if (err) throw err;
        res.json({ message: 'User updated' });
    });
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err) => {
        if (err) throw err;
        res.json({ message: 'User deleted' });
    });
};
