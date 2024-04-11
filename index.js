const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3');
const app = express();
const port = process.env.PORT || 10000;

app.use(express.json());

// Allow CORS from specific origin
app.use(cors({
    origin: 'https://benkivuva.github.io'
}));

// Create a new instance of SQLite database
const db = new sqlite3.Database('halal.db');

// Sample data array
let data = [];

// Create
app.post('/api/data', (req, res) => {
    const newItem = req.body;
    data.push(newItem);
    res.json(newItem);
});

// Read from SQLite database
app.get('/api/data', (req, res) => {
    db.all('SELECT * FROM restaurants', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Update
app.put('/api/data/:id', (req, res) => {
    const id = req.params.id;
    const newData = req.body;
    data = data.map(item => (item.id === id ? newData : item));
    res.json(newData);
});

// Delete
app.delete('/api/data/:id', (req, res) => {
    const id = req.params.id;
    data = data.filter(item => item.id !== id);
    res.status(204).end();
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});